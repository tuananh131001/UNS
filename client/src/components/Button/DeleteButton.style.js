import styled from "styled-components";

export const StyledDeleteButton = styled.button`
  /* Adapt the colors based on primary prop */
  width: 4rem;
  padding: 0.2em;
  border-radius: 10px;
  background-color: transparent;
  color: red;
  border-color: red;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;

  &:hover {
    background-color: white;
    border-color: blue;
    cursor: pointer;
  }
`;
