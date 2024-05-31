import { useState } from "react"

function App() {
  const [ color , setColor ] = useState("Olive")
  return (
    <>
      
      <div className="w-screen h-screen"
      style={{backgroundColor:color}} >
        
        <div className="bg-white text-black
        fixed bottom-10 inset-x-0 mx-10 rounded-full 
        flex flex-wrap justify-center
        gap-2
        ">  
          {/* onclick ke andar function hona chahiye litarally function , not its returning value or reference  */}

          <button 
          onClick={() => setColor("red")}
          className="bg-red-400 py-1 my-2 rounded-2xl outline-none "           
          >Red</button>

          <button 
          onClick={() => setColor("green")}
          className="bg-green-400 py-1 my-2 rounded-2xl outline-none "           
          >Green</button>
          
          <button 
          onClick={() => setColor("blue")}
          className="bg-blue-400 py-1 my-2 rounded-2xl outline-none "           
          >Blue</button>

          <button 
          onClick={() => setColor("violet")}
          className="bg-violet-400 py-1 my-2 rounded-2xl outline-none "           
          >Violet</button>


          <button 
          onClick={() => setColor("pink")}
          className="bg-pink-400 py-1 my-2 rounded-2xl outline-none "           
          >Pink</button>

          <button 
          onClick={() => setColor("yellow")}
          className="bg-yellow-400 py-1 my-2 rounded-2xl outline-none "           
          >Yellow</button>

          <button 
          onClick={() => setColor("indigo")}
          className="bg-indigo-400 py-1 my-2 rounded-2xl outline-none "           
          >Indigo</button>


          <button 
          onClick={() => setColor("orange")}
          className="bg-orange-400 py-1 my-2 rounded-2xl outline-none "           
          >Orange</button>


          <button 
          onClick={() => setColor("cyan")}
          className="bg-cyan-400 py-1 my-2 rounded-2xl outline-none "           
          >Cyan</button>


        </div>


      </div>

    </>
  )
}

export default App



// Learning 
// 1. how to make bar  
// 2. how to use inline css in react  