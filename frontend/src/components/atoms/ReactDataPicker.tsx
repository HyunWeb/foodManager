import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setStartDate } from "../../slices/pageRenderSlice";

const CalanderButton = styled.button`
  color: #121212;
  cursor: pointer;
  width: 240px;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  className?: string;
}
interface StateProps {
  setStartDate: (e: Date | null) => void;
}
export default function ReactDataPicker() {
  const ExampleCustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
    ({ value, onClick, className }, ref) => (
      <CalanderButton className={className} onClick={onClick} ref={ref}>
        {value}
        <IoMdArrowDropdown />
      </CalanderButton>
    )
  );
  ExampleCustomInput.displayName = "ExampleCustomInput";

  const dispatch = useDispatch();
  const { startDate } = useSelector((state: RootState) => state.pageRender);
  // 문자형태로 리덕스에서 날짜 받아서 다시 Date 객체로 바꿔서 사용한다.
  const newDate = new Date(startDate);
  return (
    <DatePicker
      locale={ko}
      selected={newDate}
      onChange={(date: Date | null) =>
        dispatch(setStartDate((newDate ?? new Date()).toISOString()))
      }
      customInput={<ExampleCustomInput className="example-custom-input" />}
      dateFormat="yyyy년 MM월 dd일"
    />
  );
}
