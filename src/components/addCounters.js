import React, { useState } from "react";
import Header from "./components/header";
import Counters from "./components/counters";

const allCounters = [
  { id: 0, value: 0 ,text:"Manish1", status:0},
  { id: 1, value: 1 ,text:"Manish2", status:0},
  { id: 2, value: 0 ,text:"Manish3", status:0},
  { id: 3, value: 3 ,text:"Manish4", status:0},
  { id: 4, value: 0 ,text:"Manish5", status:0},
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

  const handleChange = (counter) => {
    const newCounters = [...counters];
    const index = counters.indexOf(counter);

    newCounters[index] = { ...counter };
    console.log(newCounters[index]);
    newCounters[index].status=newCounters[index].status^1;
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

  const handleAdd = (inputValue) => {
    const newCounters = [...counters, { id: items, value: 0 ,text:inputValue, status:0}];
    // console.log(inputValue);
    setCounters(newCounters);
    setItems(items + 1);
  };

  return (
    <>
      <Header totalCounters={counters.filter((c) => c.status == 0).length} />
      <div className="card-container mx-auto text-left px-1 py-4 border-2 rounded-lg border-gray-500 border-opacity-500 hover:shadow-lg">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          onAdd={handleAdd}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
