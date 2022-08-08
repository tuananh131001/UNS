import React, { useState } from "react";
import { BlurBackground } from "../components/Form/BlurBackground.styled";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Layout from "../components/MasonryLayout/MasonryLayout";
import { useSelector, useDispatch } from "react-redux";
import DeleteForm from "../components/DeleteForm/DeleteForm";
import { toggleModal } from "../features/popupSlice";
import { StyledMain } from "./Main.style";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const popup = useSelector((state) => state.popup.showModal);
  const dispatch = useDispatch();

  console.log(popup);
  return (
    <StyledMain>
      {isModalOpen && (
        <div className="form-wrapper">
          <BlurBackground form onClick={() => setIsModalOpen(false)} />
          <Form setIsModalOpen={setIsModalOpen} />
        </div>
      )}
      {popup && (
        <div className="form-wrapper">
          <BlurBackground form onClick={() => dispatch(toggleModal())} />
          <DeleteForm></DeleteForm>
        </div>
      )}
      {/* <DeleteForm></DeleteForm> */}
      <Header setIsModalOpen={setIsModalOpen} />
      <Layout />
    </StyledMain>
  );
}

export default Main;
