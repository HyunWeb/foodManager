import React, { useState } from "react";
import styled from "styled-components";
import ReactDataPicker from "../atoms/ReactDataPicker";

const Container = styled.div`
  height: 70vh;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
`;

export default function Wrapgraph() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <Container>
      <ReactDataPicker startDate={startDate} setStartDate={setStartDate} />
    </Container>
  );
}
