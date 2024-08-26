// src/components/Counter.js

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.counter}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={styles.button}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={styles.button}>
        Decrement
      </button>
    </div>
  );
};

const styles = {
  counter: {
    textAlign: "center",
    margin: "20px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Counter;
