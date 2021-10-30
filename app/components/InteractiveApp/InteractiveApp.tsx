import { useState } from "react";
export function InteractiveApp() {
  const [counter, setCounter] = useState(9);
  return <button onClick={() => setCounter((i) => i + 1)}>{counter}</button>;
}
