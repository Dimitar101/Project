import { NavLink } from 'react-router';

import '../app-css/card.css'
import pic1 from '../assets/picture1.jpg'


const cards = [
    { img: pic1, name: 'Calculator', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', path: '/calculator' },
    { img: pic1, name: 'Digital', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', path: '' },
    { img: pic1, name: 'Digital 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', path: '' },
];

export default function Cards() {

    return (
        <>
            <h1 id='welcome'>Welcome</h1>

            <div className="cards">
                {
                    cards.map((card) => (
                        <article key={card.name}>
                            <div className="card-picture">
                                <img src={card.img} />
                            </div>
                            <div className="face-elements">
                                <h3>{card.name}</h3>
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











{/* const navigation = [
    { name: 'Login', path: '/login' },
    { name: 'Reg', path: '' },
    { name: 'xxx', path: '' },
];


{
    navigation.map((item) => (
        <NavLink
            key={item.name}
            to={item.path}
        // style={({ isActive }) => isActive ? { color: 'oklch(0.511 0.262 276.966)' } : {}}
        >
            {item.name}
        </NavLink>
    ))
} */}



// {/* <article>
// <div className="card-picture">
//     <img src={pic1} />
// </div>
// <div className="face-elements">
//     <h3>Calculator</h3>
//     <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim. Nunc ornare leo tortor.</p>
//     {/* <a href="#" className="button">START</a> */}
//     <NavLink
//         // key={1}
//         to={'/calculator'}
//         className="button"
//     // style={({ isActive }) => isActive ? { color: 'oklch(0.511 0.262 276.966)' } : {}}
//     >
//         START
//     </NavLink>
// </div>
// </article>

// <article>
// <div className="card-picture">
//     <img src={pic1} />
// </div>
// <div className="face-elements">
//     <h3>Digital Currency</h3>
//     <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim. Nunc ornare leo tortor.</p>
//     <a href="#" className="button" onClick={startClickHandler}>START</a>
// </div>
// </article>

// <article>
// <div className="card-picture">
//     <img src={pic1} />
// </div>
// <div className="face-elements">
//     <h3>Digital Currency</h3>
//     <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim. Nunc ornare leo tortor.</p>
//     <a href="#" className="button">START</a>
// </div>
// </article> */}