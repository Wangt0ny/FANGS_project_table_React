function OrderShopcartItem(props) {

    let { search, item, id, shopcart, setShopcart } = props

    function deleteItem(id) {
        shopcart = shopcart.filter((x) => x.id !== id);
        setShopcart(shopcart);
    }

    return (
        <div className="cart-item">
            <img className="cart-item-img" src={search.img} alt="pic" />
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

export default OrderShopcartItem;