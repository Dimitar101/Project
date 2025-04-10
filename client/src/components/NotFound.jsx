import { useNavigate } from "react-router";


export default function NotFound() {
    const navigate = useNavigate();


    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! The page you're looking for doesn't exist. </p>
            <p className="not-found-message">For your security you will be logged out of your profile in case you were logged in in the first place.</p>
            <button className="back-home" onClick={() => navigate('/')}>Go Back to Home</button>
        </div>
    );
}
