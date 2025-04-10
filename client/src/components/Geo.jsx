import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


export default function Geo(prop) {
    const data_URL = 'http://localhost:3030/data/quotes';
    const userData = prop.geoState.currState;
    const navigate = useNavigate();

    const [quotesData, setQuotesData] = useState([]);


    const addClick = () => {
        navigate('/addquote');
    }

    const detailsClick = (quoteBoxID) => {
        prop.geoState.setQuoteBoxID_G(quoteBoxID);
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
                    <div>
                        <button className="geo-addBtn" onClick={addClick}>Add Quote</button>
                        {quotesData.length == 0 ? <p className="geo-p">No quotes posted yet.</p> : null}
                    </div> :
                    <p className="geo-p">You need to be Logged in with and Account to add a Quote.</p>}

                <div className="quotes-vessel">
                    {quotesData.map(quoteBox =>
                        <div className="quoteBox" key={quoteBox._id}>
                            <p>Post made by: {quoteBox.whoPosted}</p>
                            <p className="quote">"{quoteBox.quote}"</p>
                            <button className="detailBtn" onClick={() => detailsClick(quoteBox._id)}>Details</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
