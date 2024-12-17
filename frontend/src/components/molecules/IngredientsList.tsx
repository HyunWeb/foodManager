import React, { useState } from "react";
import styled from "styled-components";
import { Input, Grid, GridItem } from "@chakra-ui/react";
import { Field } from "../ui/field";
import IconButtonAtom from "../atoms/IconButtonAtom";
interface IngredientsListProps {
  placeholder1: string;
  placeholder2: string;
  value: { value1: string; value2: string }[];
  setValue: (e: { value1: string; value2: string }[]) => void;
}

const AddButton = styled(IconButtonAtom)`
  transform: translateX(-60%);
`;

const DelButton = styled(IconButtonAtom)`
  margin: 0 auto;
  width: 40px;
  height: 40px;
`;
const FlexBox = styled(GridItem)`
  display: flex;
`;
export default function IngredientsList({
  placeholder1,
  placeholder2,
  value,
  setValue,
}: IngredientsListProps) {
  const addInputSet = () => setValue([...value, { value1: "", value2: "" }]);

  const removeInputSet = (index: number) => {
    const updateInputSet = value.filter((_, i) => i !== index);
    setValue(updateInputSet);
  };

  return (
    <Field label="재료 양" fontWeight="bold" marginTop="20px" required>
      <AddButton
        icontype="plus"
        variant="ghost"
        label="리스트 추가 버튼"
        BGcolor="transparent"
        size="30px"
        onClick={addInputSet}
        position="absolute"
        left="50%"
        bottom="-50px"
      />
      <Grid templateColumns="2fr 1fr 1fr" gap="10px">
        {value.map((inputSets, index) => (
          <React.Fragment key={index}>
            <GridItem>
              <Input
                placeholder={placeholder1}
                value={value[index].value1}
                onChange={(e) => {
                  const updateValue = [...value];
                  updateValue[index].value1 = e.target.value;
                  setValue(updateValue);
                }}
              />
            </GridItem>
            <GridItem>
              <Input
                placeholder={placeholder2}
                value={value[index].value2}
                onChange={(e) => {
                  const updateValue = [...value];
                  updateValue[index].value2 = e.target.value;
                  setValue(updateValue);
                }}
              />
            </GridItem>
            <FlexBox>
              <DelButton
                icontype="trash"
                variant="ghost"
                label="리스트 추가 버튼"
                BGcolor="transparent"
                size="28px"
                onClick={() => removeInputSet(index)}
              />
            </FlexBox>
          </React.Fragment>
        ))}
      </Grid>
    </Field>
  );
}
