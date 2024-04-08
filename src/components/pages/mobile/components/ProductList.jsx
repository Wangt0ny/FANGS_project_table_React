import './css/productList.css'
import { useState } from "react";
import Product from "./Product";
import SentButton from "./SentButton";
import Shopcart from "./Shopcart";
import ShopcartButton from "./ShopcartButton";
import productDataList from '../assets/data';
import OrderPage from './OrderPage';

function ProductList(props) {

    let hotPotType = productDataList.filter((x) => { return x.type === "hotPot" });
    let meatType = productDataList.filter((x) => { return x.type === "meat" });
    let seafoodType = productDataList.filter((x) => { return x.type === "seafood" });
    let vegetableType = productDataList.filter((x) => { return x.type === "vegetable" });
    let dumplingsType = productDataList.filter((x) => { return x.type === "dumplings" });

    let openOrderPage = props.openOrderPage; //Boolean
    let setOrderPage = props.setOrderPage; //fn
    let [shopcart, setShopcart] = useState([]); // 購物車{ id: "hotPot01", item: 1 }, { id: "hotPot02", item: 1 }
    let [openCart, setOpenCart] = useState(false); // 開/關 購物車
    let [btnState, setBtnState] = useState(false); // false 開啟購物車 / true 送出訂單 
    // useEffect(() => console.log(shopcart), [shopcart])

    // 生成菜單
    function generateMenuCard(list) {
        return list.map(item => {
            return <Product key={item.id}
                data={item}
                cartData={shopcart}
                editCart={setShopcart} />
        })
    }

    return (
        <>
            <div className="container">

                <h1 id="hotPot" className="product-title">鍋類</h1>
                <div className="row">
                    {generateMenuCard(hotPotType)}
                </div>

                <h1 id="meat" className="product-title">肉類</h1>
                <div className="row">
                    {generateMenuCard(meatType)}
                </div>

                <h1 id="seafood" className="product-title">海鮮</h1>
                <div className="row">
                    {generateMenuCard(seafoodType)}
                </div>

                <h1 id="vegetable" className="product-title">蔬菜</h1>
                <div className="row">
                    {generateMenuCard(vegetableType)}
                </div>

                <h1 id="dumplings" className="product-title">火鍋餃</h1>
                <div className="row">
                    {generateMenuCard(dumplingsType)}
                </div>

            </div>
            <Shopcart data={productDataList}
                shopcart={shopcart}
                editShopcart={setShopcart}
                openCart={openCart}
                setOpenCart={setOpenCart}
                setBtnState={setBtnState} />

            <div className={(shopcart.length !== 0) ? "button-cotainer active" : "button-cotainer"}>
                <ShopcartButton btnState={btnState}
                    setBtnState={setBtnState}
                    setOpenCart={setOpenCart}
                    data={productDataList}
                    shopcart={shopcart} />

                <SentButton btnState={btnState}
                    setShopcart={setShopcart}
                    shopcart={shopcart}
                    setBtnState={setBtnState}
                    setOpenCart={setOpenCart} />
            </div>

            <OrderPage openOrderPage={openOrderPage}
                setOrderPage={setOrderPage} />
        </>


    );
}

export default ProductList;