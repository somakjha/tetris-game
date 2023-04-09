import React from "react";
import Display from "./Display";
import StartButton from "./StartButton";
import Stage from "./Stage";
import { createStage } from "../gameHelpers";
import { StyledTetris,StyledTetrisWrapper } from "./styles/StyledTetris";


function Tetris()
{
    return(
        <StyledTetrisWrapper>
            <Stage stage={createStage()}/>
            <StyledTetris>
            <aside>
                <div>
                <Display text="Score"/>
                <Display text="Rows"/>
                <Display text="Level"/>
                </div>
            </aside>
            </StyledTetris>
            <StartButton/>
        </StyledTetrisWrapper>
    )
}

export default Tetris;