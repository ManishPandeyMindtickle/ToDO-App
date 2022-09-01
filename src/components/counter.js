import React,{useState} from "react";

function Counter({index, onDelete,onDecrement, onIncrement, counter, onChange }) {
  // console.log(counter.input);
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div className="m-8 relative">
      <input type="checkbox"  onChange={()=>onChange(index, counter)}  checked={checkedFnc()} />
      <span className={getToggleClass1()}>{counter.text}</span>
      {/* <span className={getToggleClass1()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{counter.text}</span> */}
      {/* <span className={getToggleClass2()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{counter.desc}</span> */}
      <span className={getBadgeClasses()}>{formatCount(counter.value)}</span>
      <button
        className={hidePriority1()}
        onClick={() => onDecrement(index, counter)}
      >
        &#8592;
      </button>
      <button
        className={hidePriority2()}
        onClick={() => onIncrement(index, counter)}
      >
        &#8594;
      </button>
      <button 
        className="bg-red-500 hover:bg-red-700 absolute right-2 mx-2 text-white font-bold py-2 px-4 rounded"
        onClick={() => onDelete(index, counter.id)}
      >
        Delete
      </button>
    </div>
  );

  
  function checkedFnc(){
    if(counter.status===1)return "checked";
  }

  function hidePriority1(){
    let classes = counter.status===1 ? "invisible" : "bg-blue-500 hover:bg-blue-700 absolute right-1 mx-4 text-white font-bold py-2 px-4 rounded";
    return classes;
  }
  function hidePriority2(){
    let classes = counter.status===1 ? "invisible" : "bg-blue-500 hover:bg-blue-700 absolute right-0 mx-4 text-white font-bold py-2 px-4 rounded";
    return classes;
  }

  function getToggleClass1(){
    if(isHover)return "invisible";
    let classes =
      (counter.status === 0 ? "bg-yellow-500" : "bg-green-500 line-through") +
      " mx-4 text-white font-bold py-4 px-4 rounded";
    if(counter.status===2)classes="bg-red-500 mx-4 text-white font-bold py-4 px-4 rounded";
    return classes;
  }

  function getToggleClass2(){
    // if(!isHover)return "invisible";
    // let classes ="bg-gray-500 mx-4 text-white font-bold py-4 px-4 rounded";
    // return classes;
  }

  function getBadgeClasses() {
    if(counter.status===1) return "invisible";
    let classes =
      (counter.value === 0 ? "bg-yellow-500" : "bg-green-500") +
      " mx-4 text-white absolute right-3 font-bold py-2 px-10 rounded";
    return classes;
  }

  function formatCount(number) {
    return number === 0 ? "Zero" : number;
  }
}

export default Counter;
