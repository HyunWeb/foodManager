import React, { useState } from "react";
import styled from "styled-components";
import SelectBlockUi from "../molecules/SelectBlockUi";
import TextInputForm from "../atoms/TextInputForm";
import ThreeSelectBlockUi from "../molecules/ThreeSelectBlockUI";
import ButtonAtom from "../atoms/ButtonAtom";
import TwoTextInputForm from "../atoms/TwoTextInputForm";

const Container = styled.form``;

export default function WriteAddFood() {
  const [kindOfFood, setkindOfFood] = useState("");
  const [nameOfFood, setnameOfFood] = useState("");
  const [foodAmount, setfoodAmount] = useState("1");
  const [foodUnit, setFoodUnit] = useState("");
  const [Data, setData] = useState({
    option1: "",
    option2: "",
    option3: "",
  });
  console.log(
    `재료 종류 : ${kindOfFood}, 
    재료 이름: ${nameOfFood}, 
    재료의 양: ${foodAmount}, ${foodUnit}, 
    유통 기한 : ${Data.option1}년 ${Data.option2}월 ${Data.option3}일`
  );
  const kindOfFoodData = [
    {
      label: `채소 & 과일`,
      value: `Vegetables & Fruits`,
    },
    {
      label: `정육 & 수산 & 계란`,
      value: `Meat, Seafood & Eggs`,
    },
    {
      label: `유제품`,
      value: `milk Products`,
    },
    {
      label: `수산물`,
      value: `Seafood`,
    },
    {
      label: `쌀 & 잡곡  & 견과`,
      value: `Rice, Grains & Nuts`,
    },
    {
      label: `냉동식품`,
      value: `Frozen Foods`,
    },
    {
      label: `조미료`,
      value: `Seasonings`,
    },
    {
      label: `빵 & 떡 & 잼`,
      value: `Bread, Rice Cakes & Jam`,
    },
    {
      label: `김치`,
      value: `Kimchi`,
    },
    {
      label: `기타`,
      value: `ect`,
    },
  ];
  return (
    <Container>
      <SelectBlockUi
        OptionState={kindOfFood}
        setOptionState={setkindOfFood}
        Data={kindOfFoodData}
        placeholder="재료의 종류를 선택하세요"
        title={"재료의 종류?"}
      />
      <TextInputForm
        placeholder="재료 이름을 입력하세요"
        label="재료 이름"
        value={nameOfFood}
        setValue={setnameOfFood}
      />
      <TwoTextInputForm
        label="재료 양"
        placeholder1="숫자를 입력해주세요"
        placeholder2="단위를 입력해주세요"
        value1={foodAmount}
        value2={foodUnit}
        setValue1={setfoodAmount}
        setValue2={setFoodUnit}
      />
      <ThreeSelectBlockUi
        title="유통기한"
        placeholder1="연 "
        placeholder2="월 "
        placeholder3="일 "
        type="type3"
        values={Data}
        setValues={setData}
      />

      <ButtonAtom text="업로드" buttontype="upload" type="submit" />
    </Container>
  );
}
