import { useState } from 'react';
import productDataList from '../../assets/data'
import TabButtons from '../TabButtons'
import TabContent from '../TabContent'
import '../css/EditMenuPage.css';
import EditMenuForm from '../EditMenuForm';
import EditMenuFormButton from '../EditMenuFormButton';

function EditMenuPage() {
    // console.log(productDataList)
    let [index, setIndex] = useState(1);
    let [formOpen, setFormOpen] = useState(false)
    let [switchForm, setSwitchForm] = useState(false)
    let [openSelect, setOpenSelect] = useState(false)

    let [nameInput, setNameInput] = useState('')
    let [priceInput, setPriceInput] = useState('')
    let [typeInput, setTypeInput] = useState('meat')
    let [imgInput, setImgInput] = useState(null)

    return (
        <div className="right-container form-layout">
            <TabButtons data={productDataList}
                setIndex={setIndex}
                setFormOpen={setFormOpen}
                setOpenSelect={setOpenSelect} />

            <TabContent productDataList={productDataList}
                index={index}
                setSwitchForm={setSwitchForm}
                setFormOpen={setFormOpen}
                setNameInput={setNameInput}
                setPriceInput={setPriceInput}
                setTypeInput={setTypeInput}
                setOpenSelect={setOpenSelect} />

            <EditMenuForm
                formOpen={formOpen}
                setFormOpen={setFormOpen}
                switchForm={switchForm}
                setSwitchForm={setSwitchForm}
                nameInput={nameInput}
                setNameInput={setNameInput}
                priceInput={priceInput}
                setPriceInput={setPriceInput}
                typeInput={typeInput}
                setTypeInput={setTypeInput}
                imgInput={imgInput}
                setImgInput={setImgInput}
                openSelect={openSelect}
                setOpenSelect={setOpenSelect} />

            <EditMenuFormButton setFormOpen={setFormOpen}
                setSwitchForm={setSwitchForm} />
        </div>
    );
}

export default EditMenuPage;