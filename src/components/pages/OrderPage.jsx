import { useParams } from "react-router-dom";
import '../../assets/css/OrderPage.css'
import productDataList from '../../assets/data'
import { useEffect, useState } from "react";
import OrderTabButtons from "../OrderTabButtons";
import OrderTabContent from "../OrderTabContent";
import OrderShopcart from "../OrderShopcart";
import OrderListSection from "../OrderListSection";


function OrderPage() {
    let { num } = useParams();
    let [index, setIndex] = useState(1);
    let [shopcart, setShopcart] = useState(JSON.parse(localStorage.getItem('cart')) || []); // 購物車{ id: "hotPot01", item: 1 }, { id: "hotPot02", item: 1 }
    let [orderList, setOrderList] = useState([]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(shopcart))
    }, [shopcart])

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
                orderList={orderList}
                setOrderList={setOrderList}
            />

            <OrderListSection productDataList={productDataList}
                orderList={orderList}
                setOrderList={setOrderList}
                num={num}
            />
        </>
    );
}

export default OrderPage;