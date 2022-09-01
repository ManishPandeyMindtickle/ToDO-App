import React, { useState } from "react";
import Counter from "./counter";


function Counters({ title,onDeleteDashboard, index, counters,onDecrement, onIncrement, onDelete, onReset, onAdd, onChange }) {

  const countCompleted=counters.filter((c) => c.status === 1);
  const countInComplete=counters.filter((c) => c.status !== 1);
  const [countersClone, setCountersClone] = useState(counters);

  function showCompleted(){
    let temp=counters.filter((c) => c.status === 1);
    let intersection = countersClone.filter(x => !temp.includes(x));
    if(intersection.length!=0)
      setCountersClone(temp);
  }

  function showInCompleted(){
    let temp=counters.filter((c) => c.status !== 1);
    let intersection1 = countersClone.filter(x => !temp.includes(x));
    let intersection2 = temp.filter(x => !countersClone.includes(x));
    if(intersection1.length!=0||intersection2.length!=0)
      setCountersClone(temp);
  }

  function showAll(){
    let temp=counters.filter((c) => c.status !== 1);
    let intersection1 = countersClone.filter(x => !temp.includes(x));
    let intersection2 = counters.filter(x => !countersClone.includes(x));
    if(intersection1.length!=0||intersection2.length!=0)
      setCountersClone(counters);
  }


  return (
    <div className="manish-border p-10">
      {/* {showCompleted()} */}
      <div className="reset-btn bg-teal-300 p-2 w-full font-serif text-2xl text-center">{title}
          <br/><button className="reset-btn border-4 p-2 text-sm" onClick={showAll}>All: <font size="3">{counters.length}</font></button>
          <button className="reset-btn ml-1 border-4 p-2 text-sm" onClick={showCompleted}>Completed: <font size="3">{countCompleted.length}</font></button>
          <button className="reset-btn ml-1 border-4 p-2 text-sm" onClick={showInCompleted}>InComplete: <font size="3">{countInComplete.length}</font></button>
          <button onClick={()=>{onDeleteDashboard(index)}} className="manish-button">&#10060;</button>
      </div>
      {countersClone.map((counter) => (
        <Counter
          index={index}
          key={counter.id}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          onDelete={onDelete}
          counter={counter}
          onChange={onChange}
        />
      ))}
      <button className={hideReset()} onClick={()=>onReset(index)}>
        reset
      </button>
      <div>
        <input className="reset-btn border-8 p-2 w-full" type='number' id={index+"D"} placeholder="Time " maxlength={25} />
        <input className="reset-btn border-8 p-2 w-full" type="text" id={index} placeholder="Todo " maxlength={25} />
        <input className="reset-btn border-8 p-2 w-full" type="text" id={index+"M"} placeholder="Description" maxlength={35}/>
        <button className="reset-btn bg-teal-300 p-2 w-full" onClick={()=>{onAdd(index,document.getElementById(index).value,document.getElementById(index+"M"),document.getElementById(index+"D").value); document.getElementById(index).value="" ;document.getElementById(index+"M").value="";document.getElementById(index+"D").value=""}}>
          add
        </button>
      </div>
    </div>
  );

  
  function hideReset(){
    const countCompleted=counters.filter((c) => c.status !== 1);
    console.log(countCompleted);
    if(countCompleted.length==0)return "invisible";
    let classes= countersClone.length===0 ? "invisible" : "reset-btn p-2 w-full";
    return classes;
  }
}

export default Counters;
