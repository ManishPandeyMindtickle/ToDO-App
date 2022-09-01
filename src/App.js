import React, { useState , useEffect} from "react";
import Header from "./components/header";
import Counters from "./components/counters";

const allCounters = [
  {
    title:"First List",
    data:
      [
        { id: 0, value: 0 ,text:"Manish1", status:1, desc:"nothing",  diffTime:-1},
        { id: 1, value: 1 ,text:"Manish2", status:0, desc:"nothing",  diffTime:-1},
        { id: 2, value: 0 ,text:"Manish3", status:0, desc:"nothing",  diffTime:-1},
        { id: 3, value: 3 ,text:"Manish4", status:0, desc:"nothing",  diffTime:-1},
        { id: 4, value: 0 ,text:"Manish5", status:0, desc:"nothing",  diffTime:-1},
      ],
  },
  {
    title:"Second List",
    data:
      [
        { id: 0, value: 0 ,text:"Manish1", status:0, desc:"nothing",  diffTime:-1},
        { id: 1, value: 1 ,text:"Manish2", status:0, desc:"nothing",  diffTime:-1},
        { id: 2, value: 0 ,text:"Manish3", status:0, desc:"nothing",  diffTime:-1},
        { id: 3, value: 3 ,text:"Manish4", status:0, desc:"nothing",  diffTime:-1},
        { id: 4, value: 0 ,text:"Manish5", status:0, desc:"nothing",  diffTime:-1},
      ]
    }

];

function App() {
  const [counters, setCounters] = useState(allCounters);


  const handleIncrement = (index, counter) => {
    let newCounters = [...counters];
    const temp=counters[index].data;
    const id = temp.findIndex(x => x.id ===counter.id);
    newCounters[index].data.[id].value = newCounters[index].data.[id].value+1;
    setCounters(newCounters);
  };

  const handleDecrement = (index, counter) => {
    let newCounters = [...counters];
    const temp=counters[index].data;
    const id = temp.findIndex(x => x.id ===counter.id);
    newCounters[index].data.[id].value = newCounters[index].data.[id].value-1;
    setCounters(newCounters);
  };

  const handleChange = (index, counter) => {
    let newCounters=[...counters];
    const temp=counters[index].data;
    const id = temp.findIndex(x => x.id ===counter.id);
    if(newCounters[index].data[id].status===1){
      newCounters[index].data[id].status=0;
    }
    else{
      newCounters[index].data[id].status=1;
      newCounters[index].data[id].diffTime=-1;
    }
    setCounters(newCounters);
  };

  const handleReset = (index) => {
    let newCounters=counters[index].data;
    newCounters = newCounters.map((c) => {
      c.value = 0;
      return c;
    });
    let temp=[...counters];
    temp[index].data=newCounters;
    setCounters(temp);
  };

  const handleDelete = (index, num) => {
    let newCounters=[...counters];
    newCounters[index].data=counters[index].data.filter((c) => c.id !== num);
    setCounters(newCounters);
  };

  const handleAdd = (index, inputValue, description, time) => {
    if(inputValue.length<3)return;
    let newCounters=[...counters];
    const size=Math.floor(Math.random() * 1000) + 1;
    let today = new Date();
    console.log(today);
    today.setHours(today.getHours(),today.getMinutes()+Number(time),0,0);
    console.log(today);
    if(time===-1){
      newCounters[index].data.push({ id: size, value: 0 ,text:inputValue, status:0, desc:description, diffTime: -1});
    }
    else{
      newCounters[index].data.push({ id: size, value: 0 ,text:inputValue, status:0, desc:description, diffTime: today});
    }
    console.log(newCounters);
    if(inputValue.length>=3)
      setCounters(newCounters);
  };

  const onAddDashboard=(input) => {
    if(input.length<3)return;
    let newCounters = [...counters, {title:input,data:[]}];
    setCounters(newCounters);
  }

  const handleDeleteDashboard=(index)=>{
    let newCounters=[...counters];
    newCounters.splice(index, 1);
    setCounters(newCounters);
  }

  useEffect(()=>{
    setInterval(()=>{
      let newCounters=[...counters];
      for(let i=0;i<counters.length;i++){
        for(let j=0;j<counters[i].data.length;j++){
          var today = new Date();
          // today.setHours(today.getHours(),today.getMinutes()+5,0,0);
          if(counters[i].data[j].diffTime===-1){
            continue;
          }
          // console.log(today);
          if(counters[i].data[j].diffTime<today){
            counters[i].data[j].status=2;
          }
        }
      }
      setCounters(newCounters);
    },10000);
  });

  return (
    <>
      <Header totalCounters={counters.length} />
      <div className="card-container mx-auto text-left px-1 py-4 border-2 rounded-lg border-gray-500 border-opacity-500 hover:shadow-lg">
        {counters.map((counters,index) => (
          <Counters
            key={counters.title}
            title={counters.title}
            onDeleteDashboard={handleDeleteDashboard}
            index={index}
            counters={counters.data}
            onReset={handleReset}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            onDelete={handleDelete}
            onAdd={handleAdd}
            onChange={handleChange}
          />
        ))}
        <div>
          <input className="reset-btn border-8 p-2 w-full" type="text" id="addDashboard" placeholder="dashboard" />
          <button className="reset-btn bg-teal-300 p-2 w-full" onClick={()=>{onAddDashboard(document.getElementById("addDashboard").value); document.getElementById("addDashboard").value=""}}>
            add
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
