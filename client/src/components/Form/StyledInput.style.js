import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const StyledInput = styled.input`
  padding: 1rem;
  border-radius: 10px;
`;
export const StyledSearch = styled(StyledInput)`
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png")
    no-repeat 5px 12px;
  background-size: 25px;
  padding-left: 30px;
  margin:.5em;
`;
