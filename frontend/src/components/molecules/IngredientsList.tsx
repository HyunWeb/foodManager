import React, { useState } from "react";
import { Input, Button, Grid, GridItem } from "@chakra-ui/react";
interface IngredientsListProps {
  placeholder1: string;
  placeholder2: string;
  value1: string;
  value2: string;
  setValue1: (e: string) => void;
  setValue2: (e: string) => void;
}
export default function IngredientsList({
  placeholder1,
  placeholder2,
  value1,
  value2,
  setValue1,
  setValue2,
}: IngredientsListProps) {
  const [inputSets, setInputSets] = useState([{ value1: "", value2: "" }]);

  const addInputSet = () =>
    setInputSets([...inputSets, { value1: "", value2: "" }]);

  const removeInputSet = (index: number) => {
    const updateInputSet = inputSets.filter((_, i) => i !== index);
    setInputSets(updateInputSet);
  };

  return (
    <div>
      <Button mb="8px" onClick={addInputSet}>
        추가
      </Button>
      <Grid templateColumns="2fr 1fr 1fr" gap="10px">
        {inputSets.map((inputSets, index) => (
          <React.Fragment key={index}>
            <GridItem>
              <Input
                placeholder={placeholder1}
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
              />
            </GridItem>
            <GridItem>
              <Input
                placeholder={placeholder2}
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
              />
            </GridItem>
            <GridItem>
              <Button
                colorScheme="red"
                ml="8px"
                onClick={() => removeInputSet(index)}
              >
                삭제
              </Button>
            </GridItem>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}
