import './Counter.css'
import {PropTypes} from 'prop-types'


export default function CounterButtons({by, parentIncrement, parentDecrement}){

    return(
        <div className = "">
            <button onClick={() => parentIncrement(by)} className="cButton">+{by}</button>
            <span></span>
            <button onClick={() => parentDecrement(by)} className="cButton">-{by}</button>
        </div>
    )
}

CounterButtons.propTypes = {
    by : PropTypes.number
}

CounterButtons.defaultProps = {
    by : 1
}
