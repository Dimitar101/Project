import { useNavigate } from "react-router";


export default function Logout(prop) {
    const navigate = useNavigate();
    
    async function confirmLogout() {
        // const userData = JSON.parse(sessionStorage.getItem('userData'));
        const userData = prop.appState.currState;

        await fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: { 'X-Authorization': userData.accessToken },
        });

        // sessionStorage.removeItem('userData');
        prop.appState.setCurrState();
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
//111111111