import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const addToCount = () => {
    console.log("clicked!")
    setCount(count + 1);
  };
  return (
    <section>
      <button type="button" onClick={addToCount}>
        Like
      </button>
      <p>Count: {count}</p>
    </section>
  );
};

export default Count;
