import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return(
        <h1>Custom MyApp function !</h1>
    )
}

const ReactElement_object = {
    type : 'a' , 
    props : {
        href : 'https://codeforces.com/', 
        target : '_blank'
    } , 
    children : 'Codeforces ReactElement_object'
}

const anotherElement = (
    <a href='https://codeforces.com/' target='_blank'>Codeforces anotherElement</a>
)

const expression = 100 
const reactElement = React.createElement(
    'a',
    { href  :'https://codeforces.com/' , target : '_blank' } ,
    'codeforces reactElement' ,
    expression // evaluate expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    // App() // not a good practice

    // App is just a function so make some other inside the file 
    // <MyApp />
    // it is function so call it normal ways  
    // MyApp() // not a good practice

    // bundler converts eleemnt to this type object behind the scene so pass that object directly  
    // it does not work because react does not understand custom object , react bundler must have other style/syntax to convert/parse element 
    // <ReactElement_object />
    // ReactElement_object()
    // ReactElement_object
    

    // anotherElement 


    // reactElement

)
