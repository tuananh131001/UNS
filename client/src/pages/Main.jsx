import React from "react";
import { BlurBackground } from "../components/Form/BlurBackground.styled";
import Header from "../components/Layout/Header/Header";
import Layout from "../components/Layout/MasonryLayout/MasonryLayout";
function Main() {
  return (
    <main>
      <BlurBackground/>
      <Header />
      <Layout />
    </main>
  );
}

export default Main;
