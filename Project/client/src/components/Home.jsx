import { useState } from "react";

import Cards from './Cards'
import Yinyang from './Yinyang'
import YinyangGreen from './YinyangGreen'
import Bildboard from './Bildboard'
import Letters from './Letters'
import Footer from './Footer'


export default function Home() {
    const [showYinyang, setshowYinyang] = useState(true);

    return (
        <>
            <Bildboard />
            <Cards />

            {showYinyang && <Yinyang setshowYinyang={setshowYinyang} />}
            {showYinyang || <YinyangGreen setshowYinyang={setshowYinyang} />}

            {showYinyang && <Letters />}

            <Footer />
        </>
    );
}
