import React from "react";
import styled from "styled-components";
import './index.scss';

const Base = styled.div`
height: 10px;
width: 250px;
background: white;
margin-left: 120px;
`

const Vertical = styled.div`
height: 250px;
width: 10px;
background: white;

`

const Horizontal = styled.div`
height: 10px;
width: 170px;
background: white;
position: absolute;
right: 600px;
top: 0px;
`
const Smallzinho = styled.div`
height: 40px;
width: 10px;
background: white;
position: absolute;
right: 590px;
top: 0px;`

const Cabeca = styled.div`
height: 30px;
width: 30px;
border: solid white 7px;
border-radius: 50px;
position: absolute;
right: 576px;
top: 39px;`

const Body = styled.div`
height: 80px;
width: 7px;
background: white;
position: absolute;
right: 595px;
top: 80px;`

const LeftArm = styled.div`
height: 6px;
width: 50px;
background: white;
position: absolute;
right: 550px;
top: 90px;
rotate: -30deg;`

const RightArm = styled.div`
height: 6px;
width: 50px;
background: white;
position: absolute;
right: 595px;
top: 90px;
rotate: 30deg;`

const RightLeg = styled.div`
height: 6px;
width: 50px;
background: white;
position: absolute;
right: 592px;
top: 170px;
rotate: -45deg;
`
const LeftLeg = styled.div`
height: 6px;
width: 50px;
background: white;
position: absolute;
right: 558px;
top: 170px;
rotate: 45deg;
`

export default function HangmanDrawing(){


    return(
        <div id="mae" >
            <Cabeca />
            <Body />
            <LeftArm />
            <RightArm />
            <Smallzinho />
            <Horizontal />
            <Vertical />
            <Base />
            <RightLeg />
            <LeftLeg />
        </div>
    )
}