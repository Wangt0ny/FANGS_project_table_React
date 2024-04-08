import './css/anchorList.css'

function AnchorList() {

    function scrollToAnchor(id) {
        var anchor = document.getElementById(id);
        var offset = anchor.offsetTop;
        document.getElementById("page-wrapper").scrollTo({
            top: offset - 30,
            behavior: "smooth",
        })
    }

    return (
        <ul className="list">
            <li onClick={() => scrollToAnchor("hotPot")}>鍋類</li>
            <li onClick={() => scrollToAnchor("meat")}>肉類</li>
            <li onClick={() => scrollToAnchor("seafood")}>海鮮</li>
            <li onClick={() => scrollToAnchor("vegetable")}>蔬菜</li>
            <li onClick={() => scrollToAnchor("dumplings")}>火鍋餃</li>
        </ul>
    );
}

export default AnchorList;