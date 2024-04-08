import './css/shopcartbutton.css'

function ShopcartButton(props) {

    let btnState = props.btnState; //Boolean
    let setOpenCart = props.setOpenCart; //Boolean
    let setBtnState = props.setBtnState; //fn
    let productDataList = props.data; //array
    let shopcart = props.shopcart; //array

    function openShopcart() {
        setOpenCart(true);
        setBtnState(true);
    }

    function totalPrice() {
        if (shopcart.length !== 0) {
            return shopcart.map((x) => {
                let { id, item } = x;
                let search = productDataList.find((y) => y.id === id) || [];
                return item * search.price;
            }).reduce((x, y) => x + y, 0);
        }
        else {
            return 0
        }
    }

    function totalItem() {
        return shopcart.map((x) => x.item).reduce((x, y) => x + y, 0);
    }

    return (
        <div className={btnState ? "shopcart-button" : "shopcart-button active"} onClick={openShopcart}>
            <div className='button-text'>
                目前<span>{totalItem()}</span>訂單
                共<span>{totalPrice()}</span>元
            </div>

        </div>
    );
}

export default ShopcartButton;