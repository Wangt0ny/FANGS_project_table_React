import OrderShopcartItem from './OrderShopcartItem'

function OrderShopcart(props) {
    let { num, productDataList, shopcart, setShopcart } = props

    function shopcartItem() {
        if (shopcart.length !== 0) {
            return shopcart.map((x) => {
                let { id, item } = x;

                let search = productDataList.find((y) => y.id === id) || [];

                return <OrderShopcartItem key={id}
                    item={item}
                    search={search}
                    id={id}
                    setShopcart={setShopcart}
                    shopcart={shopcart} />

            })
        } else {
            return <div className="no-item"><h4>購物車是空的唷</h4></div>;
        }
    }

    function getTotalItem() {
        return shopcart.map((x) => x.item).reduce((x, y) => x + y, 0);
    }

    function deleteShopcart() {
        setShopcart([])
    }

    return (
        <div className="cart-page">
            <div className="table-number-content">
                桌號 {num}
            </div>
            <div className="cart-content">
                <div className="cart-title">購物車</div>
                <div className="cart-list">
                    {shopcartItem()}
                </div>
                <div id="cart-btn-content">
                    <div className="cart-btn-group">
                        <div className="cart-btn">送出
                            <span className="cart-quantity">{getTotalItem()}</span>訂單
                        </div>
                        <div className="cart-btn" onClick={deleteShopcart}>
                            清空購物車
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderShopcart;