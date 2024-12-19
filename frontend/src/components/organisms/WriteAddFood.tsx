import React, { useState } from "react";
import styled from "styled-components";
import SelectBlockUi from "../molecules/SelectBlockUi";
import TextInputForm from "../atoms/TextInputForm";
import ThreeSelectBlockUi from "../molecules/ThreeSelectBlockUI";
import ButtonAtom from "../atoms/ButtonAtom";
import TwoTextInputForm from "../atoms/TwoTextInputForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.form``;
const InputWrap = styled.form``;

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
  const navigate = useNavigate();
  console.log(
    `재료 종류 : ${kindOfFood}, 
    재료 이름: ${nameOfFood}, 
    재료의 양: ${foodAmount}, ${foodUnit}, 
    유통 기한 : ${Data.option1}년 ${Data.option2}월 ${Data.option3}일`
  );
  const kindOfFoodData = [
    {
      label: `신선식품`,
      value: `1`,
    },
    {
      label: `곡물 및 견과류`,
      value: `2`,
    },
    {
      label: `가공 및 저장식품`,
      value: `3`,
    },
    {
      label: `유제품`,
      value: `4`,
    },
    {
      label: `음료`,
      value: `5`,
    },
    {
      label: `기타`,
      value: `6`,
    },
  ];
  // [category, groceryname, amount, unit, expiration ]
  const handleSubmit = (e: React.FormEvent) => {
    console.log(kindOfFood, nameOfFood, foodAmount, foodUnit, Data);
    e.preventDefault();
    const data = axios({
      method: "POST",
      url: `http://localhost:8000/grocery/post`,
      data: {
        category: kindOfFood,
        groceryname: nameOfFood,
        amount: foodAmount,
        unit: foodUnit,
        expiration: `${Data.option1}-${Data.option2}-${Data.option3}`,
      },
      withCredentials: true,
    }).then((res) => {
      if (res.data.result == true) {
        alert(res.data.message);
      } else {
        if (res.data.message == "로그인이 되어 있지 않습니다.") {
          navigate("/login");
        } else {
          alert("데이터 추가 도중 오류가 발생했습니다.");
        }
      }
    });
  };
  return (
    <Container onSubmit={handleSubmit}>
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
