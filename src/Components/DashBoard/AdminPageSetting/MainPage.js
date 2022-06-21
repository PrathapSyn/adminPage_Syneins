import React,{Component} from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import AdminImage from "../../../Assets/Admin.jpg";
import Reader from "../../../Assets/reader.png";
import Command from "../../../Assets/Command1.jpg";
import Setting from "../../../Assets/Setting.png";
import Account from "../../../Assets/Account.png";
import User from "../../../Assets/User.png";
import SmsFormat from "../../../Assets/SMSFORMAT.jpg";
import SMSLogger from "../../../Assets/smsLogger.png";
import Warden from "../../../Assets/warden.jpg";
import StudentGroup from "../../../Assets/group.png";
import StudentList from "../../../Assets/Student1.jpg";
import Trip from "../../../Assets/trip.png";
import Birthday from "../../../Assets/bday.png";
import Forgot from "../../../Assets/forgot1.png";
import {getDeviceSetting} from "../../../Actions";
import {getStudentList} from "../../../Actions"
import {messageSetting} from "../../../Actions"
import {getWardenList} from "../../../Actions";
import {getUserSetting} from "../../../Actions";
import {getDevicesList} from "../../../Actions";
import {getStudentGroupList} from "../../../Actions";
import {commandStatus} from "../../../Actions";

import { connect } from "react-redux";

class MainPage extends Component {

  constructor(props){
    super(props);
    this.props.commandStatus();
  }
  handleSetting=(e)=>{
  //this.props.messageSetting();
  }
  handleStudent=(e)=>{
    this.props.getStudentList(this.props);
  }

  handleWarden=(e)=>{
    this.props.getWardenList(this.props);
  }

  handleUser=(e)=>{
    this.props.getUserSetting(this.props)
  }

  handleDevices=(e)=>{
    this.props.getDevicesList();
  }

  handleStudentGroup=(e)=>{
    this.props.getStudentGroupList(this.props);
  }
  handleDeviceSetting=(e)=>{
    this.props.getDeviceSetting(this.props);
  }


  render(){
  return (
    <div class="content">
      <div className="ml-3" style={{ marginTop: "90px" }}>
        <Card>
        <div
          className="ml-4"
          style={{
            color: "#CB7C24",
            fontWeight: "bolder",
            fontFamily: "fantasy",
            fontSize: "20px",
          }}
        >
          <img
            src={AdminImage}
            alt="Admin"
            width={50}
            style={{ paddingRight: "10px" }}
          />
          ADMINISTRATION
        </div>
        <hr
          style={{
            margin: "auto 20px",
            border: " 3px solid rgb(150, 150, 150)",
          }}
        ></hr>
        {this.props.userDetails.user_level == "1"  &&   
        <div className="row" style={{ padding: "20px" }}>
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/DeviceReader">
              {" "}
              <img src={Reader} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
              Device Reader{" "}
            </p>
          </div>
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/DeviceCommand" onClick={this.handleDevices()}>
              {" "}
              <img src={Command} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
              Device Command{" "}
            </p>
          </div>
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/DeviceSetting" onClick={this.handleDeviceSetting()}>
              <img src={Setting} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
              Device Setting{" "}
            </p>
          </div>
        </div>
  }
        <hr
          style={{
            margin: "auto 5px",
            border: " 2px solid rgb(150, 150, 150)",
          }}
        ></hr>


     {/* this is for Account/hostel Setting */}

<div className="row" style={{ padding: "20px" }}>

{this.props.userDetails.user_level  == "1"  &&   
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/HostelAccount">
              {" "}
              <img src={Account} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
            Hostel Setting{" "}
            </p>
          </div>
  }
  
{this.props.userDetails.user_level  == "1"  &&   
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/UserSetting" onClick={this.handleUser()}>
              {" "}
              <img src={User} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
             User Manage{" "}
            </p>
          </div>
  }
          {this.props.userDetails.user_level  == "1"  &&   
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/SMSFormat" onClick={this.handleSetting()} >
              <img    src={SmsFormat} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
            SMS Message Format{" "}
            </p>
          </div>
  }
     {this.props.userDetails.user_level  == "1"  &&   
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/SMSLogger">
              <img src={SMSLogger} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
           SMS Logger{" "}
            </p>
          </div>
  }
        </div>

        <hr
          style={{
            margin: "auto 10px",
            border: " 2px solid rgb(150, 150, 150)",
          }}
        ></hr>



        
     {/* this is for Warden and Student  */}

<div className="row" style={{ padding: "20px" }}>
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/Warden" onClick={this.handleWarden()}>
              {" "}
              <img src={Warden} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
           Warden{" "}
            </p>
          </div>
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/StudentGroup" onClick={this.handleStudentGroup()}>
              {" "}
              <img src={StudentGroup} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
            Student Group{" "}
            </p>
          </div>
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/StudentList" onClick={this.handleStudent()}>
              <img src={StudentList} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
            Student List{" "}
            </p>
          </div>
          <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/Birthday">
              <img src={Birthday} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily: "cursive" }}>
              {" "}
          Birthday Wish{" "}
            </p>
          </div>
          {/* <div className="ml-4 mt-1" style={{ paddingRight: "40px" }}>
            <Link to="/Component/Admin/Forgot">
              <img src={Forgot} alt="reader" width={50} />
            </Link>
            <p className=" mt-2" style={{ fontFamily:"cursive"}}>
              {" "}
           Change password{" "}
            </p>
          </div> */}
        </div>

        <hr
          style={{
            margin: "auto 5px",
            border: " 2px solid rgb(150, 150, 150)",
          }}
        ></hr>

</Card>
      </div>
    </div>
  );
}
}
const mapStateToProps = ({AdminPageReducers }) => {
  const {SelectedHostel,
    hostelList,
    userLevel,
    userDetails
  } =AdminPageReducers

  return{
    SelectedHostel,
    hostelList,
    userLevel,
    userDetails
  }

}
const mapDispatchToProps = {
 getStudentList,
 messageSetting,
 getWardenList,
 getUserSetting,
 getDevicesList,
 getStudentGroupList,
 commandStatus,
 getDeviceSetting,
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
