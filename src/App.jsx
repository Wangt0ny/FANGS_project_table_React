import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeatPage from "./components/pages/SeatPage";
import EditMenuPage from "./components/pages/EditMenuPage";
import ReportPage from "./components/pages/ReportPage";
import OrderPage from "./components/pages/OrderPage";
import PayPage from "./components/pages/PayPage";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";


function APP() {
  let [onSeat, setOnSeat] = useState(JSON.parse(localStorage.getItem('seatState')) || [])

  useEffect(() => {
    localStorage.setItem('seatState', JSON.stringify(onSeat))
  }, [onSeat])


  return (
    <div className="page-wrapper">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/edit" element={<Navbar />} />
        <Route path="/report" element={<Navbar />} />
        <Route path="/order/:num" element={<></>} />
        <Route path="/pay/:num" element={<></>} />
      </Routes>
      <Routes>
        <Route path="/" element={<SeatPage onSeat={onSeat} setOnSeat={setOnSeat} />} />
        <Route path="/edit" element={<EditMenuPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/order/:num" element={<OrderPage />} />
        <Route path="/pay/:num" element={<PayPage onSeat={onSeat} setOnSeat={setOnSeat} />} />
      </Routes>
    </div>

  );
}

export default APP;
