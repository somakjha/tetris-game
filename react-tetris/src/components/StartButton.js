import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";
function StartButton({callback})
{
    return(
    <StyledStartButton onClick={callback}>
        Start button
    </StyledStartButton>
    )
}



export default StartButton;