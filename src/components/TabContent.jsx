function TabContent(props) {
    let productDataList = props.data
    let index = props.index
    let setId = props.setId
    let setSwitchForm = props.setSwitchForm
    let setFormOpen = props.setFormOpen

    let meatType = productDataList.filter((x) => { return x.type === "meat" });
    let seafoodType = productDataList.filter((x) => { return x.type === "seafood" });
    let vegetableType = productDataList.filter((x) => { return x.type === "vegetable" });
    let dumplingsType = productDataList.filter((x) => { return x.type === "dumplings" });
    let hotpotType = productDataList.filter((x) => { return x.type === "hotpot" });

    let typeList = [hotpotType, meatType, seafoodType, vegetableType, dumplingsType]

    function editForm(id) {
        setId(id);
        setSwitchForm(true);
        setFormOpen(true);
    }

    return (
        <div className="tabcontent">
            <div className="row">
                {typeList[index].map(item => {
                    let { id, img, price, product } = item
                    return (
                        <div className="col-md-6" key={id}>
                            <div className="item">
                                <div className="mycard">
                                    <img className="menu-img" src={img} alt="project-pic" />
                                    <div className="mycard-body">
                                        <div className="body-info">
                                            <h4 className="card-title">{product}</h4>
                                            <p className="card-text">${price}</p>
                                        </div>
                                        <div className="card-btn-group">
                                            <i className="bi bi-pencil" onClick={() => editForm(id)}></i>
                                            <i className="bi bi-trash"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default TabContent;