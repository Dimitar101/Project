import { useNavigate } from "react-router";


export default function Logout(prop) {
    const navigate = useNavigate();

    async function confirmLogout() {
        const userData = prop.appState.currState;

        await fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: { 'X-Authorization': userData.accessToken },
        });

        prop.appState.setCurrState(
            {
                email: null,
                accessToken: null,
                userID: null
            }
        );
        navigate('/');
    }


    return (
        <>
            <div className="confirm-wrapp">
                <p className="confirm-p">Confirm your intention to Logout of your account.</p>
                <button className="confirm-btn" onClick={confirmLogout}>Confirm</button>
            </div>
        </>
    );
}
