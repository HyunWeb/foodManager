import React from "react";
import { CloseButton } from "../ui/close-button";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadDropzone,
  FileUploadClearTrigger,
} from "../ui/file-upload";

export default function FileUploadForm() {
  return (
    <FileUploadRoot
      maxW="l"
      alignItems="stretch"
      maxFiles={1}
      border="1px solid #EBEBEB"
      marginTop="10px"
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
