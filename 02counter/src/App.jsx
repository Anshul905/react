import { useState } from 'react'
import './App.css'

function App() {
  // let count = 0
  let [ count , setCount ] = useState(10)

  let incValue = () => { 
    if( count >= 20 ) alert('it is more than 20') 
    else{
        setCount(count+1)

        // react fibre concept - same task into one batch 
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
        
        // call back concept - next setCount() will be executed after completing the previous one so value will be updated 
        // setCount() accepts call back function 
        // if( count <= 16 ){
        //   setCount( (prevCounter) => (prevCounter+1) ) 
        //   setCount( (prevCounter) => (prevCounter+1) ) 
        //   setCount( (prevCounter) => (prevCounter+1) ) 
        //   setCount( (prevCounter) => (prevCounter+1) ) 
        // }else{
        //   alert('max it can be 20.')
        //   count = 20 ;
        //   setCount( count ) 
        // }

      } 
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
