import React, { useState } from "react";

function Time() {
  const [time, setTime] = useState("");

  const handleClickTime = () => {
    const newDate = new Date();
    setTime(newDate.toDateString());
  };
  console.log(time);
  return (
    <div>
      <button onClick={handleClickTime}>Time now</button>
      <p>{time}</p>
    </div>
  );
}

export default Time;
