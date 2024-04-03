function OrderTabContent(props) {
    let { productDataList, index, setShopcart, shopcart } = props

    let meatType = productDataList.filter((x) => { return x.type === "meat" });
    let seafoodType = productDataList.filter((x) => { return x.type === "seafood" });
    let vegetableType = productDataList.filter((x) => { return x.type === "vegetable" });
    let dumplingsType = productDataList.filter((x) => { return x.type === "dumplings" });
    let hotpotType = productDataList.filter((x) => { return x.type === "hotpot" });

    let typeList = [hotpotType, meatType, seafoodType, vegetableType, dumplingsType]

    function increment(id) {
        // console.log(id)

        let search = shopcart.find((x) => { return x.id === id })

        if (search === undefined) {
            let newShopcart = [...shopcart]
            newShopcart.push({ id: id, item: 1, })
            setShopcart(newShopcart)
        }
        else {
            let newShopcart = [...shopcart]
            newShopcart.forEach(x => {
                return x.id === search.id ? x.item += 1 : x.item += 0;
            })
            setShopcart(newShopcart)
        }
    }

    function decrement(id) {
        let newShopcart = [...shopcart]

        let search = newShopcart.find((x) => { return x.id === id })

        if (search === undefined) {
            return;
        }
        else if (search.item === 0) {
            return;
        }
        else {
            newShopcart.forEach(x => {
                return x.id === search.id ? x.item -= 1 : x.item -= 0;
            })
        }
        newShopcart = newShopcart.filter((x) => x.item !== 0);

        setShopcart(newShopcart)
    }

    function quantity(id) {
        let search = shopcart.find(x => x.id === id)
        if (search) {
            return search.item
        } else {
            return 0
        }
    }


    function menu(inx) {
        return typeList[inx].map(item => {
            let { id, img, price, product } = item
            return (
                <div className="col-md-12" key={id}>
                    <div className="item">
                        <div className="mycard">
                            <img className="menu-img" src={img} alt="project-pic" />
                            <div className="mycard-body">
                                <div className="body-info">
                                    <h4 className="card-title">{product}</h4>
                                    <p className="card-text">${price}</p>
                                </div>
                                <div className="order-card-btn-group">
                                    <i onClick={() => decrement(id)} className="bi bi-dash"></i>
                                    <div id={id} className="item-count">{quantity(id)}</div>
                                    <i onClick={() => increment(id)} className="bi bi-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="tabcontent">
            <div className="row">
                {menu(index)}
            </div>
        </div>
    );
}

export default OrderTabContent;