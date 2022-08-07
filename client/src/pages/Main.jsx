import React, { useState } from "react";
import { BlurBackground } from "../components/Form/BlurBackground.styled";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Layout from "../components/MasonryLayout/MasonryLayout";
function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main>
      {isModalOpen && <BlurBackground form  onClick={() => setIsModalOpen(false)} />}
      {isModalOpen && <Form setIsModalOpen={setIsModalOpen}/>}

      <Header setIsModalOpen={setIsModalOpen}  />
      <Layout />
    </main>
  );
}

export default Main;
