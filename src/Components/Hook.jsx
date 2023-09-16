import React, {useState} from 'react'

const Sa = () =>{
    return <h1>Algo</h1>
}
const StateTutorial = () =>{
const [counter,setCounter] =  useState(0);  
const increment = () => {
        setCounter(counter + 1)
    }
    return<div>{counter}<button onClick={increment}>Increment</button></div>
}

export {Sa, StateTutorial};