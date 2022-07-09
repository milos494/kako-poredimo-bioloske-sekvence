import { Alert, AlertTitle, Checkbox } from '@mui/material';
import React, { useEffect, useReducer, useState } from 'react';
import { getData } from '../../api';
import Button from '../../basic/Button';
import Input from '../../basic/Input';
import Manhattan from '../../components/Manhattan';
import useHashNavigation from '../../hooks/navigation';
import Content from './content';
import { StyledManhattanPageWrapper } from './ManhattanPageStyles';
import { manhattanInitialState, manhattanReducer } from './reducer';

const ManhattanPage = () => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [draw, setDraw] = useState();
  const [manhattanInput, dispatchManhattanInput] = useReducer(
    manhattanReducer,
    manhattanInitialState,
  );

  const [manhattanOutput, setManhattanOutput] = useState(null);
  const [fileError, setFileError] = useState(false);
  const [iterative, setIterative] = useState(true);

  useHashNavigation();
  useEffect(() => {
    setManhattanOutput(null);
    setFileError(false);
  }, [width, height, manhattanInput]);

  useEffect(() => {
    setDraw(false);
    setFileError(false);
    dispatchManhattanInput({});
  }, [width, height]);

  const inputChange = (e, type) => {
    const value = +e.target.value;
    if (value || value === 0) {
      if (type === 'height') {
        setHeight(value);
      } else {
        setWidth(value);
      }
    }
  };

  const handleIterative = (e) => {
    setIterative(e.target.checked);
  };

  const drawManhattan = () => {
    setDraw(true);
  };

  const getManhattan = async () => {
    const output = await getData('manhattan', { input: manhattanInput, width, height });
    setManhattanOutput(output);
  };

  const parseFileInput = (down, right) => {
    let error = false;
    if (down.length !== height - 1 && right !== width - 1) {
      error = true;
    }
    down.forEach((element) => {
      if (element.length !== width) {
        error = true;
      }
    });
    right.forEach((element) => {
      if (element.length !== height) {
        error = true;
      }
    });

    if (error) {
      setFileError(error);
      return;
    }

    const input = {};
    for (let i = 0; i < height - 1; i += 1) {
      for (let j = 0; j < width; j += 1) {
        input[`${i};${j}`] = { ...input[`${i};${j}`], [`${i + 1};${j}`]: down[i][j] };
      }
    }
    for (let i = 0; i < height; i += 1) {
      for (let j = 0; j < width - 1; j += 1) {
        input[`${i};${j}`] = { ...input[`${i};${j}`], [`${i};${j + 1}`]: right[i][j] };
      }
    }

    dispatchManhattanInput({ type: 'full', full: input });
  };

  const fileInputChange = (e) => {
    try {
      const { files } = e.target;
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target.result) {
          const { down, right } = JSON.parse(event.target.result);

          parseFileInput(down, right);
        }
      };
      reader.readAsText(files[0]);
    } catch (_e) {
      setFileError(true);
    }
  };

  return (
    <StyledManhattanPageWrapper>
      <Content />
      <Input id="manhattanHeight" label="Height" onChange={(e) => inputChange(e, 'height')} />
      <Input id="manhattanWidth" label="Width" onChange={(e) => inputChange(e, 'width')} />
      <Button onClick={drawManhattan} label="Make Manhattan" type="button" />
      {draw && (
        <>
          <p>Enter Manhattan input</p>

          <Manhattan
            height={height}
            width={width}
            manhattanInput={manhattanInput}
            dispatchManhattanInput={dispatchManhattanInput}
          />

          <p>Or add the files with JSON matrices down and right</p>
          <input
            id="manhattanFile"
            lable="File"
            type="file"
            onChange={fileInputChange}
            accept=".json"
          />
          {fileError && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Format of the file is not correct — <strong>check it out!</strong>
            </Alert>
          )}
          <Button onClick={getManhattan} label="Get Manhattan Output" type="button" />
          <Checkbox
            label="Show algorith iteratively"
            size="large"
            onChange={handleIterative}
            defaultChecked
          />
        </>
      )}
      {manhattanOutput && (
        <Manhattan
          height={height}
          width={width}
          manhattanInput={manhattanInput}
          manhattanOutput={manhattanOutput}
          iterative={iterative}
        />
      )}
    </StyledManhattanPageWrapper>
  );
};

export default ManhattanPage;
