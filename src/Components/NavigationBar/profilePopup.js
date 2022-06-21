import React, { Component } from "react";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import avatar from "../../Assets/coloredAvatar.jpg";
import { Link } from "react-router-dom";
import { userLogout } from "../../Actions";
import { connect } from "react-redux";

class ProfilePopup extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      userName: "",
      phoneNumber: "",
      EmailId: "",
      profileImage: { avatar },
    };
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }


 handleLogout = () => {
 //  this.props.dispatch(userLogout());
  };

  //getting the name and email from local storage
  componentDidMount() {
    this.DATA = JSON.parse(localStorage.getItem("PersonalInfo"));
    if (localStorage.getItem("PersonalInfo")) {
      this.setState({
        userName: this.DATA.employee_name,
        phoneNumber: this.DATA.phone_num,
        EmailId: this.DATA.email_id,
        profileImage: this.DATA.image_name,
      });
    } else {
      this.setState({
        userName: "",
        phoneNumber: "",
        EmailId: "",
        profileImage: { avatar },
      });
    }
  }
  render() {
    return (
      <span className="d-inline-block">
        <img
          src={avatar}
          alt="profile"
          width={50}
          height={50}
          id={"Popover-" + this.props.id}
          onClick={this.toggle}
          style={{ borderRadius: "50%" }}
        ></img>

        <Popover
          className="row"
          style={{ inset: "127px 0px auto auto !important" }}
          placement={this.props.item.placement}
          isOpen={this.state.popoverOpen}
          target={"Popover-" + this.props.id}
          toggle={this.toggle}
        >
          <PopoverHeader style={{ backgroundColor: "#40a3e6" }}>
            Personal Information
          </PopoverHeader>
          <PopoverBody style={{ backgroundColor: "#9DCEEF" }}>
            <img
              src={avatar}
              alt="profile"
              width={60}
              height={60}
              id={"Popover-" + this.props.id}
              style={{ borderRadius: "50%", marginLeft: "90px" }}
            ></img>
            {/* <hr
              style={{
                margin: "auto 20px",
                border: " 3px solid rgb(150, 150, 150)",
              }}
            ></hr> */}
            <p className="ml-4 mt-2">
              <b style={{ color: "#D94013" }}>Name:</b>
              {this.state.userName}
            </p>
            <p className="ml-4 mt-2">
              <b style={{ color: "#D94013" }}>phone Number:</b>
              {this.state.phoneNumber}
            </p>
            <p className="ml-4 mt-2">
              <b style={{ color: "#D94013" }}>Email Id:</b>
              {this.state.EmailId}
            </p>

            <hr
              style={{
                margin: "auto 20px",
                border: " 3px solid rgb(150, 150, 150)",
              }}
            ></hr>
            <Link to="/Component/Admin/Forgot">
              <Button
                className="ml-4 mt-1"
                style={{
                  backgroundColor: "darkgoldenrod",
                }}
              >
                Change password
              </Button>
            </Link>
            <div>
            <Link to="/SignIn" onClick={
              ()=>{
                this.props.userLogout();
              }
            }>
              <Button className="ml-4 mt-3" style={{backgroundColor:"#D0490E"}}>
                  <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2" />
                  Logout
                  </Button>
                </Link>
                </div>
          </PopoverBody>
        </Popover>
      </span>
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
  userLogout
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePopup);

// class PopoversList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       popovers: [
//         {
//           placement: "bottom",
//           text: "Left",
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="manage-margin">
//         {this.state.popovers.map((popover, i) => {
//           return <ProfilePopup key={i} item={popover} id={i} />;
//         })}
//       </div>
//     );
//   }
// }
// export default PopoversList;