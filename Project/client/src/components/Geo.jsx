import { useEffect, useState } from "react";
import { useNavigate } from "react-router";



export default function Geo(prop) {
    const data_URL = 'http://localhost:3030/data/quotes';
    const userData = prop.currState;
    const navigate = useNavigate();

    const [quotesData, setQuotesData] = useState([]);


    const addClick = () => {
        navigate('/addquote');
    }

    const detailsClick = () => {
        navigate('/detailspage');
    }


    useEffect(() => {
        fetch(data_URL + '?sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(data => {
                const result = Object.values(data);
                setQuotesData(result);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);


    return (
        <>
            <div className="wrapper">
                <h1 className="allQuotes-header">All Quotes</h1>
                {userData.accessToken ?
                    <button className="geo-addBtn" onClick={addClick}>Add Quote</button> :
                    <p className="geo-p">You need to be Logged in with and Account to add a Quote.</p>}

                <div className="quotes-vessel">
                    {quotesData.map(quoteBox =>
                        <div className="quoteBox" key={quoteBox._id}>
                            <p>Post made by: {quoteBox.whoPosted}</p>
                            <p className="quote">"{quoteBox.quote}"</p>
                            <button className="detailBtn" onClick={detailsClick}>Details</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
