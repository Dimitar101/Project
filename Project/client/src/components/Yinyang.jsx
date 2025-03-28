export default function Yinyang(prop) {
    const yinyangClick = () => {
        prop.setshowYinyang(false)
    }

    return (
        <>
            <div className="yinyang-wrapper">
                <div className="yinyang" onClick={yinyangClick}></div>
            </div>
        </>
    );
}
