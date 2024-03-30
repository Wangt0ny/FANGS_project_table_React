import { useParams } from "react-router-dom";

function OrderPage() {
    let { num } = useParams();
    return (
        <>OrderPage{num}</>
    );
}

export default OrderPage;