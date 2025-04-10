import { useState } from 'react';
import { Routes, Route } from 'react-router';


import './app-css/App.css'
import './app-css/header.css'
import './app-css/navigation.css'
import './app-css/footer.css'
import './app-css/bildboard.css'
import './app-css/letters.css'
import './app-css/yinyang.css'
import './app-css/yinyangGreen.css'
import './app-css/login.css'
import './app-css/calculator.css'
import './app-css/welcome.css'
import './app-css/ch.css'
import './app-css/confirmLogout.css'
import './app-css/geo.css'
import './app-css/addquote.css'
import './app-css/detailspage.css'
import './app-css/notFound.css'


import Header from './components/Header'
import Home from './components/Home'
import Calculator from './components/Calculator'
import Login from './components/Login'
import Ch from './components/Ch'
import Welcome from './components/Welcome'
import Geo from './components/Geo'
import Logout from './components/Logout'
import Register from './components/Register'
import Addquote from './components/Addquote'
import Detailspage from './components/Detailspage'
import Edit from './components/Edit'
import NotFound from './components/NotFound'


export default function App() {
    const [currState, setCurrState] = useState(
        {
            email: null,
            accessToken: null,
            userID: null
        }
    );

    const [quoteBoxID_G, setQuoteBoxID_G] = useState();


    return (
        <>
            <Header currState={currState} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculator" element={<Calculator currState={currState} />} />
                <Route path="/chessling" element={<Ch />} />
                <Route path="/geo" element={<Geo geoState={{ currState: currState, setQuoteBoxID_G: setQuoteBoxID_G }} />} />
                <Route path="/login" element={<Login setCurrState={setCurrState} />} />
                <Route path="/register" element={<Register setCurrState={setCurrState} />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/logout" element={<Logout appState={{ currState: currState, setCurrState: setCurrState }} />} />
                <Route path="/addquote" element={<Addquote currState={currState} />} />
                <Route path="/detailspage" element={<Detailspage detailsState={{ quoteBoxID_G: quoteBoxID_G, currState: currState }} />} />
                <Route path="/edit" element={<Edit editState={{ quoteBoxID_G: quoteBoxID_G, currState: currState }} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
