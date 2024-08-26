import React, { useState, useEffect } from 'react';

const DoubleCounter = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    setDoubleCount(count * 2);
  }, [count]);

  return (
    <div style={styles.doubleCounter}>
      <h2>Counter: {count}</h2>
      <h3>Double: {doubleCount}</h3>
      <button onClick={() => setCount(count + 1)} style={styles.button}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={styles.button}>Decrement</button>
    </div>
  );
};

const styles = {
  doubleCounter: {
    textAlign: 'center',
    margin: '20px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default DoubleCounter;
