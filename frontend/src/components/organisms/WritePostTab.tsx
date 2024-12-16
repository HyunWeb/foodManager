import React, { useState } from "react";
import styled from "styled-components";
import SwitchTab from "../molecules/SwitchTab";
import WriteFeedTab from "./WriteFeedTab";
import WriteRecipe from "./WriteRecipe";

const Container = styled.div`
  height: 100%;
`;

export default function WritePostTab() {
  const [selected, setSelected] = useState(1); // 탭전환

  const render = () => {
    switch (selected) {
      case 1:
        return <WriteFeedTab />;
      case 2:
        return <WriteRecipe />;
    }
  };
  return (
    <Container>
      <SwitchTab
        menu1="피드 작성"
        menu2="레시피 작성"
        selected={selected}
        setSelected={setSelected}
        $buttonStyle="style2"
      />
      {render()}
    </Container>
  );
}
