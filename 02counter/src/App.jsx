import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter !== 20){
      setCounter(counter + 1)
    }
    return
  }

  const removeValue = () => {
    if(counter !== 0) {
      setCounter(counter - 1)
    }
    return
  } 

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>
      <br />
      <br />

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <br />
      <br />
      <br />
      <p>{counter}</p>
    </>
  )
}

export default App
