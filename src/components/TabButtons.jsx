function TabButtons(props) {

    let setIndex = props.setIndex

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

    function switchIndex(num) {
        setIndex(num)
    }
    return (
        <div className="tab">
            {tabList.map((item, index) => <button className="tablinks"
                onClick={() => { switchIndex(index) }}
                key={item.id}>{item.type}</button>)}
        </div>
    );
}

export default TabButtons;