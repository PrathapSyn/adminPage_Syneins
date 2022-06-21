import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {HostelActionDetails} from "../../../../../Actions/demo"
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class HostelSetting extends Component {
  constructor(props) {
    super(props);
  }
  handleUpdate=()=>{
  this.props.hostelValidation(this.props);
  // const user = {
  //     hostelName:this.props.hostelName,
  //     hostelCode:this.props.hostelCode,
  //     contactName:this.props.contactName,
  //     contactNumber:this.props.contactNumber,
  //     contactEmail:this.props.email,
  //     maxDevices:this.props.maxDevices,
  //   };
  }
  render() {
    return (
      <>
        <div class="content">
              <div className="ml-3" style={{ marginTop: "90px" }}>
                <div
                  className="ml-4"
                  style={{
                    color: "#CB7C24",
                    fontWeight: "revert",
                    fontFamily: "fantasy",
                    fontSize: "20px",
                  }}
                >
                  User Settings
                </div>
                <hr
                  style={{
                    margin: "auto 20px",
                    border: " 3px solid rgb(150, 150, 150)",
                  }}
                ></hr>
                <div
                  className="col-md-8 center mt-4"
                  style={{ alignItems: "center"}}
                >
                  <Card className=" pb-4  " style={{ backgroundColor: "#D6DBDF" }}>
                    <p  className="pb-2 pt-2" style={{fontFamily: "cursive", backgroundColor: "#38476C",color:"whitesmoke"}}>
                      HostelSetting
                    </p>

                    <Form>
                      <div class="form-group mx-sm-3 mb-2 ml-5">
                        <div className="row">
                        <div className="ml-4 col-md-3">
                            <label for="inputPassword2">Hostel Name<span style={{color:"red"}}>*</span></label>
                          </div>
                          <div className='col-md-5'>
                            <input
                              type="text"
                              class="form-control"
                              id="inputPassword2"
                              onChange = {(val) => {
                                this.props.hostelDetailsInputChange({
                                  prop:"hostelName",
                                  value:val.target.value,
                                  error:"hostelNameError",
                                })
                            }}
                            value={this.props.hostelName}
                            />
                             <span style={{color:"red"}}> {this.props.hostelNameError}</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                        <div className="row">
                          <div className="ml-4 col-md-3">
                            <label for="inputPassword2">Hostel Code <span style={{color:"red"}}>*</span></label>
                          </div>
                          <div className='col-md-5'>
                            <input
                              type="text"
                              class="form-control"
                              id="inputPassword2"
                              onChange = {(val) => {
                                this.props.hostelDetailsInputChange({
                                  prop:"hostelCode",
                                  value:val.target.value,
                                  error:"hostelCodeError",
                                })
                            }}
                            value={this.props.hostelCode}
                            />
                             <span style={{color:"red"}}> {this.props.hostelCodeError}</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                        <div className="row">
                          <div className="ml-4 col-md-3">
                            <label for="inputPassword2">Name<span style={{color:"red"}}>*</span> </label>
                          </div>
                          <div className='col-md-5'>
                            <input
                              type="text"
                              class="form-control"
                              id="inputPassword2"
                              onChange = {(val) => {
                                this.props.hostelDetailsInputChange({
                                  prop:"contactName",
                                  value:val.target.value,
                                  error:"nameError",
                                })
                            }}
                            value={this.props.contactName}
                            />
                             <span style={{color:"red"}}> {this.props.nameError}</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                        <div className="row">
                          <div className="ml-4 col-md-3">
                            <label for="inputPassword2">Number <span style={{color:"red"}}>*</span></label>
                          </div>
                          <div className='col-md-5'>
                          <input
                              type="number"
                              className="form-control"
                              id="accountid"
                              placeholder=" "
                              onChange = {(val) => {
                                this.props.hostelDetailsInputChange({
                                prop:"contactNumber",
                                value:val.target.value,
                                error:"numberError",
                              })
                            }}
                            value={this.props.contactNumber}
                          />
                           <span style={{color:"red"}}> {this.props.numberError}</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                        <div className="row">
                          <div className="ml-4 col-md-3">
                            <label for="inputPassword2">Email<span style={{color:"red"}}>*</span></label>
                          </div>
                          <div className='col-md-5'>
                          <input
                            type="text"
                            className="form-control"
                            id="accountid"
                            placeholder=" "
                            onChange = {(val) => {
                            this.props.hostelDetailsInputChange({
                            prop:"email",
                            value:val.target.value,
                          error:"emailError",
                          })
                          }}
                        value={this.props.email}
                      />
                       <span style={{color:"red"}}> {this.props.emailError}</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group mx-sm-3 mb-2 ml-5">
                        <div className="row">
                        <div className="ml-4 col-md-3">
                            <label for="inputPassword2">maxDevices<span style={{color:"red"}}>*</span></label>
                          </div>
                          <div className='col-md-5'>
                            <input
                              type="text"
                              class="form-control"
                              id="inputPassword2"
                              onChange = {(val) => {
                                this.props.hostelDetailsInputChange({
                                  prop:"maxDevice",
                                  value:val.target.value,
                                  error:"maxDeviceError",
                                })
                            }}
                            value={this.props.maxDevice}
                            />
                           <span style={{color:"red"}}> {this.props.maxDeviceError}</span>
                          </div>
                        </div>
                      </div>
                      <div style={{float:"right"}}>
                      <Button
                      className="mr-4 ml-4 mt-4 pb-2 pt-2 px-1 "
                      style={{ backgroundColor: "#1D91EF",color:"black",borderRadius:"10px"}}
                      onClick={this.handleUpdate}
                  >
                      {" "}
                      Update
                    </Button>
                  <Link to="/Component/Admin/HostelAccount"><Button
                      className="mr-4 mt-4 pb-2 pt-2 px-1 "
                      style={{ backgroundColor: "#ED2E22", color:"black",borderRadius:"10px" }}
                    >
                      {" "}
                      Cancel
                    </Button></Link>
                    </div>
                    </Form>
                  </Card>
                </div>
              </div>
              </div>
              </>
    )
  }
}
const mapStateToProps=({demo}) => {
const {
      hostelName,
      hostelCode,
      name,
      number,
      contactName,
      contactNumber,
      maxDevice,
      email,
      hostelNameError,
      hostelCodeError,
      nameError,
      numberError,
      emailError,
      maxDeviceError
  } = demo
return {
  hostelName,
  hostelCode,
  contactName,
  contactNumber,
  name,
  number,
  maxDevice,
  email,
  hostelNameError,
  hostelCodeError,
  nameError,
  numberError,
  emailError,
  maxDeviceError
}
}
const mapDispatchToAction = {
  hostelDetailsInputChange:HostelActionDetails.hostelDetailsInputChange,
  updateNewHostel:HostelActionDetails.updateNewHostel,
  hostelValidation:HostelActionDetails.hostelValidation
}
export default connect(mapStateToProps, mapDispatchToAction)(HostelSetting);


