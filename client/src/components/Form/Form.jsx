import React from "react";
import { StyledForm } from "./StyledForm.style";
import { StyledFormContent } from "./StyledFormContent.style";
import { StyledInput } from "./StyledInput.style";
import { useCreatePhoto } from "../../hooks/useFetch";
import { useForm } from "react-hook-form";
function Form({setIsModalOpen}) {
  const { register, handleSubmit } = useForm();
  const mutation = useCreatePhoto();

  const onSubmit = (data) => {
    mutation.mutate(data);
    console.log(data);
    setIsModalOpen(false)
  };
  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Add a new photo</h1>

        <StyledFormContent>
          <label htmlFor="label">Name</label>
          <StyledInput type="text" id="label" {...register("name")} />
          <label htmlFor="label">Photo URL</label>
          <StyledInput type="text" id="label" {...register("url")} />
          <StyledInput type="submit"></StyledInput>
        </StyledFormContent>

        {/* <button green>Submit</button> */}
      </StyledForm>
    </>
  );
}

export default Form;
