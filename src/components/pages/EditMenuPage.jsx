import { useState } from 'react';
import productDataList from '../../assets/data'
import TabButtons from '../TabButtons'
import TabContent from '../TabContent'
import '../css/EditMenuPage.css';
import OrderForm from '../OrderForm';
import OrderFormButton from '../OrderFormButton';

function EditMenuPage() {
    // console.log(productDataList)
    let [index, setIndex] = useState(1);
    let [id, setId] = useState(null);
    let [formOpen, setFormOpen] = useState(false)
    let [switchForm, setSwitchForm] = useState(false)

    return (
        <div className="right-container form-layout">
            <TabButtons data={productDataList}
                setIndex={setIndex} />

            <TabContent data={productDataList}
                index={index}
                setId={setId}
                setSwitchForm={setSwitchForm}
                switchForm={switchForm}
                setFormOpen={setFormOpen} />

            <OrderForm id={id}
                setId={setId}
                data={productDataList}
                formOpen={formOpen}
                setFormOpen={setFormOpen}
                switchForm={switchForm}
                setSwitchForm={setSwitchForm} />

            <OrderFormButton setFormOpen={setFormOpen}
                setSwitchForm={setSwitchForm} />
        </div>
    );
}

export default EditMenuPage;