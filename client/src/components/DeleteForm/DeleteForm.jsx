import React from "react";
import { StyledForm } from "../Form/StyledForm.style";
import { StyledInput } from "../Form/StyledInput.style";
import { StyledDeleteForm } from "./DeleteForm.style";
function DeleteForm() {
  return (
    <StyledDeleteForm>
      {" "}
      <StyledInput></StyledInput>
    </StyledDeleteForm>
  );
}

export default DeleteForm;
