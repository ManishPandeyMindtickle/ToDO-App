import React, { useState } from "react";
import Header from "./components/header";
import Counters from "./components/counters";

const allCounters = [
  { id: 0, value: 0 },
  { id: 1, value: 1 },
  { id: 2, value: 0 },
  { id: 3, value: 3 },
  { id: 4, value: 0 },
];

function App() {
  const [counters, setCounters] = useState(allCounters);
  const [items, setItems] = useState(allCounters.length);

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = counters.indexOf(counter);

    newCounters[index] = { ...counter };
    console.log(newCounters[index]);
    newCounters[index].value++;
    setCounters(newCounters);
  };

  const handleReset = () => {
    const newCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(newCounters);
  };

  const handleDelete = (num) => {
    const newCounters = counters.filter((c) => c.id !== num);
    setCounters(newCounters);
  };

  const handleAdd = (counter) => {
    const newCounters = [...counters, { id: items, value: 0 }];
    setCounters(newCounters);
    setItems(items + 1);
  };

  return (
    <>
      <Header totalCounters={counters.filter((c) => c.value > 0).length} />
      <div className="card-container mx-auto text-right px-2 py-4 border-2 rounded-lg border-gray-500 border-opacity-50 hover:shadow-lg">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          onAdd={handleAdd}
        />
      </div>
    </>
  );
}

export default App;
