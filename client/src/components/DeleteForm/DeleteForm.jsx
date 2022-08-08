import React, { useState } from "react";
import { StyledFormButton } from "../Form/FormButton.style";
import { StyledInput } from "../Form/StyledInput.style";
import { StyledDeleteForm } from "./DeleteForm.style";
import { StyledButton } from "../Button/Button.style";
import { useDeletePhoto } from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../features/popupSlice";
import { StyledWarning } from "./WrongPassword.style";
function DeleteForm() {
  const [valueInput, setValueInput] = useState("");
  const [error, setError] = useState("");

  const { mutate } = useDeletePhoto();
  const imageID = useSelector((state) => state.popup.imageID);
  const dispatch = useDispatch();

  const handleChange = (event) => setValueInput(event.target.value);
  const handleSubmit = () => {
    if (valueInput === "123456") {
      mutate(imageID);
      dispatch(toggleModal());
    } else{
      setError("Wrong Password!!!")
    }
  };
  return (
    <StyledDeleteForm>
      {" "}
      <h1>Are you sure ?</h1>
      <h3>Password</h3>
      {error && <StyledWarning>{error}</StyledWarning>}
      <StyledInput
        type="password"
        value={valueInput}
        onChange={handleChange}
        placeholder="************"
      ></StyledInput>
      <StyledFormButton>
        <StyledButton onClick={() => dispatch(toggleModal())}>
          Cancel
        </StyledButton>
        <StyledButton onClick={() => handleSubmit()} red>
          Delete
        </StyledButton>
      </StyledFormButton>
    </StyledDeleteForm>
  );
}

export default DeleteForm;
