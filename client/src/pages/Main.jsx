import React, { useState } from "react";
import { BlurBackground } from "../components/Form/BlurBackground.styled";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Layout from "../components/MasonryLayout/MasonryLayout";
import { useSelector, useDispatch } from "react-redux";
import DeleteForm from "../components/DeleteForm/DeleteForm";
import { toggleModal } from "../features/popupSlice";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const popup = useSelector((state) => state.popup.showModal);
  const dispatch = useDispatch();

  console.log(popup);
  return (
    <main>
      {isModalOpen && (
        <BlurBackground form onClick={() => setIsModalOpen(false)} />
      )}
      {popup && (
        <BlurBackground form onClick={() => dispatch(toggleModal())} />
      )}
      {isModalOpen && <Form setIsModalOpen={setIsModalOpen} />}
      {popup && <DeleteForm></DeleteForm>}
      {/* <DeleteForm></DeleteForm> */}
      <Header setIsModalOpen={setIsModalOpen} />
      <Layout />
    </main>
  );
}

export default Main;
