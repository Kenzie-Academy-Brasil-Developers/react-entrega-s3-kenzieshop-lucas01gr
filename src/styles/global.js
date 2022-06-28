import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body,input, button{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
}
body{
    background-color:#E9E4F0;
}
button{
    cursor:pointer;

}
a{
    text-decoration:none;
}


`;
