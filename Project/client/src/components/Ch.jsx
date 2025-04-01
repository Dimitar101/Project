import { useState, useEffect } from "react";


export default function Ch() {
    const [board, setBoard] = useState([]);
    const [clicked, setClicked] = useState('');

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

            <div className="form-and-pic">
                <div>Guess the Algebraic notation of a square you click.</div>
                <div>You clicked square: {clicked}</div>
            </div>


            <div className="chessling">
                <div className="row">
                    {board.slice(0, 8).map(sqr => <div className={sqr.isMarked ? 'square red' : sqr.colour} onClick={() => sqrClick(sqr._id, sqr.algebraicName)} key={sqr._id}></div>)}
                </div>
                <div className="row">
                    {board.slice(8, 16).map(sqr => <div className={sqr.isMarked ? 'square red' : sqr.colour} onClick={() => sqrClick(sqr._id, sqr.algebraicName)} key={sqr._id}></div>)}
                </div>
                <div className="row">
                    {board.slice(16, 24).map(sqr => <div className={sqr.isMarked ? 'square red' : sqr.colour} onClick={() => sqrClick(sqr._id, sqr.algebraicName)} key={sqr._id}></div>)}
                </div>
            </div>
        </>
    );
}
