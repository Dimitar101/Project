export default function YinyangGreen(prop) {
    const yinyangClick = () => {
        prop.setshowYinyang(true)
    }

    return (
        <>
            <div className="yinyang-wrapper-green">
                <div className="yinyang-green" onClick={yinyangClick}></div>
            </div>
        </>
    );
}
