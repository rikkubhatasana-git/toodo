
import TodoApp from './Ref'
import {evaluate} from 'mathjs'
import { useState } from "react"
import "./App.css"
import './App.css'

function App() {

  function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("riken"));


function largestNumber(arr) {
  return Math.max(...arr);
}
console.log(largestNumber([3, 7, 2, 9, 5]));







  const buttons = [ 
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+",
    "c"
  ]
  
  const [input,setInput] = useState (0);

  function handal(value) {
    if (value==="c") {
      setInput("");
    } else if (value==="=") 
      try {
      const result = evaluate(input).toString();
      setInput(result);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setInput("error");
    }
    else {
      setInput ((prevValue)=>prevValue+value)
    }
  }


  return (
    <>
    <div className="main">
    <div className="display">{input || "0"}</div>
      <div className="main">
       {buttons.map((value,index)=>{
        return <button
        key={index} 
        className={value === "c"? "clear" :
          value=== "="? "equals" :
          ["/","*","-","+","."].includes(value)? "operator" : ""
        }
        onClick={()=>handal(value)}
        >{value}</button>
       })}
       
         
      </div>
      </div>


          <div className="ref">
            <TodoApp/>
          </div>

          

    </>
  )
}

export default App
