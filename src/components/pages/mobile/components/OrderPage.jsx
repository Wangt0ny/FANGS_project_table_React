import './css/orderpage.css';
import { useState } from 'react';
import image from '../assets/product/product01.webp'
import OrderItem from './OrderItem';

function OrderPage(props) {

    let [orderData, setOrderData] = useState([
        {
            id: "hotPot01",
            img: image,
            price: 159,
            product: "蔬菜鍋物",
            quantity: 2,
        },
        {
            id: "hotPot02",
            img: image,
            price: 200,
            product: "海鮮鍋物",
            quantity: 3,
        }
    ])

    let openOrderPage = props.openOrderPage; //Boolean
    let setOrderPage = props.setOrderPage; //fn

    function colseOrderPage() {
        setOrderPage(false);
    }

    return (
        <div className={openOrderPage ? "mobile-order-page active" : "mobile-order-page"}>
            <i className="bi bi-x-lg mb-close-order-page" onClick={colseOrderPage}></i>
            <div className="mobile-cart">訂單紀錄</div>
            <div className="shopping-cart">
                {orderData.map(item => <OrderItem key={item.id} data={item} />)}
            </div>

            <div className="order-price-content">
                <div className="mobile-order-price-info">訂單金額:<span></span></div>
                <div className="mobile-order-price-info">服務費:<span></span></div>
                <div className="mobile-order-price-info">總金額:<span></span></div>
            </div>
        </div>
    );
}

export default OrderPage;