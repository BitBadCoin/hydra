'use client'

import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function Page() {
    return (
      <div>
        <h1>Hello, Next.js!</h1>
        <MyButton />
      </div>
  )}