import React, { useState } from 'react'

function HookswithArray() {
  const [items, setitems] = useState([]);
  const additem = () => {

  }
  return (
    <div>
      <button className="button--click" onClick={()=>additem()}>AddNumber</button>
    </div>
  )
}

export default HookswithArray
