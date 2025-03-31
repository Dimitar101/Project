import { useState, useEffect } from "react";


export default function Ch() {

    const sqrClick = (e) => {
        e.target.className = "square red";
    }



    function coloring(x) {
        // if (x % 2 == 0) {
        //     return "square white";
        // } else {
        //     return "square black";
        // }
        return x % 2 == 0 ? "square white" : "square black";
    }

    const board = [];
    for (let i = 0; i < 8; i++) {
        const row = [];
        for (let j = 0; j < 8; j++) {
            i % 2 == 0 ? j += 1 : j;
            row.push(<div className={coloring(j)} onClick={sqrClick} key={i + j}></div>);
            i % 2 == 0 ? j = 1 : j;
        }
        board.push(<div className="row" key={i}>{row}</div>)
    }


    return (
        <>
            <h1 className="chessling-header">Chessling</h1>
            <hr />

            <div className="form-and-pic">
                <div>1</div>
                <div>2</div>
            </div>

            <div className="chessling">
                {board}
            </div>
        </>
    );
}



{/* <div className={true ? "square white" : "square black"}></div> */ }
