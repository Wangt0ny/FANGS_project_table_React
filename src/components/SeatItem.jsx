import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SeatItem(props) {
    let { seatNum, Open, setOpen, onSeat, setOnSeat } = props
    let [openOption, setOpenOption] = useState(false);
    let [qrcode, setQrcode] = useState('')

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

    useEffect(addToLocal, [qrcode])

    function addSeat() {
        let search = onSeat.find(x => x.num === seatNum)
        if (search === undefined) {
            setQrcode('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/QR_code_of_Chinese_Wikipedia_main_page_20131019.svg/800px-QR_code_of_Chinese_Wikipedia_main_page_20131019.svg.png')
        } else {
            return
        }
    }

    function addToLocal() {
        if (qrcode !== '') {
            let search = onSeat.find(x => x.num === seatNum)
            if (search === undefined) {
                let newArray = [...onSeat]
                newArray.push({ num: seatNum, url: qrcode })
                setOnSeat(newArray)
            } else {
                return
            }
        } else {
            return
        }

    }

    function displaySeatState() {
        let search = onSeat.find(x => x.num === seatNum)
        return search ? <span className="text-danger">用餐中</span> : <span className="text-success">空桌</span>
    }

    function displayOrderButton() {
        let search = onSeat.find(x => x.num === seatNum)
        return search ? <Link className="seat-order-btn" to={`/order/${seatNum}`} >點餐/結帳</Link> : <></>
    }

    function displayQRcodeImage() {
        let search = onSeat.find(x => x.num === seatNum)
        return search ? <img className="qr-img" src={search.url} /> : '生成QR code'
    }

    return (
        <div className="seat-layout">
            <div className="seat" onClick={(e) => { openSeat(e) }}>
                <div className="seat-number">{seatNum}</div>
                <div className="seat-state">{displaySeatState()}</div>
            </div>
            <div className={openOption ? "seat-option-content active" : "seat-option-content"} >
                {displayOrderButton()}
                <a className="seat-qrcode-btn" onClick={() => addSeat(seatNum)}>{displayQRcodeImage()}</a>
            </div>
        </div>
    );
}

export default SeatItem;