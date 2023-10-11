import { useState } from "react"
import CounterButtons from './CounterButtons'
import './Counter.css'

export default function Counter(){
    const [count, setCount] = useState(0)

    function incrementCount(by){
        setCount(count + by)
    }
    function decrementCount(by){
        setCount(count - by)
    }
    function resetCount(){
        setCount(0);
    }

    return(
        <div>
            <span className="counter">{count}</span>
            <CounterButtons by={1} parentIncrement={incrementCount}
                                        parentDecrement={decrementCount} />
            <CounterButtons by={3} parentIncrement={incrementCount}
                                        parentDecrement={decrementCount} />
            <CounterButtons parentIncrement={incrementCount}
                                        parentDecrement={decrementCount} />
            <button className="box" onClick={resetCount}>Reset</button>

        </div>
    )
}