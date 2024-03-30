import seatList from '../../assets/seatList'
import SeatItem from '../SeatItem'
import '../css/seatPage.css'
import { useState } from "react";

function SeatPage() {
    let [Open, setOpen] = useState(false);

    function closeOption(e) {
        setOpen(true)
        console.log("seat-container")
    }

    function mapSeat() {
        return seatList.map(seat => <SeatItem
            key={seat.num}
            seatNum={seat.num}
            Open={Open}
            setOpen={setOpen} />)
    }

    return (
        <>
            <div className="seat-container" onClick={(e) => closeOption(e)}>
                {mapSeat()}
            </div>
        </>

    );
}

export default SeatPage;