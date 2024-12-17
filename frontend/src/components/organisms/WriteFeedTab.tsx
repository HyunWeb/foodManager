import React, { useState } from "react";
import styled from "styled-components";
import FileUploadForm from "../atoms/FileUploadForm";
import TextInputForm from "../atoms/TextInputForm";
import TextboxAtom from "../atoms/TextboxAtom";
import TextareaForm from "../atoms/TextareaForm";
import ButtonAtom from "../atoms/ButtonAtom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Container = styled.form`
  position: relative;
`;

export default function WriteFeedTab() {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [fileName, setFileName] = React.useState<string | null>(null);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    console.log(titleValue, contentValue, fileName);
    e.preventDefault();
    const formData = new FormData();

    const data = axios({
      method: "POST",
      url: `http://localhost:8000/posting/post`,

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
      <FileUploadForm value={fileName} setValue={setFileName} />
      <TextInputForm
        placeholder="제목을 입력하세요"
        label="제목"
        value={titleValue}
        setValue={setTitleValue}
      />
      <TextareaForm
        placeholder="내용을 입력하세요"
        label="내용"
        value={contentValue}
        setValue={setContentValue}
      />
      <ButtonAtom text="업로드" buttontype="upload" type="submit" />
    </Container>
  );
}
