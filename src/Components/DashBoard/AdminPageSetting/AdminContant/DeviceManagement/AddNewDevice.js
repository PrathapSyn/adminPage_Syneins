import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { HostelActionDetails } from "../../../../../Actions/demo";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class AddNewDevice extends Component {
  constructor(props) {
    super(props);
    this.props.getHostelList();
  }
  handleSubmit = () => {
    this.props.validation(this.props);
    // console.log("validation views",this.props);
  };

  render() {
    const { hostelList } = this.props;
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
              style={{ alignItems: "center" }}
            >
              <Card className=" pb-4  " style={{ backgroundColor: "#D6DBDF" }}>
                <p
                  className="pb-2 pt-2"
                  style={{
                    fontFamily: "cursive",
                    backgroundColor: "#38476C",
                    color: "whitesmoke",
                  }}
                >
                  Device Setting
                </p>
                <Form>
                  <div class="form-group mx-sm-3 mb-2 ml-5">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          Account Id<span style={{color:"red"}}>*</span>
                        </label>
                      </div>
                      <div className="col-md-5">
                        <select
                          id="hostel"
                          className="form-control"
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "hostelId",
                              value: val.target.value,
                              error: "hostelIdError",
                            });
                          }}
                          value={this.props.hostelId}
                        >
                          <option>Select ... </option>
                          {hostelList &&  hostelList.map((id) => (
                            <option key={id} value={id.hostel_id}>
                              {id.hostel_name}
                            </option>
                          ))}
                        </select>
                        <span style={{color:"red"}}> {this.props.hostelIdError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          Description<span style={{color:"red"}}>*</span> 
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "description",
                              value: val.target.value,
                              error: "descriptionError",
                            });
                          }}
                          value={this.props.description}
                        />
                        <span style={{color:"red"}}> {this.props.descriptionError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">Device Id<span style={{color:"red"}}>*</span></label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "device",
                              value: val.target.value,
                              error: "deviceError",
                            });
                          }}
                          value={this.props.device}
                        />
                        <span style={{color:"red"}}> {this.props.deviceError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          DeviceType<span style={{color:"red"}}>*</span> 
                        </label>
                      </div>
                      <div className="col-md-5">
                      <select
                          id="groups"
                          className="form-control"
                         
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "deviceType",
                              value: val.target.value,
                              error: "deviceTypeError",
                            });
                          }}
                        >
                          <option value={"0"}>Select ... </option>
                          <option value={"1"}>Biometric</option>
                          <option value={"2"}>RFID</option>
                          <option value={"3"}>RFID with VTS</option>
                        </select>
                        <span style={{color:"red"}}> {this.props.deviceTypeError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          InActive<span style={{color:"red"}}>*</span>
                        </label>
                      </div>
                      <div className="col-md-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="1"
                          id="flexCheckDefault"
                          style={{marginLeft:"-0.05rem"}}
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "inActive",
                              value: val.target.value,
                              error: "inActiveError",
                            });
                          }}
                        />
                        <span style={{color:"red", marginLeft:"12px"}}> {this.props.inActiveError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="verticle">
                          Device Model<span style={{color:"red"}}>*</span>
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          id="accountid"
                          placeholder=" "
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "devicemodal",
                              value: val.target.value,
                              error: "devicemodalError",
                            });
                          }}
                          value={this.props.devicemodal}
                        />
                        <span style={{color:"red"}}> {this.props.devicemodalError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          Serial Number<span style={{color:"red"}}>*</span>
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          id="accountid"
                          placeholder=" "
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "serialNumber",
                              value: val.target.value,
                              error: "serialNumberError",
                            });
                          }}
                          value={this.props.serialNumber}
                        />
                        <span style={{color:"red"}}> {this.props.serialNumberError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          SIMPhNumber<span style={{color:"red"}}>*</span>
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          id="accountid"
                          placeholder=" "
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "simPhNumber",
                              value: val.target.value,
                              error: "simPhNumberError",
                            });
                          }}
                          value={this.props.simPhNumber}
                        />
                        <span style={{color:"red"}}> {this.props.simPhNumberError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          SIM ID<span style={{color:"red"}}>*</span>
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                           type="text"
                           className="form-control"
                           id="accountid"
                           placeholder=" "
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "simId",
                              value: val.target.value,
                              error: "simIdError",
                            });
                          }}
                          value={this.props.simId}
                        />
                        <span style={{color:"red"}}> {this.props.simIdError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          IMEI Number<span style={{color:"red"}}>*</span>
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                           type="text"
                           className="form-control"
                           id="accountid"
                           placeholder=" "
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "imeinumber",
                              value: val.target.value,
                              error: "imeinumberError",
                            });
                          }}
                          value={this.props.imeinumber}
                        />
                        <span style={{color:"red"}}> {this.props.imeinumberError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          Code Version<span style={{color:"red"}}>*</span>
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                           type="text"
                           className="form-control"
                           id="accountid"
                           placeholder=" "
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "codeVersion",
                              value: val.target.value,
                              error: "codeVersionError",
                            });
                          }}
                          value={this.props.codeVersion}
                        />
                        <span style={{color:"red"}}> {this.props.codeVersionError}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          Feature Set<span style={{color:"red"}}>*</span> 
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                           type="text"
                           className="form-control"
                           id="accountid"
                           placeholder=" "
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "featureSet",
                              value: val.target.value,
                              error: "featureSetError",
                            });
                          }}
                          value={this.props.featureSet}
                        />
                        <span style={{color:"red"}}> {this.props.featureSetError}</span>
                      </div>
                    </div>
                  </div>
                  <h5 style={{ fontFamily: "cursive"}}>Reader Setting</h5>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          Install Location{" "}
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                        />
                        {/* <span style={{color:"red"}}> {this.props.readertype1Error}</span> */}
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          Device Model 
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                        />
                        {/* <span style={{color:"red"}}> {this.props.devicemodalError}</span> */}
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          AccessPtPlace 
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword2"
                        />
                        {/* <span style={{color:"red"}}> {this.props.accessmode1Error}</span> */}
                      </div>
                    </div>
                  </div>
                  <h5 style={{ fontFamily: "cursive"}}>Reader Port 1</h5>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          Reader Type<span style={{color:"red"}}>*</span> 
                        </label>
                      </div>
                      <div className="col-md-5">
                        <select
                          id="groups"
                          className="form-control"
                          onChange={(val) => {
                            console.log("vdsvdsvd",val.target.value);
                            this.props.hostelDetailsInputChange({
                              prop: "readertype1",
                              value: val.target.value,
                              error: "readertype1Error",
                            });
                          }}
                          //  value={this.props.readertype1}
                        >
                          <option >Select ... </option>
                          <option value="1">Biometric Reader</option>
                          <option value="2">RFID Reader</option>
                        </select>
                        <span style={{color:"red"}}> {this.props.readertype1Error}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          AccessMode<span style={{color:"red"}}>*</span> 
                        </label>
                      </div>
                      <div className="col-md-5">
                        <select
                          id="groups"
                          className="form-control"
                         
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "accessmode1",
                              value: val.target.value,
                              error: "accessmode1Error",
                            });
                          }}
                        >
                          <option value={"0"}>Select ... </option>
                          <option value={"1"}>Gatepass</option>
                          <option value={"2"}>Entry</option>
                          <option value={"3"}>Exit</option>
                        </select>
                        <span style={{color:"red"}}> {this.props.accessmode1Error}</span>
                      </div>
                    </div>
                  </div>
                  <h5 style={{ fontFamily: "cursive"}}>Reader Port 2</h5>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          Reader Type<span style={{color:"red"}}>*</span> 
                        </label>
                      </div>
                      <div className="col-md-5">
                        <select
                          id="groups"
                          className="form-control"
                         
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "readertype2",
                              value: val.target.value,
                              error: "readertype2Error",
                            });
                          }}
                          //  value={this.props.readertype1}
                        >
                          <option value="0">Select ... </option>
                          <option value="1">Biometric Reader</option>
                          <option value="2">RFID Reader</option>
                        </select>
                        <span style={{color:"red"}}> {this.props.readertype2Error}</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                    <div className="row">
                      <div className="ml-4 col-md-4">
                        <label for="inputPassword2">
                          AccessMode<span style={{color:"red"}}>*</span> 
                        </label>
                      </div>
                      <div className="col-md-5">
                        <select
                          id="groups"
                          className="form-control"
                         
                          onChange={(val) => {
                            this.props.hostelDetailsInputChange({
                              prop: "accessmode2",
                              value: val.target.value,
                              error: "accessmode2Error",
                            });
                          }}
                        >
                          <option value={"0"}>Select ... </option>
                          <option value={"1"}>Gatepass</option>
                          <option value={"2"}>Entry</option>
                          <option value={"3"}>Exit</option>
                        </select>
                        <span style={{color:"red"}}> {this.props.accessmode2Error}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ float: "right" }}>
                    <Button
                      className="mr-4 ml-4 mt-4 pb-2 pt-2 px-1 "
                      style={{
                        backgroundColor: "#1D91EF",
                        color: "black",
                        borderRadius: "10px",
                      }}
                      onClick={this.handleSubmit}
                    >
                      {" "}
                      Update
                    </Button>
                    <Link to="/Component/Admin/DeviceReader">
                      <Button
                        className="mr-4 mt-4 pb-2 pt-2 px-1 "
                        style={{
                          backgroundColor: "#ED2E22",
                          color: "black",
                          borderRadius: "10px",
                        }}
                      >
                        {" "}
                        Cancel
                      </Button>
                    </Link>
                  </div>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ demo }) => {
  const {
    hostelId,
    hostelList,
    hostelIdError,
    description,
    device,
    deviceType,
    inActive,
    date,
    devicemodal,
    serialNumber,
    simPhNumber,
    simId,
    imeinumber,
    codeVersion,
    featureSet,
    readertype1,
    readertype2,
    accessmode1,
    accessmode2,
        descriptionError,
        deviceError,
        deviceTypeError,
        inActiveError,
        dateError,
        devicemodalError,
        serialNumberError,
        simPhNumberError,
        simIdError,
        imeinumberError,
        codeVersionError,
        featureSetError,
        readertype1Error,
        readertype2Error,
        accessmode1Error,
        accessmode2Error  
  } = demo;
  return {
    hostelId,
    hostelList,
    hostelIdError,
    description,
    device,
    deviceType,
    inActive,
    date,
    devicemodal,
    serialNumber,
    simPhNumber,
    simId,
    imeinumber,
    codeVersion,
    featureSet,
    readertype1,
    readertype2,
    accessmode1,
    accessmode2,
    descriptionError,
    deviceError,
    deviceTypeError,
    inActiveError,
    dateError,
    devicemodalError,
    serialNumberError,
    simPhNumberError,
    simIdError,
    imeinumberError,
    codeVersionError,
    featureSetError,
    readertype1Error,
    readertype2Error,
    accessmode1Error,
    accessmode2Error
  };
};
const mapDispatchToAction = {
  hostelDetailsInputChange: HostelActionDetails.hostelDetailsInputChange,
  getHostelList: HostelActionDetails.getHostelList,
  validation:HostelActionDetails.validation,
  saveNewDeviceUpdate: HostelActionDetails.saveNewDeviceUpdate,
};
export default connect(mapStateToProps, mapDispatchToAction)(AddNewDevice);
