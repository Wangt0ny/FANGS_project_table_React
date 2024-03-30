import { useState } from 'react';
import productDataList from '../../assets/data'
import TabButtons from '../TabButtons'
import TabContent from '../TabContent'
import '../css/EditMenuPage.css';

function EditMenuPage() {
    // console.log(productDataList)
    let [index, setIndex] = useState(0)
    return (
        <div className="right-container form-layout">
            <TabButtons data={productDataList} setIndex={setIndex} />
            <TabContent data={productDataList} index={index} />
        </div>
    );
}

export default EditMenuPage;