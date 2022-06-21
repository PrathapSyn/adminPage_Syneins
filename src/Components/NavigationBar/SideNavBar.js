import React from "react";
import "../../Styles/SideNav.css";
import { Link } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import TopNavigation2 from "./TopNavigation2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLogout } from "../../Actions";
import { ReaderStatus } from "../../Actions";
import { getDashBoard } from "../../Actions";
import {getTodayStatus} from "../../Actions";

export default function SideNavBar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
  };

  const handleStatus = () => {
    dispatch(ReaderStatus());
  };

// const handleDashboard=()=>{
//   dispatch(getDashBoard(HostelSelect));
//   dispatch(getTodayStatus(HostelSelect))
// }
  const HostelSelect = useSelector((state) => state.AdminPageReducers);

  console.log("loginAdminUser",HostelSelect.SelectedHostel);
  return (
    <>
 {HostelSelect.SelectedHostel != null && (
      <div className="row col-md-12">
        <div className="sidebar" >
          <Link className="" to="/">
            Welcome -- (User Name)
          </Link>
          <div className="mt-4">
            {/* <Link to="/Home">
              <i class="zmdi zmdi-home mr-3"></i>Home
            </Link> */}
              <div>
                <Link to="/Component/DashBoard"
               //  onClick={handleDashboard}
                 >
                  <i class="zmdi zmdi-laptop-mac mr-3"></i>GatePass 
                </Link>
                <Link to="/Component/DashBoard/Traveldesk">
                  <i class="zmdi zmdi-bike mr-3"></i>Travel Desk
                </Link>
                <Link
                  to="/Components/Admin/ReaderOnlineStatus"
                  onClick={handleStatus}
                >
                  <i class="zmdi zmdi-book mr-3"></i>Reader Status
                </Link>
                <Link to="/Component/AdminSetting">
                  <i class="zmdi zmdi-account-circle mr-3"></i>Admin Setting{" "}
                </Link>
                <Link to="/Component/DashBoard/Search">
                  <i class="zmdi zmdi-search mr-3"></i>Search
                </Link>
                <Link to="/Component/Reports">
                  <i class="zmdi zmdi-card-travel mr-3"></i>Reports
                </Link>
                {/* <Link to="/SignIn" onClick={handleLogout}>
                  <i className="zmdi zmdi-sign-in  mr-3" />
                  Logout
                </Link> */}
              </div>
           
          </div>
         
        </div>
      </div>
       )}
    </>
  );
}
