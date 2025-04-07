import { Link, NavLink } from 'react-router';
import { useEffect, useState } from "react";
import '../app-css/card.css'


export default function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://localhost:3030/jsonstore/cards', { signal })
            .then(res => res.json())
            .then(data => setCards(Object.values(data)))
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Fetching data was aborted');
                } else {
                    console.error(error);
                }
            });
        return () => {
            controller.abort();
        }
    }, []);


    return (
        <>
            <h1 id='welcome'>
                <Link to='welcome' style={{ textDecoration: 'none', color: '#81af81' }}>
                    Welcome
                </Link>
            </h1>


            <div className="cards">
                {
                    cards.map((card) => (
                        <article key={card.gameName}>
                            <div className="card-picture">
                                <img src={card.img} />
                            </div>
                            <div className="face-elements">
                                <h3>{card.gameName}</h3>
                                <p>{card.description}</p>
                                <NavLink className="card-button" to={card.path} >
                                    START
                                </NavLink>
                            </div>
                        </article>
                    ))
                }
            </div>
        </>
    );
}
