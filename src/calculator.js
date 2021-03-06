import React, {useState, useEffect} from 'react';

function Calculator(props) {
    console.log(props)
    console.log(props.numberOne)
    console.log(props.numberTwo)

    const [result, setResult] = useState();


    const addNumbers = async () => {
        let res = props.numberOne + props.numberTwo;
        console.log(res)
        setResult(res);
    };

    const subtractNumbers = async () => {
        let res = props.numberOne - props.numberTwo;
        setResult(res);
    };

    const divideNumbers = async () => {
        let res = props.numberOne / props.numberTwo;
        setResult(res);
    };

    const multiplyNumbers = async () => {
        let res = props.numberOne * props.numberTwo;
        setResult(res);
    };

    return (
        <>
            <h1>Number One: {props.numberOne}</h1>
            <h1>Number Two: {props.numberTwo}</h1>

            {result && <h1>The result is: {result}</h1>}

            <button onClick={addNumbers}>Add Numbers</button>
            <button onClick={subtractNumbers}>Subtract Numbers</button>
            <button onClick={multiplyNumbers}>Multiply Numbers</button>
            <button onClick={divideNumbers}>Divide Numbers</button>
        </>
    );
}

export default Calculator
