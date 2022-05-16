import './App.css';
import PlusButton from './plusButton'
import MinusButton from './minusButton'
import { useState } from 'react'

function App() {

  const [count,setCount]=useState(0) //state

  const  counter= (cnt) =>{
    setCount(cnt)
    console.log("cnt",count)
  }
  
  return (
    <div className="App">
      Hello count : {count}
    
      <PlusButton count={count} counter={counter}/>
      
      <MinusButton count={count} counter={counter}/>
    </div>
  );
}

export default App;
