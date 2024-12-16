import React, { useState } from "react";
import styled from "styled-components";
import FileUploadForm from "../atoms/FileUploadForm";
import TextInputForm from "../atoms/TextInputForm";
import TextboxAtom from "../atoms/TextboxAtom";
import TextareaForm from "../atoms/TextareaForm";
import ButtonAtom from "../atoms/ButtonAtom";

const Container = styled.form`
  position: relative;
`;

export default function WriteFeedTab() {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [fileName, setFileName] = React.useState<string | null>(null);
  return (
    <Container>
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
