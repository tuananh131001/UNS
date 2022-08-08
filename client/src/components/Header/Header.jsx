import React from "react";
import { StyledButton } from "../Button/Button.style";
import Search from "../Search/Search";
import { StyledHeader } from "./Header.style";
function Header({ setIsModalOpen }) {
  return (
    <>
      <StyledHeader>
        {" "}
        <section className="left-section">
          <div className="text-container">
            {" "}
            <h3>Made By</h3>
            <h1>Tuan Anh</h1>
          </div>

          <Search></Search>
        </section>
        <StyledButton onClick={() => setIsModalOpen(true)} green>
          Add a photo
        </StyledButton>
      </StyledHeader>
    </>
  );
}

export default Header;
