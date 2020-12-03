import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value} ) => {

    const [counter, setCounter] = useState(value);

    const handlerClickUp = () => {
        setCounter(counter+1);
    }

    const handlerClickDown = (  ) => {
        setCounter(counter-1);
    }

    const handlerClickRst = () => {
        setCounter(value);
    }


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <h3>
                <button onClick={handlerClickDown}>-</button>
                <button onClick={handlerClickRst}>R</button>
                <button onClick={handlerClickUp}>+</button>
            </h3>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;


