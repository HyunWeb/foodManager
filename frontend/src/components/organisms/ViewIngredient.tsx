import React from "react";
import styled from "styled-components";
import HeadingAtom from "../atoms/HeadingAtom";
import { MdOutlineArrowRight } from "react-icons/md";

interface ViewIngredientProps {
  ingreName: string;
  amount: string;
  ingredientID: number;
}

const Container = styled.div`
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const IngredList = styled.ul``;

const IngredItem = styled.li`
  display: flex;
  align-items: center;
  line-height: 2;
`;
const Span = styled.span`
  font-weight: 600;
  font-size: 17px;
`;

export default function ViewIngredient({
  value,
}: {
  value: ViewIngredientProps[];
}) {
  return (
    <Container>
      <HeadingAtom level={3} $marginBottom="10px">
        필요한 재료
      </HeadingAtom>
      <IngredList>
        {value !== undefined &&
          value.map((item) => (
            <IngredItem key={item.ingredientID}>
              <MdOutlineArrowRight size={25} color={"#FE8D00"} />
              <Span>{item.ingreName}</Span>_ {item.amount}
            </IngredItem>
          ))}
      </IngredList>
    </Container>
  );
}
