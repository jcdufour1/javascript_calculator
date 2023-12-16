//import logo from './logo.svg';
import './App.css';

//import React, { Component } from 'react';
//import { createRoot } from "react-dom/client";
import { useState } from 'react'

function App() {
  const [strEquation, setStrEquation] = useState([]);
  const [lastAnswer, setlastAnswer] = useState([]);

  //function calculator_key_1({ value }) {
  //  return (
  //    <button className="cal_key"> 7 </button>
  //  );
  //}

  function clearExpression() {
    setStrEquation([])
  }

  function evaluate_thing(strEquation) {
    console.log("evaluating expression")

    var expr_as_string = ""

    strEquation.forEach(element => {
      expr_as_string += element
    });

    var answer
    try {
      answer = eval(expr_as_string)
      console.log("before lastAnswer=" + lastAnswer)
      setlastAnswer(answer);
      console.log("after lastAnswer=" + lastAnswer)
    } catch (error) {
      answer = "error: " + error
    }
    console.log(answer)


    const nextStrEquation = strEquation.slice();
    nextStrEquation.push("=");
    nextStrEquation.push(answer);

    setStrEquation(nextStrEquation);
  }

  const BACKSPACE_THING = "<-";
  const EQUALS_THING = "=";
  function handleClick(characterPressed) {
    const nextStrEquation = strEquation.slice();

    if (characterPressed === "ans") {
      console.log("ans thing is being handled")
      console.log("strEquation before ans thing: " + strEquation)
      console.log("strEquation lastAnswer=" + lastAnswer)
      nextStrEquation.push(lastAnswer);
      setStrEquation(nextStrEquation)
      console.log("strEquation after ans thing: " + strEquation)
    }
    else if (characterPressed === BACKSPACE_THING) {
      setStrEquation(nextStrEquation.slice(0, -1))
    }
    else if (characterPressed === EQUALS_THING) {
      evaluate_thing(strEquation)
    }
    else if (characterPressed === "C") {
      clearExpression()
    }
    else {
      nextStrEquation.push(characterPressed);

      setStrEquation(nextStrEquation);

    }

    console.log(strEquation);
  }

  return (
    <>
      <div className="keypad_1">
        <button className="cal_key" onClick={() => handleClick(7)}> 7 </button>
        <button className="cal_key" onClick={() => handleClick(8)}> 8 </button>
        <button className="cal_key" onClick={() => handleClick(9)}> 9 </button>
        <button className="cal_key" onClick={() => handleClick("*")}> * </button>
      </div>
      <div>
        <button className="cal_key" onClick={() => handleClick("4")}> 4 </button>
        <button className="cal_key" onClick={() => handleClick("5")}> 5 </button>
        <button className="cal_key" onClick={() => handleClick("6")}> 6 </button>
        <button className="cal_key" onClick={() => handleClick("-")}> - </button>
      </div>
      <div>
        <button className="cal_key" onClick={() => handleClick("1")}> 1 </button>
        <button className="cal_key" onClick={() => handleClick("2")}> 2 </button>
        <button className="cal_key" onClick={() => handleClick("3")}> 3 </button>
        <button className="cal_key" onClick={() => handleClick("+")}> + </button>
      </div>
      <div>
        <button className="cal_key" onClick={() => handleClick("0")}> 0 </button>
        <button className="cal_key" onClick={() => handleClick(".")}> . </button>
        <button className="cal_key" onClick={() => handleClick("(-)")}> (-) </button>
        <button className="cal_key" onClick={() => handleClick("=")}> = </button>
      </div>
      <div>
        <button className="cal_key" onClick={() => handleClick("C")}> C </button>
        <button className="cal_key" onClick={() => handleClick("(")}> ( </button>
        <button className="cal_key" onClick={() => handleClick(")")}> ) </button>
        <button className="cal_key" onClick={() => handleClick("<-")}> bs </button>
      </div>
        <button className="cal_key" onClick={() => handleClick("ans")}> ans </button>
      <div>
      </div>
      <div className="strEquationDisplay">
        {strEquation}
      </div>
      <div className="App">
        <header className="App-header">
          <p>
            source code:
          </p>
          <a
            className="App-link"
            href="https://github.com/jcdufour1/javascript_calculator/tree/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
