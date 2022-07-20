import { createGlobalStyle } from "styled-components";
const StyledGlobal = createGlobalStyle`
    *,*::after,*::before{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    
    #root{
        width: 100%;
    }
    body{
        min-height:100vh;
        font-family: 'Nunito Sans', sans-serif;
    }
`;

export default StyledGlobal;