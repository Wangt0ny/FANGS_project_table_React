import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SeatItem(props) {
    let { seatNum, Open, setOpen, onSeat, setOnSeat } = props
    let [openOption, setOpenOption] = useState(false);

    useEffect(() => {
        if (Open) {
            setOpenOption(false)
            setOpen(false)
        }
    }, [Open])

    function openSeat(e) {
        e.stopPropagation();
        console.log("seat");
        setOpenOption(!openOption);
    }

    function addSeat(num) {
        let search = onSeat.find(num => num === seatNum)
        if (search === undefined) {
            let newArray = [...onSeat]
            newArray.push(num)
            setOnSeat(newArray)
        } else {
            return
        }

    }

    function displaySeatState() {
        let search = onSeat.find(num => num === seatNum)
        return search ? <span className="text-danger">用餐中</span> : <span className="text-success">空桌</span>
    }

    return (
        <div className="seat-layout">
            <div className="seat" onClick={(e) => { openSeat(e) }}>
                <div className="seat-number">{seatNum}</div>
                <div className="seat-state">{displaySeatState()}</div>
            </div>
            <div className="seat-option-content" style={openOption ? { display: 'block' } : { display: 'none' }}>
                <Link className="seat-order-btn" to={`/order/${seatNum}`} >點餐/結帳</Link>
                <a className="seat-qrcode-btn" onClick={() => addSeat(seatNum)}><img src="" />生成QR code</a>
            </div>
        </div>
    );
}

export default SeatItem;