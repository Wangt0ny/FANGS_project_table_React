import { useParams } from "react-router-dom";
import '../css/OrderPage.css'
import productDataList from '../../assets/data'
import { useState } from "react";
import OrderTabButtons from "../OrderTabButtons";
import OrderTabContent from "../OrderTabContent";
import OrderShopcart from "../OrderShopcart";
import OrderListSection from "../OrderListSection";


function OrderPage() {
    let { num } = useParams();
    let [index, setIndex] = useState(1);
    let [shopcart, setShopcart] = useState([]); // 購物車{ id: "hotPot01", item: 1 }, { id: "hotPot02", item: 1 }
    let [orderList, setOrderList] = useState([]);

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

            <OrderListSection />
        </>
    );
}

export default OrderPage;