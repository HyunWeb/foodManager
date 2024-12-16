import React, { useState } from "react";
import SelectBlockUi from "../molecules/SelectBlockUi";
import TextInputForm from "../atoms/TextInputForm";
import ButtonAtom from "../atoms/ButtonAtom";
import TwoTextInputForm from "../atoms/TwoTextInputForm";

export default function WriteFoodTab() {
  const [TimeState, setTimeState] = useState("");
  const [foodName, setFoodName] = useState("");
  const [foodAmount, setfoodAmount] = useState("");
  const [foodUnit, setFoodUnit] = useState("");

  const time = [
    {
      label: `아침`,
      value: `Breakfast`,
    },
    {
      label: `점심`,
      value: `Lunch`,
    },
    {
      label: `저녁`,
      value: `Dinner`,
    },
    {
      label: `간식`,
      value: `Snack`,
    },
    {
      label: `야식`,
      value: `Night`,
    },
  ];

  const kindOfFoodData = [
    {
      label: `치킨`,
      value: `Chicken`,
    },
    {
      label: `중식`,
      value: `Chinese Food`,
    },
    {
      label: `일식`,
      value: `Japanese Food`,
    },
    {
      label: `패스트푸드(피자, 햄버거) `,
      value: `Fast Food`,
    },
    {
      label: `찜 & 탕`,
      value: `Stews & Boiled Dishes`,
    },
    {
      label: `고기(족발.보쌈.삼겹살)`,
      value: `Meat`,
    },
    {
      label: `분식`,
      value: `Korean Fast Food`,
    },
    {
      label: `카페 & 디저트`,
      value: `Café & Desserts`,
    },
    {
      label: `한식`,
      value: `Korean Food`,
    },
    {
      label: `양식`,
      value: `Western Food`,
    },
    {
      label: `아시안`,
      value: `Asian Food`,
    },
    {
      label: `도시락`,
      value: `Lunch Box`,
    },
    {
      label: `샐러드`,
      value: `Salad`,
    },
    {
      label: `과자`,
      value: `Snacks`,
    },
    {
      label: `기타`,
      value: `ect`,
    },
  ];
  return (
    <div>
      <SelectBlockUi
        OptionState={TimeState}
        setOptionState={setTimeState}
        Data={time}
        placeholder="식사 시간대를 선택하세요"
        title={"언제 드셨나요?"}
      />
      <SelectBlockUi
        OptionState={TimeState}
        setOptionState={setTimeState}
        Data={kindOfFoodData}
        placeholder="음식의 종류를 선택하세요"
        title={"음식의 종류"}
      />
      <TextInputForm
        placeholder="음식 이름을 입력하세요"
        label="음식 이름"
        value={foodName}
        setValue={setFoodName}
      />

      <TwoTextInputForm
        label="음식 양"
        placeholder1="숫자를 입력해주세요"
        placeholder2="단위를 입력해주세요"
        value1={foodAmount}
        value2={foodUnit}
        setValue1={setfoodAmount}
        setValue2={setFoodUnit}
      />

      <TextInputForm
        placeholder="입력하지 않으시면 AI가 자동으로 추정합니다."
        label="칼로리(선택)"
        value={foodName}
        setValue={setFoodName}
        required={false}
      />
      <ButtonAtom text="업로드" buttontype="upload" type="submit" />
    </div>
  );
}
