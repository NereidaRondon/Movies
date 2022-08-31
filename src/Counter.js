import React, {useState} from 'react';

  export default function Counter(){
    const [count, setCount]=useState(10)
 
        const increment=()=>{
          setCount(count+1)
        }
        const decrement=()=>{
          setCount (count-1)
        }
        return(
              <div>
                <h1>{count}</h1>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
              </div>

            );
}
