import styled from "styled-components";

import bgImage from '../../img/bg.png';


export const StyledTetrisWrapper = styled.div`
width: 100vw;
height: 100vh;
background: url(${bgImage}) #000;
background-size: cover;
overflow: hidden;
`
export const StyledTetris = styled.div`

display: flex;
align-items: flex-start;
padding: 0px;
margin: -500px auto;
max-width: 250px;


aside{
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 10px;
}

`