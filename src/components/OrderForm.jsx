import { useEffect, useRef, useState } from 'react';
import './css/OrderForm.css'

function OrderForm(props) {
    let productDataList = props.data;
    let id = props.id
    let setId = props.setId
    let setFormOpen = props.setFormOpen
    let formOpen = props.formOpen
    let switchForm = props.switchForm
    let setSwitchForm = props.setSwitchForm

    let search = productDataList.find(item => item.id === id);

    function foo() {
        if (search) {
            let optValueList = [...selectCurrent.getElementsByTagName('select')[0].options].map(opt => opt.value)
            let currentIndex = optValueList.indexOf(search.type)
            console.log(currentIndex)
            return currentIndex
        }
    }

    let [nameInput, setNameInput] = useState('')
    let [priceInput, setPriceInput] = useState('')
    let [typeInput, setTypeInput] = useState('meat')
    let [imgInput, setImgInput] = useState(null)
    let [openSelect, setOpenSelect] = useState(false)
    let [selected, setSelected] = useState(0)

    const selectType = useRef();
    const selectCurrent = selectType.current;

    function handleselected(val) {
        setTypeInput(val)
        setOpenSelect(false)
    }
    // useEffect(() => { if (selectCurrent !== undefined) { selectCurrent.getElementsByTagName('select')[0].selectedIndex = selected } }, [selected])

    function getOptions() {
        if (selectCurrent !== undefined) {
            return [...selectCurrent.getElementsByTagName('select')[0].options].map((item, index) => {
                return <div key={item.innerHTML} onClick={() => handleselected(item.value)}>{item.innerHTML}</div>
            })
        } else {
            return []
        }
    }

    function getSelected() {
        if (selectCurrent !== undefined) {
            let optValue = [...selectCurrent.getElementsByTagName('select')[0].options].map(opt => opt.value)
            return [...selectCurrent.getElementsByTagName('select')[0].options][optValue.indexOf(typeInput)].innerHTML
        }
    }
    console.log(getSelected())

    function handleName(e) {
        setNameInput(e.target.value)
    }

    function handlePrice(e) {
        setPriceInput(e.target.value)
    }

    function handleType(e) {
        setTypeInput(e.target.value)
    }

    function handleFile(e) {
        setImgInput(e.target.files[0])
    }

    function handleCancel() {
        setFormOpen(false)
        setNameInput('')
        setPriceInput('')
        setImgInput('')
        setSelected(0)
        setSwitchForm(false)
        setId(null)
    }

    return (
        <div className={formOpen ? 'form-page active' : 'form-page'}>
            <div className="form-title">{switchForm ? '更改' : '新增'}</div>
            <form className="form-option">

                <div className="item-input">
                    <label htmlFor="item-name">品項: </label>
                    <input type="text"
                        id="item-name"
                        name="item-name"
                        value={switchForm ? search.product : nameInput}
                        onChange={(e) => handleName(e)}
                        required />
                </div>

                <div className="item-input">
                    <label htmlFor="item-price">金額: </label>
                    <input type="text"
                        id="item-price"
                        name="item-price"
                        value={switchForm ? search.price : priceInput}
                        onChange={(e) => handlePrice(e)}
                        required />
                </div>

                <div className="custom-select" ref={selectType}>
                    <select name="select-type" value={typeInput} onChange={handleType}>
                        {/* <option value="0">種類</option> */}
                        <option value="meat">肉類</option>
                        <option value="seafood">海鮮類</option>
                        <option value="vegetable">蔬菜類</option>
                        <option value="dumplings">火鍋餃類</option>
                    </select>
                    <div className={openSelect ? 'select-selected select-arrow-active' : 'select-selected'}
                        onClick={() => setOpenSelect(!openSelect)}>{getSelected()}</div>
                    <div className={openSelect ? 'select-items' : 'select-items select-hide'} >
                        {getOptions()}
                    </div>
                </div>

                <label htmlFor="item-img" className="upload-item-img"><i className="bi bi-file-earmark-image"></i>選擇商品圖片</label>
                <input type="file" name="item-img" id="item-img" accept=".jpg, .png" onChange={handleFile} />

                <div id="file-name">{imgInput ? imgInput.name : '未選擇任何檔案'}</div>
                <img id="file-img" src={imgInput ? URL.createObjectURL(imgInput) : ''}></img>

                <div className="form-btn-group">
                    <button id="form-submit-btn" type="submit" className="form-btn">確定</button>
                    <button id="form-cancel-btn" type="reset" className="form-btn" onClick={handleCancel}>取消</button>
                </div>
            </form>
        </div>
    )
}

export default OrderForm;