import './css/product.css'

function Product(props) {
    let { id, img, price, product } = props.data;
    let shopcart = props.cartData; // array
    let setShopcart = props.editCart; // fn

    // console.log(setShopcart)
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

    return (
        <div className="col-12 col-lg-6">
            <div className="mycard">
                <img className="card-img" src={img} alt="project-pic" />
                <div className="mobile-mycard-body">
                    <div className="body-info">
                        <h4 className="card-title">{product}</h4>
                        <p className="card-text">${price}</p>
                    </div>
                    <div className="project-btn-group">
                        <i onClick={() => decrement(id)} className="bi bi-dash"></i>
                        <div id={id} className="project-count">{quantity(id)}</div>
                        <i onClick={() => increment(id)} className="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;