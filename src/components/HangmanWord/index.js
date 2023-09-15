import React from "react";
import styled from "styled-components";

const Letras = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 10rem;
    text-transform: uppercase;
    font-weight: bold;
    font-family: monospace;
    color: white;
    font-size: 2rem;
    height: 80px;
    `

export default function HangmanWord(){

    const word = 'teste'
    const LetrasDigitadas = ['e']

    return(
       <Letras>
        {word.split("").map((letter, index) => (

            <span style={{ borderBottom: '0.1em solid white'}} 
            key={index}>
            
            <span style={{ 
                visibility: LetrasDigitadas.includes(letter) 
                ? 'visible' :'hidden'}}>
                    
                    {letter}</span>
            
            </span>
        ))}
       </Letras>
    )
}