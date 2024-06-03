import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;




// When you find yourself duplicating the same logic (such as state management, API calls, or event handling) in multiple components, it’s a good time to create a custom hook.

// Custom hooks allow you to keep your code DRY (Don’t Repeat Yourself) by centralizing shared functionality.

// When you need to fetch data from an API or perform asynchronous operations, a custom hook can encapsulate this logic.

// Custom hooks can simplify your component code by abstracting away the details of state management.

// By creating a custom hook, you can manage side effects consistently across different components.

// If you have functionality that needs to be shared across different routes or pages in your application, consider creating a custom hook.

// Custom hooks allow you to maintain consistency and avoid code duplication.

// Custom hooks promote modularity by separating concerns.

// if you find yourself writing similar code in multiple components, creating a custom hook can help you avoid duplication.

// Custom hooks can manage state using useState, useReducer, or other hooks, which is not possible with regular functions.