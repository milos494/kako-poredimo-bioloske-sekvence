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

  useEffect(() => {
    setManhattanOutput(null);
  }, [width, height, manhattanInput]);

  useEffect(() => {
    setDraw(false);
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
