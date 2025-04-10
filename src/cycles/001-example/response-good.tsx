// Example of a GOOD response for Cycle 001
// This file demonstrates code that meets the requirements well.
import React, { useState, useCallback } from 'react';

export function CounterGood() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);

  return (
    <div>
      <h2>Counter (Good Response)</h2>
      <p data-testid="count-display">Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
