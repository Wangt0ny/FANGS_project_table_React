import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeatPage from "./components/pages/SeatPage";
import EditMenuPage from "./components/pages/EditMenuPage";
import ReportPage from "./components/pages/ReportPage";
import Navbar from "./components/Navbar";


function APP() {
  return (
    <div className="page-wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SeatPage />} />
          <Route path="/edit" element={<EditMenuPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default APP;
