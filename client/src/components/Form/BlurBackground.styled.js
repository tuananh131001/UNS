import styled from "styled-components";
export const BlurBackground = styled.div`
  position: ${(props) => (props.form ? "fixed" : "absolute")};
  z-index: ${(props) => (props.form ? "96" : "1")};
  height: ${(props) => (props.form ? "100%" : "99%")};
  width: 100%;
  top: ${(props) => (props.form ? "98" : 0)};
  border-radius: ${(props) => (props.form ? "0" : "10px")};
  background-color: rgba(0, 0, 0, 0.5);
`;
