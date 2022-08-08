import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  gap: 1em;
  justify-items: center;
  align-items: center;
  .left-section {
    display: flex;
    gap:0.5em;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items:center;
    gap:0.2em;
  }
  .text-container h3{
    font-weight:300;
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
