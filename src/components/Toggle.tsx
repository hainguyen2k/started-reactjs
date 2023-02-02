import React, { useState } from "react";

function Toggle() {
  const [on, setOn] = useState(false);
  const handleClickToggle = () => {
    setOn((on) => !on);
  };
  console.log(on);
  return (
    <div>
      <div onClick={handleClickToggle}>Toggle {on ? "On" : "Off"}</div>
    </div>
  );
}

export default Toggle;
