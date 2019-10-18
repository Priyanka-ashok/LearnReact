import React, { useState } from "react";

function HooksCounter() {
  const [initialState, setinitialState] = useState(8)
  return (
    <div>
      <br/>
      <button className="button--click" onClick={() => setinitialState(initialState + 1)}>Count Hooks Counter {initialState}</button>
    </div>
  )
}
export default HooksCounter
