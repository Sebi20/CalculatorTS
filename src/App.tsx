import React from 'react';
import { styled } from 'styled-components';
import './App.css';

const Heading = styled.h1`
  color: red;
`

const Calculator = styled.div`
  background-color: #cfcaca;
  height: 500px;
  width: 300px;
  border-radius: 4%;
  margin: auto;
  text-align: center;
  
`

const Input = styled.input.attrs({ 
  type: 'text',
})`
  margin-top:10px;
  height:30px;
  width: 200px;
  background-color: #494646;
  border-radius:5%;
  color:green;
  
`

function App() {
  return (
    <>
    <Heading> Calculator app</Heading>

    <Calculator>
      <Input></Input>

    </Calculator>
    </>
  );
}

export default App;
