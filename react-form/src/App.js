import React from "react";
import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleClick = () => {
    if (firstName && lastName) {
      alert(`Hello ${firstName} ${lastName}!`);
    } else {
      alert("Please enter your full name");
    }
  };

  return (
    <div>
      <label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleClick}>Greet me </button>
    </div>
  );
};

export default App;
