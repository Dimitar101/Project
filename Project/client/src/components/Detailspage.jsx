const data_URL = 'http://localhost:3030/data/quotes';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


export default function Detailspage(prop) {
    const quoteBoxID = prop.detailsState.quoteBoxID_G;
    const userData = prop.detailsState.currState;

    const navigate = useNavigate();




    const [quoteData, setQuoteData] = useState([]);

    // Protect direct /detailspage user entry.
    if (quoteBoxID === undefined) {
        return (
            <>
                <blockquote>"The best quote is the one you make yourself. "
                    <footer className="detailsFooter">&mdash;
                        <cite>
                            Me
                        </cite>
                    </footer>

                    <br />
                    <br />
                    <p className="detailsP">Folk wisdom.</p>
                </blockquote>
            </>
        );
    }

    useEffect(() => {
        fetch(data_URL + '/' + quoteBoxID)
            .then(res => res.json())
            .then(data => setQuoteData(data))
            .catch(err => {
                console.log(err.message);
            });
    }, []);




    const editClick = () => {
        navigate('/edit');
    }


    const deleteClick = async () => {
        if (confirm("Are you sure you want to delete!") === true) {
            await fetch(data_URL + '/' + quoteBoxID, {
                method: 'DELETE',
                headers: { 'X-Authorization': userData.accessToken },
            });
            navigate('/geo');
        }
    }


    const likeClick = async () => {
        console.log(999);
    }


    return (
        <>
            <button className="backToALL" onClick={() => navigate('/geo')}>Back To ALL Quoates</button>

            <blockquote>"{quoteData.quote}"
                <footer className="detailsFooter">&mdash;
                    <cite>
                        {quoteData.quoteAuthor}
                    </cite>
                </footer>

                <br />
                <br />
                <p className="detailsP">{quoteData.details}</p>
                <br />


                <p className="likes">likes: 0</p>

                {
                    userData.accessToken ?
                        <div>
                            {
                                userData.userID == quoteData._ownerId ?
                                    <div className="editANDdeleteBts">
                                        <button className="editBtn" onClick={editClick}>Edit</button>
                                        <button className="deleteBtn" onClick={deleteClick}>Delete</button>
                                    </div> :
                                    <button className="likeBtn" onClick={likeClick}>Like</button>
                            }
                        </div> : null
                }
            </blockquote>
        </>
    );
}
