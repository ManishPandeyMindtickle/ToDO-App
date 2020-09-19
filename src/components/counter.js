import React from "react";

function Counter({ onDelete, onIncrement, counter }) {
  return (
    <div className="m-2">
      <span className={getBadgeClasses()}>{formatCount(counter.value)}</span>
      <button
        className="bg-blue-500 hover:bg-blue-700 mx-2 text-white font-bold py-2 px-4 rounded"
        onClick={() => onIncrement(counter)}
      >
        Increment
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 mx-2 text-white font-bold py-2 px-4 rounded"
        onClick={() => onDelete(counter.id)}
      >
        Delete
      </button>
    </div>
  );

  function getBadgeClasses() {
    let classes =
      (counter.value === 0 ? "bg-yellow-500" : "bg-green-500") +
      " text-white font-bold text-xs m-2 px-2 py-1 rounded-full";
    return classes;
  }

  function formatCount(number) {
    return number === 0 ? "Zero" : number;
  }
}

export default Counter;
