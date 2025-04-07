import { useState } from "react";
import { useNavigate } from "react-router";


export default function Login(prop) {
    const [pending, setPending] = useState(false);
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();
        setPending(true);

        if (!email || !password || !repassword) {
            setPending(false);
            return alert('Error: Email or Password or Re-Password missing field!');
        }

        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const error = await response.json();
            setPending(false);
            return alert('Error signing in:\n' + error.message);
        }

        const data = await response.json();

        const userData = { email: data.email, accessToken: data.accessToken, userID: data._id };
        // sessionStorage.setItem('userData', JSON.stringify(userData));

        setPending(false);
        prop.setCurrState(userData);
        navigate('/');
    }


    const emailChangeHandler = (e) => {
        setemail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const repasswordChangeHandler = (e) => {
        setRepassword(e.target.value);
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="emailName"
                        onChange={emailChangeHandler}
                        value={email}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="passwordName"
                        onChange={passwordChangeHandler}
                        value={password}
                    />
                </div>

                <div>
                    <label htmlFor="repassword">Repeat Password:</label>
                    <input
                        type="repassword"
                        id="repassword"
                        name="repasswordName"
                        onChange={repasswordChangeHandler}
                        value={repassword}
                    />
                </div>

                <div>
                    <button type="submit" disabled={pending}>
                        Register
                    </button>
                </div>
            </form >
        </>
    );
}
//111111111