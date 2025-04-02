import { useState } from 'react';


export default function Arithmetic() {
    const [operantOne, setOperantOne] = useState('...');
    const [operator, setOperator] = useState('...');
    const [operantTwo, setOperantTwo] = useState('...');
    const [result, setResult] = useState('');

    const numBtnHandler = (e) => {
        if (operator == '...') {
            if (operantOne == '...') {
                setOperantOne(e.target.textContent);
            } else {
                setOperantOne(operantOne + e.target.textContent);
            }
        } else {
            if (result == '') {
                if (operantTwo == '...') {
                    setOperantTwo(e.target.textContent);
                } else {
                    setOperantTwo(operantTwo + e.target.textContent);
                }
            }
        }
    }

    const operatorBtnHandler = (e) => {
        setOperator(e.target.textContent);
    }

    const equalHandler = () => {
        let res;
        let one = Number(operantOne);
        let two = Number(operantTwo);

        if (operator == '+') { res = one + two; }
        else if (operator == '-') { res = one - two; }
        else if (operator == '*') { res = one * two; }
        else if (operator == '/') { res = one / two; }

        setResult(res);
    }

    const backHandler = () => {
        if (operator == '...') {
            if (operantOne == '...') { return; }
            if (operantOne.length == 1) { setOperantOne('...'); return; }
            setOperantOne(operantOne.substring(0, operantOne.length - 1));
        } else {
            if (result == '') {
                if (operantTwo == '...') { return; }
                if (operantTwo.length == 1) { setOperantTwo('...'); return; }
                setOperantTwo(operantTwo.substring(0, operantTwo.length - 1));
            }
        }
    }

    const clearAllHandler = () => {
        setOperantOne('...');
        setOperantTwo('...');
        setOperator('...');
        setResult('');
    }

    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const operations = ['+', '-', '*', '/'];

    
    return (
        <>
            <div className='calculator-wrapper'>
                <div id='Operant1'>{operantOne}</div>
                <div id='Operator'>{operator}</div>
                <div id='Operant2'>{operantTwo}</div>

                <div className='calculator'>
                    <div className='btns'>
                        {/* <button onClick={numBtnHandler}>1</button> */}
                        <div className='digitBtns'>{digits.map(digit => <button onClick={numBtnHandler} key={digit}>{digit}</button>)}</div>
                        <br />
                        <div className='operationsBtns'>
                            <div>{operations.map(oper => <button onClick={operatorBtnHandler} key={oper}>{oper}</button>)}</div>
                            <br />
                            <button onClick={backHandler}>Back</button>
                            <button onClick={clearAllHandler}>CA</button>
                            <button onClick={equalHandler}>=</button>
                        </div>
                    </div>
                </div>

                <div className='Result'>Result:</div>
                <div className='Result'>{result}</div>
            </div>
        </>
    );
}
