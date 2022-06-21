import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Typography } from "@mui/material";
import DateAndTime from "./DateAndTime";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PopoversList from "./PopoversList";

class TopNavigation2 extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userName: "",
  };

  //getting the name and email from local storage
  componentDidMount() {
    this.DATA = JSON.parse(localStorage.getItem("PersonalInfo"));
  //  console.log("dvddvfv", this.DATA.employee_name);
    if (localStorage.getItem("PersonalInfo")) {
      this.setState({
        userName: this.DATA.employee_name,
      });
    } else {
      this.setState({
        userName: "",
        email: "",
        profileImg: "",
      });
    }
  }

  render() {
    console.log("sdvsdvsdvdsvdsv",this.props.hostelNameSelected);
    return (
      <Navbar
        expand="lg"
        sticky="top"
        style={{
          backgroundColor: "black",
          position: "fixed",
          alignItems: "center",
          width: "100%",
          paddingBottom: "0.5px",
          paddingTop:"0.5px",
        }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="#navbarNav"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div >
          <Link to="/Home"
              style={{
                fontFamily: "times New Roman",
                fontWeight: "bolder",
                fontSize: "30px",
                color: "#E75276",
              }}
            >
             <p>iConnect...</p>
            </Link>
            </div>
            <Typography
              variant="h5"
              component="div"
              style={{
                marginLeft: "250px",
                fontWeight: "bolder",
                fontFamily: "times New Roman",
                color: "white",
                marginTop: "20px",
                position: "acsolute",
              }}
            >
              {(this.props.hostelNameSelected == null && <p>Syneins</p>) || (
                <p>{this.props.hostelNameSelected}</p>
              )}
            </Typography>
            <Typography
              component="div"
              style={{
                paddingLeft: "820px",
                fontFamily: "times New Roman",
                color: "white",
                position: "fixed",
              }}
            >
              <DateAndTime />
            </Typography>
            <Typography
              className=""
              style={{
                paddingLeft: "1050px",
                position: "fixed",
              }}
            >
              <PopoversList/>
            </Typography>
          </div>
        </div>
      </Navbar>
    );
  }
}
const mapStateToProps = ({ AdminPageReducers }) => {
  const { SelectedHostel, hostelList, hostelNameSelected } = AdminPageReducers;

  return {
    SelectedHostel,
    hostelList,
    hostelNameSelected,
  };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps,mapDispatchToProps)(TopNavigation2);
