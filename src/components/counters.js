import React from "react";
import Counter from "./counter";

function Counters({ counters, onIncrement, onDelete, onReset, onAdd }) {
  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
      <button className="reset-btn p-2 w-full" onClick={onReset}>
        reset
      </button>
      <button className="reset-btn p-2 w-full" onClick={onAdd}>
        add
      </button>
    </>
  );
}

export default Counters;
