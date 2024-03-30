import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeatPage from "./components/pages/SeatPage";
import EditMenuPage from "./components/pages/EditMenuPage";
import ReportPage from "./components/pages/ReportPage";
import OrderPage from "./components/pages/OrderPage";
import Navbar from "./components/Navbar";


function APP() {
  return (
    <div className="page-wrapper">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/edit" element={<Navbar />} />
        <Route path="/report" element={<Navbar />} />
        <Route path="/order/:num" element={<></>} />
      </Routes>
      <Routes>
        <Route path="/" element={<SeatPage />} />
        <Route path="/edit" element={<EditMenuPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/order/:num" element={<OrderPage />} />
      </Routes>
    </div>

  );
}

export default APP;
