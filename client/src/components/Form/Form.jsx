import React from "react";
import { StyledForm } from "./StyledForm.style";
import { StyledFormContent } from "./StyledFormContent.style";
import { Button } from "../Button/Button.style";
import { StyledInput } from "./StyledInput.style";
function Form() {
  return (
    <>
      <StyledForm>
        <h1>Add a new photo</h1>

        <StyledFormContent>
          <label htmlFor="label">Label</label>
          <StyledInput type="text" id="label" />
          <label htmlFor="label">Photo URL</label>
          <StyledInput type="text" id="label" />
        </StyledFormContent>

        <Button green>Submit</Button>
      </StyledForm>
    </>
  );
}

export default Form;
