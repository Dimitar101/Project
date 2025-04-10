import { useNavigate } from 'react-router';
const data_URL = 'http://localhost:3030/data/quotes';


export default function Addquote(prop) {
    const navigate = useNavigate();
    const userData = prop.currState;

    const submitAction = async (formData) => {
        const formInfo = Object.fromEntries(formData);
        // console.log(formInfo);      // Object { quote: "x", quoteAuthor: "x", details: "x" }

        if (formInfo.quote == '') { return alert('Error: You did not provide a Quote.'); }

        const newDetails = formInfo.details ? formInfo.details : '';
        const newQuoteAuthor = formInfo.quoteAuthor ? formInfo.quoteAuthor : 'Unknown';

        await fetch(data_URL, {
            method: 'POST',
            headers: { 'X-Authorization': userData.accessToken },
            body: JSON.stringify({
                whoPosted: userData.email,
                quote: formInfo.quote,
                details: newDetails,
                quoteAuthor: newQuoteAuthor
            }),
        });

        navigate('/geo');
    };


    return (
        <section id="addquote-page">
            <form id="add" action={submitAction}>
                <div className="add-container">
                    <h1 className='addquoteHeader'>Create Quote</h1>

                    <label htmlFor="quote">Quote:</label>
                    <textarea name="quote" id="quote"></textarea>

                    <label htmlFor="quoteAuthor">Quote Author:</label>
                    <input type="text" id="quoteAuthor" name="quoteAuthor" placeholder="Enter quote author..." />

                    <label htmlFor="details">Details:</label>
                    <textarea name="details" id="details"></textarea>

                    <input className="btn submit" type="submit" value="Add Quote" />
                </div>
            </form>
        </section>
    );
}
