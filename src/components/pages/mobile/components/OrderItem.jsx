function OrderItem(props) {

    let { img, price, product, quantity } = props.data;

    return (
        <div className="cart-item">
            <img src={img} alt="pic" />
            <div className="cart-info">
                <p className="cart-info-title">{product}</p>
                <div className="price">
                    <p>${price} x {quantity} = {price * quantity}</p>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;