function PayOrderItem(props) {
    let { product, price, item } = props

    return (
        <div className="order-item">
            <img className="order-item-img" />
            <div className="order-info">
                <div className="order-info-title">{product}</div>
                <div> ${price} x {item} = ${price * item}</div>
            </div>
            <div className="order-item-quantity">{item}</div>
        </div>
    );
}

export default PayOrderItem;