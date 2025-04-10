const data_URL = 'http://localhost:3030/data/quotes';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


export default function Detailspage(prop) {
    const quoteBoxID = prop.detailsState.quoteBoxID_G;
    const userData = prop.detailsState.currState;

    const [quoteData, setQuoteData] = useState([]);

    const navigate = useNavigate();


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


    // Quote data fetch.
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


    // Like
    const [likesCountForThisQuote, setLikesCountForThisQuote] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3030/data/likes')
            .then(res => res.json())
            .then(likesData => {
                Object.values(likesData);
                let count = 0;
                for (const likeObj of likesData) {
                    if (likeObj.quoteId == quoteBoxID) {
                        count++;
                    }
                }
                setLikesCountForThisQuote(count);
            })
            .catch(err => {
                console.log(err.message);
            });
    });


    const likeClick = async () => {
        // Actual liking.
        await fetch('http://localhost:3030/data/likes', {
            method: 'POST',
            headers: { 'X-Authorization': userData.accessToken },
            body: JSON.stringify({ quoteId: quoteBoxID }),
        });
        setLikesCountForThisQuote(likesCountForThisQuote + 1);
    }


    const [alreadyLiked, setAlreadyLiked] = useState(false);
    function likeComponent() {
        fetch('http://localhost:3030/data/likes')
            .then(res => res.json())
            .then(likesData => {
                Object.values(likesData);
                for (const likeObj of likesData) {
                    // Get all the likes made by the User.
                    if (userData.userID == likeObj._ownerId) {
                        // Check if the curr Quote is among the quotes liked by the User.
                        if (quoteBoxID == likeObj.quoteId) {
                            setAlreadyLiked(true);
                            return;
                        }
                    }
                }
            })
            .catch(err => {
                console.log(err.message);
            });


        return (
            alreadyLiked ?
                <p className="liked-message">You liked this Quote.</p> :
                <button className="likeBtn" onClick={likeClick}>Like</button>
        );
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

                <p className="likes">likes: {likesCountForThisQuote}</p>
                {
                    userData.accessToken ?
                        <div>
                            {
                                userData.userID == quoteData._ownerId ?
                                    <div className="editANDdeleteBts">
                                        <button className="editBtn" onClick={editClick}>Edit</button>
                                        <button className="deleteBtn" onClick={deleteClick}>Delete</button>
                                    </div> :
                                    likeComponent()
                            }
                        </div> : null
                }
            </blockquote>
        </>
    );
}
