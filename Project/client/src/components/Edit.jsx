import { useNavigate } from 'react-router';
const data_URL = 'http://localhost:3030/data/quotes';
import { useEffect, useState } from "react";


export default function Edit(prop) {
    const quoteBoxID = prop.editState.quoteBoxID_G;
    const userData = prop.editState.currState;
    
    const [quoteData, setQuoteData] = useState([]);
    const navigate = useNavigate();

    if (quoteBoxID === undefined) {
        return;
    }


    const submitEdit = async (formData) => {
        const formInfo = Object.fromEntries(formData);
        // console.log(formInfo);      // Object { quote: "11", quoteAuthor: "11", details: "11" }

        const newQuote = formInfo.quote ? formInfo.quote : quoteData.quote;
        const newDetails = formInfo.details ? formInfo.details : quoteData.details;
        const newQuoteAuthor = formInfo.quoteAuthor ? formInfo.quoteAuthor : quoteData.quoteAuthor;

        await fetch(data_URL + '/' + quoteBoxID, {
            method: 'PUT',
            headers: { 'X-Authorization': userData.accessToken },
            body: JSON.stringify({
                whoPosted: userData.email,
                quote: newQuote,
                details: newDetails,
                quoteAuthor: newQuoteAuthor
            }),
        });

        navigate('/detailspage');
    };


    useEffect(() => {
        fetch(data_URL + '/' + quoteBoxID)
            .then(res => res.json())
            .then(data => setQuoteData(data))
            .catch(err => {
                console.log(err.message);
            });
    }, []);


    return (
        <section id="addquote-page">
            <form id="add" action={submitEdit}>
                <div className="add-container">
                    <h1 className='addquoteHeader'>Edit Your Quote</h1>
                    <br />

                    <p className='as-is'>The Quote as is:</p>
                    <hr />
                    <p>{quoteData.quote}</p>
                    <hr />
                    <br />
                    <br />
                    <label htmlFor="quote">Edit Quote Here:</label>
                    <textarea name="quote" id="quote"></textarea>

                    <p className='as-is'>The Quote Author as is:</p>
                    <hr />
                    <p>{quoteData.quoteAuthor}</p>
                    <hr />
                    <br />
                    <br />
                    <label htmlFor="quoteAuthor">Edit Quote Author Here:</label>
                    <input type="text" id="quoteAuthor" name="quoteAuthor" placeholder="Enter quote author..." />

                    <p className='as-is'>The Details as are:</p>
                    <hr />
                    <p>{quoteData.details}</p>
                    <hr />
                    <br />
                    <br />
                    <label htmlFor="details">Edit Details Here:</label>
                    <textarea name="details" id="details"></textarea>

                    <input className="btn submit" type="submit" value="Submit Edited Version" />
                </div>
            </form>
        </section>
    );
}
