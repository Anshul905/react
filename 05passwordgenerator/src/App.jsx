import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef( null )

  
  
  
  const passwordGenerator = useCallback( () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    if(numberAllowed) str += "0123456789" 
    if(characterAllowed) str += "!@#$%^&*-_+=[]{}~`" 
    
    let pass = "" ;
    for(let i=1 ; i<=length ; i++){
      const ind = Math.floor( Math.random()*str.length )
      pass += str[ind]  
    }
    console.log("password : " + pass);
    setPassword(pass);

  },[ length , numberAllowed , characterAllowed , setPassword ] ) 
  // setPassword not need to pass as dependency , it is just for optimization 
  // if we give password - it will go in infinite loop as change in password will lead to change the passwrod again and so on ...




  // passwordGenerator() 
  // cant do like this , as we dont have control of rendering in react 
  // better to use useEffcet 
  // useEffcet Hook 
  useEffect( ()=>{ 
    passwordGenerator()
 } , [ length , numberAllowed , characterAllowed , passwordGenerator] )


//  useRef Hook 
const copyToClipboard = useCallback( ()=>{
  // console.log(passwordRef.current);
  try {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,20);
    navigator.clipboard.writeText(passwordRef.current.value);
    // console.log('copied: ' + passwordRef.current.value);
    console.log('copied: ' + password);
  }catch (err) {
    console.error('Failed to copy: ', err);
  }
} , [ password ])


  return (
    <>

      <div className=' w-full max-w-md mx-auto my-5 py-1 bg-gray-700 text-black '> 

        <h1 className='text-center text-2xl  py-2  text-white border-2px'>
          Password Generator
        </h1>

        <div className='flex flex-wrap my-3 mx-5  '>
            <input 
              className='outline-none w-10/12 rounded-l '
              type="text"
              value={password}
              placeholder=' Password ... '
              readOnly
              ref={passwordRef}
            />
            <button 
            className='outline-none bg-blue-100 text-black px-2 rounded-r text-xs font-bold'
            onClick={copyToClipboard}
            >Copy</button>
        </div>

        {/* 3 */}
        <div className='flex flex-wrap my-4 mx-5 gap-x-4 text-xs '>
          <div className='flex flex-wrap gap-x-1 '>
              <input
                type="range"
                min={5}
                max={50}
                value={length}
                className='cursor-pointer'
                onChange={ (e)=>setLength(e.target.value) }
              />
            <label 
              className='text-white'>
              Length :  {length}
            </label>
          </div>
          <div className='flex flex-wrap gap-x-1'>
              <input
                type="checkbox"
                value={numberAllowed}
                id='numberInput'
                className='cursor-pointer'
                // onChange={ setNumberAllowed(!numberAllowed) }
                onChange={ () => { setNumberAllowed(!numberAllowed) } }
              />
            <label 
              htmlFor='numberInput'
              className='text-white cursor-pointer'>
              Numbers
            </label>
          </div>
          <div className='flex flex-wrap gap-x-1 '>
              <input
                type="checkbox"
                value={characterAllowed}
                id='characterInput'
                className='cursor-pointer'
                // onChange={ () => { setCharacterAllowed(!characterAllowed) } }
                onChange={ () => { setCharacterAllowed( (prev) => !prev ) } }
              />
            <label 
              htmlFor='characterInput'
              className='text-white cursor-pointer'>
              Characters
            </label>
          </div>
          
        </div>
        {/* 3 */}


      </div>
    </>
  )
}

export default App
