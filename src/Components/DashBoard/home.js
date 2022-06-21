import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { InputChange } from "../../Actions/AdminPageAction";
import { hostelListdisplay } from "../../Actions/AdminPageAction";
import { connect } from "react-redux";
import { hostelNameSelected } from "../../Actions";
import { reportChange } from "../../Actions/Report";
import NewFileJs from "./AdminPageSetting/NewFileJs";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.props.hostelListdisplay();
  }
  render() {
    console.log("thisis from Home ", this.props);
    return (
      <>
        <div class="content">
          <div className="ml-2" style={{ marginTop: "90px" }}>
            <div className="row">
              <div className="col-md-6">
                {/* <Card
            className="row ml-4 mr-1"
            style={{
              backgroundColor: "#008B8B",
              // width: "28rem",
              color:"whitesmoke",
            }}
          >
                 <div className="ml-5">
                    <h3 className="ml-5">Hostel</h3>
                    </div>
          </Card> */}
                <Card
                  className="shadow border-0 mb-5 pb-3 ml-4"
                  style={{
                    // width: "28rem",
                    alignItems: "center",
                  }}
                >
                  <button
                    id="hostel"
                    className="form-control "
                    style={{
                      // width: "23rem",
                      marginTop: "3px",
                      backgroundColor: "#008B8B",
                      // width: "28rem",
                      color: "#12E7E7",
                      fontFamily: "cursive",
                      fontWeight: "bolder",
                      fontSize: "20px",
                    }}
                    disabled
                  >
                    HOSTEL
                  </button>
                  {this.props.userDetails.user_level == "1" &&
                    this.props.hostelList.map((item) => (
                      <button
                        id="hostel"
                        className="form-control "
                        style={{
                          // width: "23rem",
                          marginTop: "3px",
                          backgroundColor: "#A6ACAF",
                          color: "white",
                        }}
                        name={item.hostel_name}
                        value={item.hostel_id}
                        onClick={(val) => {
                          window.sessionStorage.setItem("key",val.target.value);
                          window.sessionStorage.setItem("keyName",val.target.name);
                        window.location.reload();
                          this.props.hostelNameSelected(val.target.name);
                          // this.props.InputChange({
                          //   props: "SelectedHostel",
                          //   value: val.target.value,
                          //   error: "SelectedHostelError",
                          // });

                          this.props.reportChange({
                            props: "hostelId",
                            value: val.target.value,
                            error: "hostelIdError",
                          });
                        }}
                      >
                        {item.hostel_name}
                      </button>
                    ))}

                  {this.props.userDetails.user_level != "1" &&
                    this.props.hostelList.map((item) => (
                      <button
                        id="hostel"
                        className="form-control"
                        style={{
                          marginTop: "3px",
                          color: "black",
                          backgroundColor:
                            item.hostel_id ==
                              this.props.userDetails.hostel_type && "#D98880",
                          //color:"white",
                        }}
                        name={item.hostel_name}
                        value={item.hostel_id}
                        onClick={(val) => {
                          this.props.hostelNameSelected(val.target.name);
                          this.props.InputChange({
                            props: "SelectedHostel",
                            value: val.target.value,
                            error: "SelectedHostelError",
                          });

                          this.props.reportChange({
                            props: "hostelId",
                            value: val.target.value,
                            error: "hostelIdError",
                          });
                        }}
                        disabled={
                          item.hostel_id != this.props.userDetails.hostel_type
                        }
                      >
                        {item.hostel_name}
                      </button>
                    ))}
                </Card>
              </div>
              <div className="col-md-6">
                {/* <Card> */}

                <h style={{ fontSize: "15px" }}>
                  <b>Hostel</b>
                </h>

                <ul>
                  <li style={{ fontSize: "12px" }}>Engineering Colleges</li>
                  <li style={{ fontSize: "12px" }}>
                    information and management Studies
                  </li>
                  <li style={{ fontSize: "12px" }}>
                    Arts and Science Colleges
                  </li>
                  <li style={{ fontSize: "12px" }}>Dental Colleges</li>
                  <li style={{ fontSize: "12px" }}>College of pharmacy</li>
                  <li style={{ fontSize: "12px" }}>College of Education</li>
                  <li style={{ fontSize: "12px" }}>
                    Girls Higher Secondary School
                  </li>
                  <li style={{ fontSize: "12px" }}>
                    Vivekanandha Medical Care Hospital
                  </li>
                </ul>
                <h style={{ fontSize: "15px" }}>
                  <b>Hostel Facilities</b>
                </h>

                <ul>
                  <li style={{ fontSize: "12px" }}>
                    Common room with television and reading rooms
                  </li>
                  <li style={{ fontSize: "12px" }}>
                    Indoor games like chess and table tennis
                  </li>
                  <li style={{ fontSize: "12px" }}>Dry cleaning facilities</li>
                  <li style={{ fontSize: "12px" }}>
                    Uninterrupted power supply
                  </li>
                  <li style={{ fontSize: "12px" }}>Telephone facilities</li>
                  <li style={{ fontSize: "12px" }}>
                    The mess attached to the hostel is comparable to any of the
                    international hostel provided with modern equipments like
                    Dish Washer, cold, Washer , cold room, Bain Marie
                    system,Steam Boiler etc
                  </li>
                </ul>
                <h style={{ fontSize: "15px" }}>
                  <b>Admissions</b>
                </h>

                <ul>
                  <b style={{ fontSize: "12px" }}>For Admissions contact</b>
                  <p style={{ fontSize: "12px" }}>
                    Vivekanandha Educational Institutions Elayampalayam-637 205,
                    Tiruchengode, Namakkal -District,Tamilnadu Ph:04288-234670,
                    Fax:04288-234894, 234891
                    <p style={{ color: "red" }}>www.vivekanandha.ac.in</p>
                  </p>
                </ul>
                {/* </Card> */}
         
                <NewFileJs/> 
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ AdminPageReducers }) => {
  const { SelectedHostel, hostelList, userDetails,hostelNameSelected } = AdminPageReducers;

  return {
    SelectedHostel,
    hostelList,
    userDetails,
  };
};
const mapDispatchToProps = {
  InputChange,
  hostelListdisplay,
  hostelNameSelected,
  reportChange,
};
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
