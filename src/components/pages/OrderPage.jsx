import { useParams } from "react-router-dom";
import '../css/OrderPage.css'
import productDataList from '../../assets/data'
import { useState } from "react";
import OrderTabButtons from "../OrderTabButtons";
import OrderTabContent from "../OrderTabContent";
import OrderShopcart from "../OrderShopcart";


function OrderPage() {
    let { num } = useParams();
    let [index, setIndex] = useState(1);
    let [shopcart, setShopcart] = useState([]); // 購物車{ id: "hotPot01", item: 1 }, { id: "hotPot02", item: 1 }

    return (
        <>
            <div className="form-layout">
                <OrderTabButtons setIndex={setIndex} />
                <OrderTabContent index={index}
                    productDataList={productDataList}
                    shopcart={shopcart}
                    setShopcart={setShopcart} />
            </div>

            <OrderShopcart num={num}
                productDataList={productDataList}
                shopcart={shopcart}
                setShopcart={setShopcart}
            />

            <div className="order-page" id="order-page">
                <div className="order-title">訂單紀錄</div>
                <div className="order-list" id="order-list">

                </div>
                <div id="order-to-pay-content">
                    <a href="#" id="order-to-pay">前往結帳<i className="bi bi-arrow-right-short"></i></a>
                </div>
            </div>
        </>
    );
}

export default OrderPage;