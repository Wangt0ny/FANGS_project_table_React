import './css/shopcartItem.css'

function ShopcartItem(props) {

    let search = props.data; //object
    let item = props.item; //number
    let id = props.id;
    let shopcart = props.shopcart; //array
    let setShopcart = props.setShopcart; //fn
    let setOpenCart = props.setOpenCart; //fn
    let setBtnState = props.setBtnState; //fn

    function deleteItem(id) {
        shopcart = shopcart.filter((x) => x.id !== id);
        setShopcart(shopcart);
        if (shopcart.length == 0) {
            setOpenCart(false);
            setBtnState(false);
        };
    }

    return (
        <div className="cart-item">
            <img src={search.img} alt="pic" />
            <div className="cart-info">
                <p className="cart-info-title">{search.product}</p>
                <div className="price">
                    <p>${search.price} x {item} = ${search.price * item}</p>
                </div>
            </div>
            <i className="bi bi-trash" onClick={() => deleteItem(id)}></i>
        </div>
    );
}

export default ShopcartItem;
