import { Alert, AlertTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Button from '../../basic/Button';
import Input from '../../basic/Input';
import Manhattan from '../../components/Manhattan';
import manhattan from '../../utils/manhattan';
// import Manhattan from '../../Manhattan';
import { StyledManhattanPageWrapper } from './ManhattanPageStyles';

const ManhattanPage = () => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [draw, setDraw] = useState();
  const [manhattanInput, setManhattanInput] = useState({});
  const [manhattanOutput, setManhattanOutput] = useState(null);
  const [fileError, setFileError] = useState(false);

  useEffect(() => {
    setManhattanOutput(null);
    setFileError(false);
  }, [width, height, manhattanInput]);

  useEffect(() => {
    setDraw(false);
    setFileError(false);
    setManhattanInput({});
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

  const drawManhattan = () => {
    setDraw(true);
  };

  const getManhattan = () => {
    const output = manhattan(manhattanInput, width, height);
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

    setManhattanInput(input);
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
            setManhattanInput={setManhattanInput}
          />

          <p>Or add the files with JSON matrices down and right</p>
          <input type="file" onChange={fileInputChange} accept=".json" />
          {fileError && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Format of the file is not correct — <strong>check it out!</strong>
            </Alert>
          )}
          <Button onClick={getManhattan} label="Get Manhattan Output" type="button" />
        </>
      )}
      {manhattanOutput && (
        <Manhattan
          height={height}
          width={width}
          manhattanInput={manhattanInput}
          manhattanOutput={manhattanOutput}
        />
      )}
    </StyledManhattanPageWrapper>
  );
};

export default ManhattanPage;
