import { useParams } from "react-router-dom";
import '../css/PayPage.css'
import PayOrderItem from "../PayOrderItem";

function PayPage(props) {
    let { onSeat, setOnSeat } = props
    let { num } = useParams()

    let items = [
        {
            product: '梅花豬肉',
            price: 267,
            item: 2
        },
        {
            product: '蛤蠣',
            price: 150,
            item: 1
        },
        {
            product: '牛肉片',
            price: 350,
            item: 2
        },
    ]

    function generatePayOrderItems() {
        if (items.length !== 0) {
            return items.map(items => {
                let { product, price, item } = items
                return < PayOrderItem
                    key={product}
                    product={product}
                    price={price}
                    item={item} />
            })
        }
    }

    function getOrderPrice() {
        return items.map((x) => x.price).reduce((x, y) => x + y, 0);
    }

    function getOrderFee() {
        return Math.round(getOrderPrice() * 10 / 100)
    }

    function getOrderTotal() {
        return (getOrderPrice() + getOrderFee())
    }

    function clearTable(number) {
        console.log(number)
        let newArray = [...onSeat]
        newArray = newArray.filter(x => x != number)
        setOnSeat(newArray)
        location.href = '/'
    }

    return (
        <>
            <div className="pay-order-content">
                <div className="goback-content">
                    <a href={`/order/${num}`}><i className="bi bi-arrow-left-short"></i></a>
                    <div>桌號 {num}</div>
                </div>

                <div className="order-content">
                    <div className="order-title">訂單</div>
                    <div className="order-list">
                        {generatePayOrderItems()}
                    </div>
                    <div className="order-price-info">
                        <div className="order-price-title">訂單金額:
                            <span id="order-price">{getOrderPrice()}</span>
                        </div>
                        <div className="order-price-title">10%服務費:
                            <span id="service-fee">{getOrderFee()}</span>
                        </div>
                        <div className="order-price-title">總金額:
                            <span id="order-total">{getOrderTotal()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pay-page">
                <div className="pay-title">付款方式</div>
                <div className="pay-button" onClick={() => clearTable(num)}>
                    <i className="bi bi-coin"></i>現金支付
                </div>
                <div className="pay-button">
                    <i className="bi bi-credit-card"></i>信用卡支付
                </div>
            </div>
        </>
    );
}

export default PayPage;