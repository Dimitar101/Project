import { NavLink } from 'react-router';
import { useEffect, useState } from "react";
import '../app-css/card.css'


export default function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/cards')
            .then(res => res.json())
            .then(data => setCards(Object.values(data)))
            .catch(err => {
                console.log(err.message);
            });
    }, []);
    

    return (
        <>
            <h1 id='welcome'>Welcome</h1>

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
