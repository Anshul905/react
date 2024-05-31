import './App.css'
import Card2 from './components/Card2'

function App2() {
    const person1 = { name: 'Mark', age: 60, occupation: 'CEO' };
    const person2 = { name: 'Nitin', age: 40, occupation: 'Manager' };
    const person3 = { name: 'Paresh', age: 30, occupation: 'DevOps' };
    const person4 = { name: 'Anshul', age: 25, occupation: 'Software Developer' };
    const team = [ person1 , person2 , person3 , person4 ]
    
  return (
    <>


        {/* <Card2 person={person1} />
        <Card2 person={person4} />
        <Card2 person={person2} />
        <Card2 person={person3} /> */}

        
        {team.map((item, index) => (
            <Card2 key={index} person={item}/>
        ))}

    </>
  )
}

export default App2
