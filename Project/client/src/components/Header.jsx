import { NavLink } from 'react-router';
import logo from '../assets/logo.png'


const navigation = [
    { name: 'Login', path: '/login' },
    { name: 'Reg', path: '' },
    { name: 'xxx', path: '' },
];


export default function Header() {

    return (
        <>
            <header>
                <div id="container-top">
                    <div id="logo">
                        <NavLink to={'/'}>
                            <img src={logo} />
                        </NavLink>
                    </div>
                </div>

                <div id="container-nav">
                    <nav className="main-nav">

                        <ul>
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </ul>
                        
                    </nav>
                </div>
            </header>
        </>
    );
}
