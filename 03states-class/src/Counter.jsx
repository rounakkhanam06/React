import { useState } from 'react'

export default function Counter(){
    const [count, setCount] = useState(0)
  
// the set function tht lets you update the state to a different value and trigger a re-render


    function inCount(){
       setCount(count+1);
        console.log(count);
    }
    return(
        <div>
            <h3>count = {count}</h3>
            <button onClick={inCount}>Increase count</button>
        </div>
    )
}