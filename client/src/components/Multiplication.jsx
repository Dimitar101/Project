import { useState } from 'react';


export default function Multiplication(prop) {
    const userData = prop.currState;

    const [multiplicand, setMultiplicand] = useState('...');
    const [multiplier, setMultiplier] = useState('...');
    const [product, setProduct] = useState('');

    const numBtnHandler = (e) => {
        if (multiplicand == '...') {
            setMultiplicand(e.target.textContent);
        } else {
            setMultiplier(e.target.textContent);
            setProduct(+multiplicand * +e.target.textContent)
        }
    }

    const clearAllHandler = () => {
        setMultiplicand('...');
        setMultiplier('...');
        setProduct('');
    }

    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


    return (
        <>
            {userData.accessToken ?
                <div className='calculator-wrapper'>
                    <div className='multiplicand'>{multiplicand}</div>
                    <div className='multiplicationOperation'>*</div>
                    <div className='multiplier'>{multiplier}</div>

                    <div className='calculator'>
                        <div className='btns'>
                            <div className='digitBtns'>{digits.map(digit => <button onClick={numBtnHandler} key={digit}>{digit}</button>)}</div>
                            <br />
                            <div className='clearOperation'>
                                <br />
                                <button onClick={clearAllHandler}>Clear</button>
                            </div>
                        </div>
                    </div>

                    <div className='product Result'>product:</div>
                    <div className='product Result'>{product}</div>
                </div> :

                <p className='multi-log-in-warning'>You need to log in with an account to access Multiplication practicing. In the mean time basic Arithmetic calculator is free to use.</p>}
        </>
    );
}
