import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import StudentInformation from "./Components/Reports/ReportComponents/StudentInformation";
import StudentGroupReport from "./Components/Reports/ReportComponents/StudentGroup";
import StudentTripReport from "./Components/Reports/ReportComponents/StudentTrip";
import StudentTripIdReport from "./Components/Reports/ReportComponents/TripReport";
import SMSPendingReport from "./Components/Reports/ReportComponents/SMSpending";
import DatewiseEntryReport from "./Components/Reports/ReportComponents/DatawiseEntry";
import DatewiseExitReport from "./Components/Reports/ReportComponents/DatawiseExit";
import StudentAbsentReport from "./Components/Reports/ReportComponents/StudentAbsent";
import StudentPresentReport from "./Components/Reports/ReportComponents/StudentPresent";
import RFIDCardReport from "./Components/Reports/ReportComponents/RFIDCard";
import SystemEventsReport from "./Components/Reports/ReportComponents/SystemReport";
const ProtectedRoute = () => {

  return (
    <BrowserRouter>    
                  
        <Routes>
          <Route exact path="/Report/1" element={<StudentInformation />} />
          <Route exact path="/Report/2" element={<StudentGroupReport />} />
          <Route exact path="/Report/3" element={<StudentTripReport />} />
          <Route exact path="/Report/4" element={<StudentTripIdReport />} />
          <Route exact path="/Report/5" element={<SMSPendingReport />} />
          <Route exact path="/Report/6" element={<DatewiseEntryReport />} />
          <Route exact path="/Report/7" element={<DatewiseExitReport />} />
          <Route exact path="/Report/8" element={<StudentAbsentReport />} />
          <Route exact path="/Report/9" element={<StudentPresentReport />} />
          <Route exact path="/Report/10" element={<RFIDCardReport />} />
          <Route exact path="/Report/11" element={<SystemEventsReport />} />
          </Routes>
      </BrowserRouter>
  );
};
export default ProtectedRoute;
