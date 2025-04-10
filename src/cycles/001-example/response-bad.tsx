// Example of a BAD response for Cycle 001
// This file demonstrates code with potential issues (e.g., bugs, poor practices).
import React, { useState } from 'react';

// Missing export, might violate prompt if it asked for export
function CounterBad(props: any) { // Uses 'any'
  const [count, setCount] = useState('0'); // Initial state is string

  function handleIncrement() {
    setCount(count + 1); // Incorrect logic: string concatenation
  }

  const handleDecrement = () => {
    setCount(count - 1); // Incorrect logic: attempts math on string
  }

  return (
    <div>
      <h2>Counter (Bad Response)</h2>
      <p>Current Count is {count}</p>
      {/* Inline styles are generally discouraged for larger apps */}
      <button style={{ marginRight: '5px' }} onClick={handleIncrement}>Inc</button>
      <button onClick={handleDecrement}>Dec</button>
    </div>
  );
}
