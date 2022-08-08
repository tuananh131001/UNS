import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction:column;
    position:relative;
    .form-wrapper{
        display:flex;
        align-items:center;
        place-content:center;
        height:100vh;
        position:fixed;
        z-index:99;
        width:100%;
    }
`