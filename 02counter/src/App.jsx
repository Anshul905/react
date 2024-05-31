import { useState } from 'react'
import './App.css'

function App() {
  // let count = 0
  let [ count , setCount ] = useState(10)

  let incValue = () => { 
    if( count >= 20 ) alert('it is more than 20') 
    else  setCount(count+1)
    // console.log(count);
  } 
  let decValue = () => { 
    if( count <= 0 ) alert('it is less than 0') 
    else  setCount(count-1)
    // console.log(count);
  } 

  return (
    <>

      <h1>Counter : {count}</h1> 
      
      <button onClick={incValue}> Increase </button>
      <button onClick={decValue}> Decrease </button>


      <h2>{count}</h2>

    </>
  )
}

export default App
