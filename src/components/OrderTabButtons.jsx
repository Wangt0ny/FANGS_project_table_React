function OrderTabButtons(props) {

    let { setIndex } = props

    let tabList = [
        {
            id: 1,
            type: '鍋類'
        },
        {
            id: 2,
            type: '肉類'
        },
        {
            id: 3,
            type: '海鮮類'
        },
        {
            id: 4,
            type: '蔬菜類'
        },
        {
            id: 5,
            type: '火鍋餃類'
        },
    ]

    function switchIndex(inx) {
        setIndex(inx)
    }

    function clearShopCart() {
        localStorage.setItem('cart', JSON.stringify([]))
    }

    return (
        <div className="order-tab">
            <a className="goback-button" href="/" onClick={clearShopCart}><i className="bi bi-arrow-left-short"></i></a>
            {tabList.map((item, index) => <button className="order-tablinks"
                onClick={() => { switchIndex(index) }}
                key={item.id}>{item.type}</button>)}
        </div>
    );
}

export default OrderTabButtons;