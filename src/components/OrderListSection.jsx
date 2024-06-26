import OrderItem from "./OrderItem";

function OrderListSection(props) {
    let { orderList, setOrderList, productDataList, num } = props

    return (
        <div className="order-page">
            <div className="order-title">訂單紀錄</div>
            <div className="order-page-list">
                {orderList.map(items => {
                    let { id, item } = items
                    return <OrderItem
                        key={id}
                        id={id}
                        item={item}
                        setOrderList={setOrderList}
                        productDataList={productDataList}
                        orderList={orderList} />
                })}
            </div>
            <div className={(orderList.length !== 0) ? "order-to-pay-content active" : "order-to-pay-content"}>
                <a href={`/pay/${num}`} className="order-to-pay">前往結帳<i className="bi bi-arrow-right-short"></i></a>
            </div>
        </div>
    );
}

export default OrderListSection;