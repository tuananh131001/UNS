import styled from "styled-components";

export const StyledHeader = styled.header`
  top: 0;
  position: sticky;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 2em;
  gap: 1em;
  justify-items: center;
  align-items: center;
  z-index: 99;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1em;

  .left-section {
    display: flex;
    gap: 0.5em;
    align-items: center;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2em;
  }
  .text-container h3 {
    font-weight: 300;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    .left-section {
      flex-direction: column;
    }
    .text-container {
      flex-direction: row;
    }
  }
`;
