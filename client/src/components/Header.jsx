import { NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { useEffect } from 'react';


const navigation = [
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
];


function navs(accessTokenX, navigationX) {
    if (accessTokenX) {
        return <NavLink to='/logout'>Logout Portal</NavLink>
    } else {
        return navigationX.map((item) => (
            <NavLink key={item.name} to={item.path}>
                {item.name}
            </NavLink>
        ));
    }
}


export default function Header(prop) {
    const userData = prop.currState;

    useEffect(() => {
        //
    }, [prop.currState.accessToken]);


    return (
        <>
            <header>
                <div id="container-top">
                    <div id="logo">
                        <NavLink to={'/'}>
                            <img src={logo} />
                        </NavLink>
                    </div>
                    {userData.accessToken && <div className='who'>Logged in as: {userData.email}</div>}
                </div>

                <div id="container-nav">
                    <nav className="main-nav">
                        <ul>
                            {navs(userData.accessToken, navigation)}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}