import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import SignIn from "./Components/SignIn/SignIn";
import Components from "./Components/Index";
import Dashboard from "./Components/DashBoard/Dashboard";
import Home from "./Components/DashBoard/home";
import AdminSetting from "./Components/DashBoard/AdminPageSetting/MainPage";
import DeviceReader from "./Components/DashBoard/AdminPageSetting/AdminContant/DeviceManagement/DeviceReader";
import DeviceCommand from "./Components/DashBoard/AdminPageSetting/AdminContant/DeviceManagement/DeviceCommand";
import DeviceSetting from "./Components/DashBoard/AdminPageSetting/AdminContant/DeviceManagement/DeviceSetting";
import HostelAccount from "./Components/DashBoard/AdminPageSetting/AdminContant/HostelManagement/HostelAccount";
import UserSetting from "./Components/DashBoard/AdminPageSetting/AdminContant/HostelManagement/UserSetting";
import SMSFormat from "./Components/DashBoard/AdminPageSetting/AdminContant/HostelManagement/SMSFormat";
import SMSLogger from "./Components/DashBoard/AdminPageSetting/AdminContant/HostelManagement/SMSLogger";
import Warden from "./Components/DashBoard/AdminPageSetting/AdminContant/WardenStudentManagement/Warden";
import StudentGroup from "./Components/DashBoard/AdminPageSetting/AdminContant/WardenStudentManagement/StudentGroup";
import StudentList from "./Components/DashBoard/AdminPageSetting/AdminContant/WardenStudentManagement/StudentList";
import Trip from "./Components/DashBoard/AdminPageSetting/AdminContant/WardenStudentManagement/Trip";
import Birthday from "./Components/DashBoard/AdminPageSetting/AdminContant/WardenStudentManagement/Birthday";
import AddUpdateUser from "./Components/DashBoard/AdminPageSetting/AdminContant/HostelManagement/AddUpdateUser";
import UserRights from "./Components/DashBoard/AdminPageSetting/AdminContant/HostelManagement/UserRights";
import WardenAddUpdate from "./Components/DashBoard/AdminPageSetting/AdminContant/WardenStudentManagement/WardenAddUpdate";
import MainReportPage from "./Components/Reports/MainReportPage";
import Traveldesk from "./Components/DashBoard/Traveldesk";
import AddNewDevice from "./Components/DashBoard/AdminPageSetting/AdminContant/DeviceManagement/AddNewDevice";
import HostelSetting from "./Components/DashBoard/AdminPageSetting/AdminContant/HostelManagement/HostelSetting";
import Search from "./Components/DashBoard/Search";
import ReaderOnlineStatus from "./Components/ReaderOnlineStatus";
import { history } from "./Store";
import Modal from "./Components/DashBoard/Modal";

import PrintOut from "./Components/DashBoard/PrintOut";
import ProtectedRoute from "./ProtectedRoute";
import { Hidden } from "@mui/material";
import NewDialogHelper from "./Components/DashBoard/NewDialogHelper";

class Router extends React.Component {
  DATA;
  constructor(props) {
    super(props);
    this.state = {
      token: "",
    };
  }
  //event handlers

  //storing the name and email in local storage
  componentDidMount() {
    this.DATA = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      console.log("this is token", this.DATA.loginToken);
      this.setState({
        token: this.DATA.loginToken,
      });
    } else {
      this.setState({
        token: "",
      });
    }
  }

  render() {
    console.log("props in router", this.props);
    return (
      <>
        <BrowserRouter history={history}>
          {this.props.logintoken != null &&
            window.location.pathname !==
              `/Report/${this.props.reportChange}` && <Components />}
          <Routes>
            <Route path="/" element={<Navigate to="/SignIn" />} />
            <Route exact path="/Home" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="Component/DashBoard" element={<Dashboard />} />
            <Route path="Component/AdminSetting" element={<AdminSetting />} />
            <Route
              path="/Component/DashBoard"
              element={<Navigate to="/SignIn" />}
            />
            <Route
              path="Component/Admin/DeviceReader"
              element={<DeviceReader />}
            />
            <Route
              path="Component/Admin/DeviceCommand"
              element={<DeviceCommand />}
            />
            <Route
              path="Component/Admin/DeviceSetting"
              element={<DeviceSetting />}
            />
            <Route
              path="Component/Admin/HostelAccount"
              element={<HostelAccount />}
            />
            <Route
              path="Component/Admin/UserSetting"
              element={<UserSetting />}
            />
            <Route path="Component/Admin/SMSFormat" element={<SMSFormat />} />
            <Route path="Component/Admin/SMSLogger" element={<SMSLogger />} />
            <Route path="Component/Admin/Warden" element={<Warden />} />
            <Route
              path="Component/Admin/StudentGroup"
              element={<StudentGroup />}
            />
            <Route
              path="Component/Admin/StudentList"
              element={<StudentList />}
            />
            <Route path="Component/Admin/Forgot" element={<Trip />} />
            <Route path="Component/Admin/Birthday" element={<Birthday />} />
            <Route
              path="Component/Admin/AddUpdateUser"
              element={<AddUpdateUser />}
            />
            <Route path="Component/UserRights" element={<UserRights />} />
            <Route
              path="Component/warden/AddWarden"
              element={<WardenAddUpdate />}
            />
            <Route path="Component/Reports" element={<MainReportPage />} />
            <Route
              path="Component/Dashboard/Traveldesk"
              element={<Traveldesk />}
            />
            <Route path="Component/Dashboard/Search" element={<Search />} />
            <Route path="Component/AddNewDevice" element={<AddNewDevice />} />
            <Route
              path="Components/Admin/ReaderOnlineStatus"
              element={<ReaderOnlineStatus />}
            />
            <Route
              path="Component/Admin/HostelSetting"
              element={<HostelSetting />}
            />
            <Route path="Component/Dashboard/Modal" element={<Modal />} />

            <Route path="/PrintGatePass" element={<PrintOut />} />
            <Route component={ProtectedRoute} />
            <Route path="/Dummy" element={<NewDialogHelper />} />

          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = ({ AdminPageReducers, Report }) => {
  const { loginToken, logintoken } = AdminPageReducers;
  const { reportChange } = Report;

  return {
    loginToken,
    logintoken,
    reportChange,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
