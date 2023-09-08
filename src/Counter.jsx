import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    if (count === 0) {
      alert("You cannot reduce more than one");
      return;
    } else {
      const newCount = count - 1;
      setCount(newCount);
    }
  };
  return (
    <div
      style={{
        border: "2px solid lime",
        borderRadius: "12px",
        boxShadow: "3px 4px 5px gray",
        padding: "10px",
        margin: "15px",
      }}
    >
      <h4>Counter: {count}</h4>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
