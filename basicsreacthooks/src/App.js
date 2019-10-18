import React, { useState } from "react";
import "./App.css";
import ClassCounter from "./Components/ClassCounter";
import HooksCounter from "./Components/HooksCounter";
import LightBulb from "./Components/LightBulb";
import HooksCounterTwo from "./Components/HooksCounterTwo";
import CounterUsestateWithObjects from "./Components/CounterUsestateWithObjects";
import HookswithArray from "./Components/HookswithArray";

function App() {
  const [initialstate, updatestate] = useState(9);
  const [user, setuser] = useState({ username: "Priyanka" });
  const [state, changestate] = useState(true);
  const [Firstvalue, setFirstResult] = useState(1);
  const [Secondvalue, setSecondResult] = useState(5);

  function handleclick() {
    setuser({ username: "Arohi" });
  }
  function toggle() {
    state ? changestate(false) : changestate(true);
  }
  const firstDie = require(`./assets/${Firstvalue}.png`);
  const secondDie = require(`./assets/${Secondvalue}.png`);

  function SpinDice() {
    setFirstResult(Math.floor(Math.random() * 6) + 1);
    setSecondResult(Math.floor(Math.random() * 6) + 1);
  }
  return (
    <div className="App">
      <h1>Hooks Concepts</h1>
      <hr></hr>
      <hr></hr>
      <button
        className="button--click"
        onClick={() => updatestate(initialstate + 2)}
      >
        ClickMe
      </button>
      <h1>Updated value is: {initialstate}</h1>
      <hr></hr>
      <br></br>
      <br></br>
      <button className="button--click" onClick={() => handleclick()}>
        ChangeName
      </button>
      <Header user={user} />
      <br></br>
      <br></br>
      <hr></hr>
      {state ? <h1>Hello</h1> : <h1>Good-Bye</h1>}
      <button className="button--click" onClick={toggle}>
        Toggle state
      </button>
      <hr></hr>
      <h1>Roll the Dice</h1>
      <div>
        <div className="dice">
          <img src={firstDie} alt="first-dice" className="dice-img" />
          <img src={secondDie} alt="Second-dice" className="dice-img" />
        </div>
        <button className="button--click" onClick={SpinDice}>
          Roll
        </button>
        <h1>Total dice value is : {Firstvalue + Secondvalue}</h1>
      </div>
      <br />
      <br />
      <hr></hr>
      <ClassCounter />
      <hr></hr>
      <HooksCounter />
      <hr></hr>
      <LightBulb />
      <br />
      <br />
      <hr></hr>
      <HooksCounterTwo/>
      <hr></hr>
      <br>
      </br>
      <CounterUsestateWithObjects/>
      <hr></hr>
      <br></br>
      <br>
      </br>
      <HookswithArray/>
    </div>
  );
}
function Header({ user }) {
  return <h1>{user.username}</h1>;
}
export default App;
