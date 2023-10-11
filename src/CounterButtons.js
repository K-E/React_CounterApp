import { useState } from "react"
import './CounterButtons.css'
import {PropTypes} from 'prop-types'


export default function CounterButtons({by}){
    const [count, setCount] = useState(0)
    return(
        <div className = "box">
            <button onClick={incrementCount} className="cButton">+{by}</button>
            <span className="counter">{count}</span>
            <span></span>
            <button onClick={decrementCount} className="cButton">-{by}</button>
        </div>
    )
    function incrementCount(){
        setCount(count + by)
    }
    function decrementCount(){
        setCount(count - by)
    }
}

CounterButtons.propTypes = {
    by : PropTypes.number
}

CounterButtons.defaultProps = {
    by : 1
}
