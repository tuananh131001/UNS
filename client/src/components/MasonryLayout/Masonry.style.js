import styled from "styled-components";

export const Mansory = styled.div`
  gap: 1rem;
  padding: 1.5em;
  column-count: 3;
  z-index: -2;
  @media only screen and (max-width: 800px) {
    column-count: 2;
  }

  @media only screen and (max-width: 400px) {
    column-count: 1;
  }
`;
export const Image = styled.img`
  border-radius: 10px;
  max-width: 100%;

`;
export const StyledImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 0;
  margin-bottom: 1em;
`;
