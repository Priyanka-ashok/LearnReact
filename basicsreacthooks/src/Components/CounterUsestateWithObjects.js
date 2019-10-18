import React, { useState } from "react";

function CounterUsestateWithObjects() {
  const [name, updatename] = useState({ firstname: 'Arohi', secondname: 'Sharma' });
  return (
    <div>
      <form>
      <input
        type='text'
        value={name.firstname}
        onChange={e => updatename({ ...name, firstname: e.target.value })}
      />
      <h5>Your First name is -- {name.firstname}</h5>
      <input
        type='text'
        value={name.secondname}
        onChange={e => updatename({...name, secondname: e.target.value })}
      />
      <h5>Your Last name is -- {name.secondname}</h5>
    </form>
    </div>
  );
}

export default CounterUsestateWithObjects;
