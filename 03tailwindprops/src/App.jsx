import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>

    {/* props */}
    
    <Card uname="Anshul" buttontext="View Profile" />
    <Card uname="Shreya" buttontext="Click Me" />
    <Card uname="Ankit"  />






    {/* Tailwind - all the tag should be closing tag  */}

    {/* <h1 className="text-3xl font-bold underline bg-green-400">
      Hello world!
    </h1> */}

      {/* <button className='bg-green-400 text-black px-6 py-2 rounded-xl mb-2' >
        Click Me
      </button>
      <br/> */}

      {/* <button type="button"
      className="rounded-xl bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mb-2">
        Button text
      </button>
      <br/> */}

        </>
  )
}

export default App
