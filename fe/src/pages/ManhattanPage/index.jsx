import { Alert, AlertTitle, Checkbox } from '@mui/material';
import React, { useEffect, useReducer, useState } from 'react';
import { getData } from '../../api';
import Button from '../../basic/Button';
import Input from '../../basic/Input';
import GlobalPageWrapper from '../../components/GlobalPageWrapper';
import Manhattan from '../../components/Manhattan';
import Content from './content';
import { StyledManhattanGetOutputWrapper, StyledManhattanPageWrapper } from './ManhattanPageStyles';
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
  const [fromFile, setFromFile] = useState(false);

  useEffect(() => {
    setManhattanOutput(null);
    setFileError(false);
  }, [width, height, manhattanInput]);

  useEffect(() => {
    if (!fromFile) {
      setDraw(false);
      setFileError(false);
      dispatchManhattanInput({});
    }
  }, [width, height, fromFile]);

  const inputChange = (e, type) => {
    const value = +e.target.value;
    if (value || value === 0) {
      setFromFile(false);
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

  const getManhattan = async () => {
    const output = await getData('manhattan', { input: manhattanInput, width, height });
    setManhattanOutput(output);
  };

  const drawManhattan = () => {
    if (!Object.keys(manhattanInput).length) {
      setDraw(true);
    } else {
      getManhattan();
    }
  };

  const parseFileInput = (down, right) => {
    let error = false;
    if (!down || !right || !Array.isArray(down) || !Array.isArray(right)) {
      error = true;
    }

    const heightFile = down.length + 1;
    const widthFile = down[0]?.length;

    if (!widthFile || !heightFile) {
      error = true;
    }

    if (right.length !== widthFile - 1) {
      error = true;
    }

    down.forEach((element) => {
      if (element.length !== widthFile) {
        error = true;
      }
    });
    right.forEach((element) => {
      if (element.length !== heightFile) {
        error = true;
      }
    });

    if (error) {
      setFileError(error);
      return;
    }

    const input = {};
    for (let i = 0; i < heightFile - 1; i += 1) {
      for (let j = 0; j < widthFile; j += 1) {
        input[`${i};${j}`] = { ...input[`${i};${j}`], [`${i + 1};${j}`]: down[i][j] };
      }
    }
    for (let i = 0; i < heightFile; i += 1) {
      for (let j = 0; j < widthFile - 1; j += 1) {
        input[`${i};${j}`] = { ...input[`${i};${j}`], [`${i};${j + 1}`]: right[i][j] };
      }
    }

    setFromFile(true);
    setHeight(heightFile);
    setWidth(widthFile);
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
    <GlobalPageWrapper title="Menhetn turista">
      <Content />
      <StyledManhattanPageWrapper>
        <Input
          id="manhattanHeight"
          label="Visina"
          type="number"
          onChange={(e) => inputChange(e, 'height')}
        />
        <Input
          id="manhattanWidth"
          label="Širina"
          type="number"
          onChange={(e) => inputChange(e, 'width')}
        />
        <p>Ili fajl koji sadrži matrice down i right</p>
        <input
          id="manhattanFile"
          lable="File"
          type="file"
          onChange={fileInputChange}
          accept=".json"
        />
        {fileError && (
          <Alert severity="error">
            <AlertTitle>Greška</AlertTitle>
            Format fajla nije dobar — <strong>proverite!</strong>
          </Alert>
        )}

        <StyledManhattanGetOutputWrapper>
          <Button onClick={drawManhattan} label="Napravi Menhetn" type="button" />
          <Checkbox
            label="Iterativni izlaz"
            size="large"
            onChange={handleIterative}
            defaultChecked
            disabled={!!manhattanOutput}
          />
          <p>Iterativni izlaz</p>
        </StyledManhattanGetOutputWrapper>
        {draw && (
          <>
            <p>Unesi Menhetn ulaz</p>
            <Manhattan
              height={height}
              width={width}
              manhattanInput={manhattanInput}
              dispatchManhattanInput={dispatchManhattanInput}
            />
            <Button onClick={getManhattan} label="Pokreni algoritam" type="button" />
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
    </GlobalPageWrapper>
  );
};

export default ManhattanPage;
