import { useState } from 'react';

import './App.css'

function App() {
let [counter,setCounter] = useState(5)

const addValue= ()=>{
  if(counter < 20 ){
    setCounter(counter+1)
  }
}

const removeValue = ()=>{
  if(counter>0){
    setCounter(counter-1)
  }
    }



  return (
    <>
     <h1>Death and code</h1>
     <h2>counter value {counter}</h2>
     <br />

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
