function OrderItem(props) {
    let { id, item, setOrderList, productDataList, orderList } = props

    let search = productDataList.find(item => item.id === id)

    function deleteOrderItem(id) {
        let newList = orderList.filter(item => item.id !== id)
        setOrderList(newList)
    }

    return (
        <div className="order-item">
            <div className="order-info">
                <p className="order-info-title">{search.product}</p>
                <div className="order-info-price">{search.price}</div>
            </div>
            <div className="order-info-quantity"><span>{item}</span></div>
            <i className="bi bi-trash" onClick={() => { deleteOrderItem(id) }}></i>
        </div>
    );
}

export default OrderItem;