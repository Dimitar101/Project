import { useState, useEffect } from "react";
import ChItems from "./ChSqrItems";


export default function Ch() {
    const [board, setBoard] = useState([]);
    const [clicked, setClicked] = useState('---');

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/squares')
            .then(res => res.json())
            .then(data => {
                const result = Object.values(data);
                setBoard(result);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);

    const sqrClick = (sqrId, sqrAlgebraicName) => {
        setClicked(sqrAlgebraicName);

        setBoard(prev => prev.map(SQR => SQR._id === sqrId ? { ...SQR, isMarked: !SQR.isMarked } : SQR));
        setBoard(prev => prev.map(SQR => SQR._id !== sqrId ? { ...SQR, isMarked: false } : SQR));
    }


    return (
        <>
            <h1 className="chessling-header">Chessling</h1>
            <hr />

            <div className="instr">
                <div>You clicked square:</div>
            </div>
            <br />
            <div className="answer">{clicked}</div>

            <div className="chessling">
                <ChItems sqrClick={sqrClick} board={board} />
            </div>
        </>
    );
}
