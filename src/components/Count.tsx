import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const handleClickCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClickCount}>Click to +1</button>
      <h1>You have click {count} time</h1>
    </div>
  );
}

export default Count;
