import React, { useState } from "react";

function HooksCounterTwo() {

  const inititalvalue = 0;
  const [count, updatecountvalue] = useState(inititalvalue);

  const incrementValuetoTen = () => {
    for (let i = 1; i < 10; i++) {
      updatecountvalue(prevcount => prevcount + 10);
    }
  };

  return (
    <div className="IncDecReset">
      Count:Increment-Decrement-Reset<br></br><br></br>{count}<br></br>
      <button className="button--click" onClick={() => updatecountvalue(inititalvalue)}>Reset</button>
      <button className="button--click" onClick={() => updatecountvalue(count + 1)}>Increment</button>
      <button className="button--click" onClick={() => updatecountvalue(prevcount => prevcount - 1)}>Decrement</button>
      <button className="button--click" onClick={incrementValuetoTen}>IncrementValue to 10</button>
    </div>
  );
}

export default HooksCounterTwo;
