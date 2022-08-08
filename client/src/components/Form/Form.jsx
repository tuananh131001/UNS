import React from "react";
import { StyledForm } from "./StyledForm.style";
import { StyledFormContent } from "./StyledFormContent.style";
import { StyledInput } from "./StyledInput.style";
import { useCreatePhoto } from "../../hooks/useFetch";
import { useForm } from "react-hook-form";
import { StyledButton } from "../Button/Button.style";
import { StyledFormButton } from "./FormButton.style";
function Form({ setIsModalOpen }) {
  const { register, handleSubmit } = useForm();
  const mutation = useCreatePhoto();

  const onSubmit = (data) => {
    mutation.mutate(data);
    setIsModalOpen(false);
  };
  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <StyledForm>
        <h1>Add a new photo</h1>

        <StyledFormContent onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="label">Name</label>
          <StyledInput type="text" id="label" {...register("name")} />
          <label htmlFor="label">Photo URL</label>
          <StyledInput type="text" id="label" {...register("url")} />
          <StyledFormButton>
            <StyledButton>Cancel</StyledButton>
            <StyledButton type="submit" green>
              Submit
            </StyledButton>
          </StyledFormButton>
        </StyledFormContent>
      </StyledForm>
    </>
  );
}

export default Form;
