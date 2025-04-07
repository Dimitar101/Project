import { useState } from "react";


export default function Login() {
    const [pending, setPending] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        setPending(true);

        console.log({ username, password });
        setPending(false);
    }

    const usernameChangeHandler = (e) => {
        // console.log(e.target.value);
        setUsername(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="usernameName"
                        onChange={usernameChangeHandler}
                        value={username}
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
                    <button type="submit" disabled={pending}>
                        Login
                    </button>
                </div>
            </form >
        </>
    );
}
