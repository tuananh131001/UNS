import React, { useState } from "react";
import { BlurBackground } from "../components/Form/BlurBackground.styled";
import Form from "../components/Form/Form";
import Header from "../components/Layout/Header/Header";
import Layout from "../components/Layout/MasonryLayout/MasonryLayout";
function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main>
      {isModalOpen && <BlurBackground onClick={() => setIsModalOpen(false)} />}
      {isModalOpen && <Form />}

      <Header setIsModalOpen={setIsModalOpen}  />
      <Layout />
    </main>
  );
}

export default Main;
