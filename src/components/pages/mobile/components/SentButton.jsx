import './css/sentbutton.css'

function SentButton(props) {

    let btnState = props.btnState; //Boolean
    let shopcart = props.shopcart;//array
    let setShopcart = props.setShopcart; //fn
    let setOpenCart = props.setOpenCart; //fn
    let setBtnState = props.setBtnState; //fn

    function sentShopcart() {
        setShopcart([]);
        setOpenCart(false);
        setBtnState(false);
    }

    function totalItem() {
        return shopcart.map((x) => x.item).reduce((x, y) => x + y, 0);
    }

    return (
        <div className={btnState ? "shopcart-button active" : "shopcart-button"} onClick={sentShopcart}>
            <div className='button-text'>
                送出<span>{totalItem()}</span>訂單
            </div>
        </div>
    );
}

export default SentButton;