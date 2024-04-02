import { useParams } from "react-router-dom";
import '../css/OrderPage.css'
import { useState } from "react";
import OrderTabButtons from "../OrderTabButtons";
import OrderTabContent from "../OrderTabContent";


function OrderPage() {
    let { num } = useParams();
    let [index, setIndex] = useState(1);


    return (
        <>
            <div className="form-layout">
                <OrderTabButtons setIndex={setIndex} />
                <OrderTabContent />
            </div>

            <div className="cart-page">
                <div className="table-number-content">
                    桌號{num}
                </div>
                <div className="cart-content">
                    <div className="cart-title">購物車</div>
                    <div className="cart-list" id="cart-list">
                        {/* 自動生成 */}
                    </div>
                    <div id="cart-btn-content">
                        <div className="cart-btn-group">
                            <div className="cart-btn">送出
                                <span className="cart-quantity">1</span>訂單
                            </div>
                            <div className="cart-btn" id="not-sent">送出
                                <span className="cart-quantity">1</span>訂單<span>(不出單)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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