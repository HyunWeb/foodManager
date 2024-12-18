import React, { useState } from "react";
import { CloseButton } from "../ui/close-button";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadDropzone,
  FileUploadClearTrigger,
} from "../ui/file-upload";

interface FileUploadFormProps {
  value: object | null;
  setValue: (e: object) => void;
}

export default function FileUploadForm({
  value,
  setValue,
}: FileUploadFormProps) {
  // const [fileName, setFileName] = React.useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setValue(event.target.files[0]);
    }
  };
  return (
    <FileUploadRoot
      maxW="l"
      alignItems="stretch"
      maxFiles={1}
      border="1px solid #EBEBEB"
      marginTop="10px"
      onChange={handleFileChange}
    >
      <FileUploadDropzone
        label="Drag and drop here to upload"
        description=".png, .jpg up to 5MB"
      />
      <FileUploadList />
      <FileUploadClearTrigger asChild backgroundColor="#EBEBEB">
        <CloseButton
          me="-1"
          size="xs"
          variant="plain"
          focusVisibleRing="inside"
          focusRingWidth="2px"
          pointerEvents="auto"
          color="fg.subtle"
        />
      </FileUploadClearTrigger>
    </FileUploadRoot>
  );
}
