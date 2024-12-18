import React, { useState } from "react";
import styled from "styled-components";
import ReactDataPicker from "../atoms/ReactDataPicker";
import ReactCircularProgressbar from "../atoms/ReactCircularProgressbar";

const Container = styled.div`
  height: 45vh;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const CalenderWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Wrapgraph() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [GraphValue, setGraphValue] = useState<number>(1500);
  const [GraphMaxValue, setGraphMaxValue] = useState<number>(2700);

  return (
    <Container>
      <CalenderWrap>
        <ReactDataPicker startDate={startDate} setStartDate={setStartDate} />
      </CalenderWrap>
      <ReactCircularProgressbar
        GraphValue={GraphValue}
        GraphMaxValue={GraphMaxValue}
      />
    </Container>
  );
}
