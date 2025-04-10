import { useNavigate } from "react-router";


export default function NotFound() {
    const navigate = useNavigate();


    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
            <button className="back-home" onClick={() => navigate('/')}>Go Back to Home</button>
        </div>
    );
}
