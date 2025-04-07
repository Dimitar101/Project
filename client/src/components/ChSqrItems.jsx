export default function ChItems(
    {
        sqrClick,
        board,
    }
) {

    function buildBoard() {
        const vessel = [];
        for (let i = 0; i < 64; i += 8) {
            vessel.push(
                <div className="row" key={i}>
                    {
                        board.slice(i, i + 8).map(sqr => <div
                            className={sqr.isMarked ? 'square red' : sqr.colour}
                            onClick={() => sqrClick(sqr._id, sqr.algebraicName)}
                            key={sqr._id}></div>)
                    }
                </div>
            );
        }
        return vessel;
    }


    return (
        <>
            {buildBoard()}
        </>
    );
}
