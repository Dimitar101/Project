import { useState } from 'react';
import Arithmetic from './Arithmetic'
import Multiplication from './Multiplication'


export default function Calculator(prop) {
    const [values, setValues] = useState({
        arithmeticName: true,
        multiplicationName: false,
    });

    const inputChangeHndlr = (e) => {
        setValues(state => {
            const updatedState = { ...state, [e.target.name]: e.target.checked };

            Object.keys(updatedState).forEach(key => {
                if (key !== e.target.name) {
                    updatedState[key] = false;
                }
            });

            return updatedState;
        });
    }


    return (
        <>
            <h1 id='calc-header'>First Grader Clculator</h1>
            <hr />

            <form className="calc-form">
                <div className="arithmetic">
                    <label htmlFor="ari">Arithmetic</label>
                    <input
                        type="checkbox"
                        id="ari"
                        name="arithmeticName"
                        onChange={inputChangeHndlr}
                        checked={values.arithmeticName}
                    />
                </div>

                <div className="multiplication">
                    <label htmlFor="multi">Multiplication</label>
                    <input
                        type="checkbox"
                        id="multi"
                        name="multiplicationName"
                        onChange={inputChangeHndlr}
                        checked={values.multiplicationName}
                    />
                </div>
            </form>

            {values.arithmeticName && <Arithmetic />}
            {values.multiplicationName && <Multiplication currState={prop.currState} />}
        </>
    );
}
