import './Counter.css'
import {PropTypes} from 'prop-types'


export default function CounterButtons({by, parentIncrement, parentDecrement}){

    function increment(){
        parentIncrement(by)
    }
    function decrement(){
        parentDecrement(by)
    }

    return(
        <div className = "">
            <button onClick={increment} className="cButton">+{by}</button>
            <span></span>
            <button onClick={decrement} className="cButton">-{by}</button>
        </div>
    )
}

CounterButtons.propTypes = {
    by : PropTypes.number
}

CounterButtons.defaultProps = {
    by : 1
}
