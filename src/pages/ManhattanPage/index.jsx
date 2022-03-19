import React, { useState } from "react";
import Button from "../../basic/Button";
import Input from "../../basic/Input";
import Manhattan from "../../components/Manhattan";
// import Manhattan from '../../Manhattan';
import { StyledManhattanPageWrapper } from "./ManhattanPageStyles";

const ManhattanPage = () => {
  const [height, setHeight] = useState();
  const heightInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value) {
      setHeight(value);
    }
  };

  const [width, setWidth] = useState();
  const widthInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value) {
      setWidth(value);
    }
  };

  const [draw, setDraw] = useState();

  const clickHandler = () => {
    setDraw(true);
  };

  return (
    <StyledManhattanPageWrapper>
      <p>Height</p>
      <Input onChange={heightInputChange} />
      <p>Width</p>
      <Input onChange={widthInputChange} />
      <br />
      <Button onClick={clickHandler} label='Make graph' type='button' />
      <br />
      {draw && <Manhattan height={height} width={width} />}
    </StyledManhattanPageWrapper>
  );
};

export default ManhattanPage;
