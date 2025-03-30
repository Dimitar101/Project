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


import Header from './components/Header'
import Home from './components/Home'
import Calculator from './components/Calculator'
import Login from './components/Login'
import Ch from './components/Ch'
import Welcome from './components/Welcome'


export default function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/chessling" element={<Ch />} />
                <Route path="/login" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </>
    );
}
