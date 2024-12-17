import React, { useState } from "react";
import styled from "styled-components";
import SelectBlockUi from "../molecules/SelectBlockUi";
import TextInputForm from "../atoms/TextInputForm";
import ButtonAtom from "../atoms/ButtonAtom";
import TwoTextInputForm from "../atoms/TwoTextInputForm";
import ReactDataPicker from "../atoms/ReactDataPicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Container = styled.form``;
const CalenderWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
const InputWrap = styled.form``;

export default function WriteFoodTab() {
  const [TimeState, setTimeState] = useState("");
  const [KindOfFood, setKindOfFood] = useState("");
  const [foodName, setFoodName] = useState("");
  const [foodAmount, setfoodAmount] = useState("1");
  const [foodUnit, setFoodUnit] = useState("");
  const [kcal, setKcal] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());

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
      value: `1`,
    },
    {
      label: `중식`,
      value: `2`,
    },
    {
      label: `일식`,
      value: `3`,
    },
    {
      label: `패스트푸드(피자, 햄버거) `,
      value: `4`,
    },
    {
      label: `찜 & 탕`,
      value: `5`,
    },
    {
      label: `고기(족발.보쌈.삼겹살)`,
      value: `6`,
    },
    {
      label: `분식`,
      value: `7`,
    },
    {
      label: `카페 & 디저트`,
      value: `8`,
    },
    {
      label: `한식`,
      value: `9`,
    },
    {
      label: `양식`,
      value: `10`,
    },
    {
      label: `아시안`,
      value: `11`,
    },
    {
      label: `도시락`,
      value: `12`,
    },
    {
      label: `샐러드`,
      value: `13`,
    },
    {
      label: `과자`,
      value: `14`,
    },
    {
      label: `기타`,
      value: `15`,
    },
  ];
  const date = new Date(startDate + "");
  // 날짜 정보 추출
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // 날짜 결과
  const formattedDate = `${year}-${month}-${day}`;

  //category, foodname, amount, unit, kcal, mealtype, when
  console.log(TimeState, KindOfFood, foodName, foodAmount, foodUnit, kcal);

  const handleSubmit = (e: React.FormEvent) => {
    alert("ddd");
    e.preventDefault();
    const data = axios({
      method: "POST",
      url: `http://localhost:8000/foodlog/post`,
      data: {
        category: KindOfFood,
        foodname: foodName,
        amount: foodAmount,
        unit: foodUnit,
        kcal: kcal,
        mealtype: TimeState,
        when: formattedDate,
      },
      withCredentials: true,
    }).then((res) => {
      if (res.data.result == true) {
        alert("성공적으로 정보가 저장되었습니다.");
        setTimeState("");
        setKindOfFood("");
        setFoodName("");
        setfoodAmount("1");
        setFoodUnit("");
        setKcal("");

        //setTimeState setKindOfFood setFoodName setfoodAmount setFoodUnit setKcal
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <Container onSubmit={handleSubmit}>
      <SelectBlockUi
        OptionState={TimeState}
        setOptionState={setTimeState}
        Data={time}
        placeholder="식사 시간대를 선택하세요"
        title={"언제 드셨나요?"}
      />
      <SelectBlockUi
        OptionState={KindOfFood}
        setOptionState={setKindOfFood}
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
      <CalenderWrap>
        <ReactDataPicker startDate={startDate} setStartDate={setStartDate} />
      </CalenderWrap>
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
        value={kcal}
        setValue={setKcal}
        required={false}
      />
      <ButtonAtom text="업로드" buttontype="upload" type="submit" />
    </Container>
  );
}
