import styled from "styled-components";

export const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.green ? "#3DB46D" : null)};
  background: ${(props) => (props.red ? "red" : null)};

  color: ${(props) => (props.green ? "white" : null)};
  color: ${(props) => (props.red ? "white" : null)};
  width:fit-content;
  font-size: 1em;
  padding: 1em 1em;
  border: 0 solid;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
    background-color:white;
    color:green;
  }
`;
