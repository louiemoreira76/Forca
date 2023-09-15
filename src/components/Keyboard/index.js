import React from "react";
import styled from "styled-components";
import { useState } from "react";

const TodasLetras = [];

for (let letra = 'a'; letra <= 'z'; letra = String.fromCharCode(letra.charCodeAt(0) + 1)) {
  TodasLetras.push(letra);
}
//
const Botao = styled.button`
  opacity: ${(props) => (props.isActive ? 'null' : '0.3')};
  background-color: ${props => (props.isActive ? 'green' : 'red')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
//

const Tudo = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 50rem;
    padding: 10px;
    margin-left: 400px;
`

export default function Keyboard(){

    

    return(
       <Tudo>
            {TodasLetras.map((letter) => (
                <Botao key={letter} 
                style={{backgroundColor: 'blue',color:'white', padding: '10px 20px', border: 'none', borderRadius: '5px',cursor: 'pointer',
                ':hover': {backgroundColor: 'lightblue',color: 'white',} }}>
                    {letter} 
                </Botao>
            ))}
       </Tudo>
    )
}