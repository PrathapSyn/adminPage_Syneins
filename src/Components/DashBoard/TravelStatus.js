import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { getStatusView } from "../../Actions";
import { useSelector } from "react-redux";
//import ReactFancyBox from 'react-fancybox';

export default function TravelStatus() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getStatusView(AdminPageReducers));
  // }, [dispatch]);
  const AdminPageReducers = useSelector((state) => state.AdminPageReducers);

  
  return (
    <>  
     {AdminPageReducers.travelDeskDisplay && AdminPageReducers.travelDeskDisplay.map((item) => (

AdminPageReducers.TravelDeskId == item.Id && (
        <div className="" style={{ marginTop: "40rem" }}>
          <div
            className="col-md-9 center mt-4"
            style={{ alignItems: "center", width: "100%" }}
          >
            <div
              className=" pb-6 "
              style={{ backgroundColor: "#D6DBDF", marginTop: "-624px" }}
            >
              <p
                className="pb-2 pt-2"
                style={{
                  fontFamily: "cursive",
                  backgroundColor: "#38476C",
                  color: "whitesmoke",
                }}
              >
                Trip Student Travel Status
              </p>
              <p style={{ color: "red", textAlign: "center" }}>
                {/* {AdminPageReducers.displayTravelStatus.studentName} */}
                {item.Name}
              </p>
              <div className="row col-12">
                <div className="col-md-5">
                  <div class="form-group mx-sm-3 mb-2">
                    <h
                      style={{ fontSize: "15px", fontFamily: "timesNewRoman" }}
                    >
                      <b>Gate Pass Apply</b>
                    </h>
                    <div className="row mt-2" style={{ marginRight: "-399px" }}>
                      <div className="col-md-3" style={{ fontSize: "12px" }}>
                        <label for="inputPassword2">Trip Apply ON</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {/* {AdminPageReducers.displayTravelStatus.TripApplyon} */}
                  
                        {item.gatepassapply == null && "00-00-0000 00:00:00" || new Date(parseInt(item.gatepassapply)*1000).toLocaleString()}

                      </div>
                    </div>
                  </div>

                  <div class="form-group mx-sm-3 mb-2">
                    <div className="row mt-2" style={{ marginRight: "-399px" }}>
                      <div className="col-md-3" style={{ fontSize: "12px" }}>
                        <label for="inputPassword2">Trip Inform SMS ON</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {/* {TripInformSMS} */}
                        ===
                      </div>
                    </div>
                  </div>

                  <div class="form-group mx-sm-3 mb-2">
                    <div className="row mt-2" style={{ marginRight: "-399px" }}>
                      <div className="col-md-3" style={{ fontSize: "12px" }}>
                        <label for="inputPassword2">
                          Trip Inform SMS Status
                        </label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {(item
                          .smsStatus == "1" &&
                          " success") ||
                          "Failed"}
                      </div>
                    </div>
                  </div>

                  <div class="form-group mx-sm-3 mb-2">
                    <h
                      style={{ fontSize: "15px", fontFamily: "timesNewRoman" }}
                    >
                      <b>Campus Exit</b>
                    </h>
                    <div className="row mt-2" style={{ marginRight: "-399px" }}>
                      <div className="col-md-3" style={{ fontSize: "12px" }}>
                        <label for="inputPassword2">Trip Exit ON</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}
                
                      >
                         {item.campusExit == null && "00-00-0000 00:00:00" || new Date(parseInt(item.campusExit)*1000).toLocaleString()}

                      

                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-2">
                    <div className="row" style={{ marginRight: "-399px" }}>
                      <div
                        className="ml-0 col-md-3"
                        style={{ fontSize: "12px" }}
                      >
                        <label for="inputPassword2">Trip Exit SMS ON</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {"==="}
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-2">
                    <div className="row" style={{ marginRight: "-399px" }}>
                      <div
                        className="ml-0 col-md-3"
                        style={{ fontSize: "12px" }}
                      >
                        <label for="inputPassword2">Trip Exit SMS Status</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {"==="}
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-2">
                    <div className="row" style={{ marginRight: "-399px" }}>
                      <div
                        className="ml-0 col-md-3"
                        style={{ fontSize: "12px" }}
                      >
                        <label for="inputPassword2">Trip Exit Travel by</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {"==="}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5" style={{ marginLeft: "50px" }}>
                  <div class="form-group mx-sm-3 mb-2 ml-3">
                    <h
                      style={{ fontSize: "15px", fontFamily: "timesNewRoman" }}
                    >
                      <b>Gate Pass Cancel</b>
                    </h>
                    <div className="row mt-2" style={{ marginRight: "-399px" }}>
                      <div className="col-md-3" style={{ fontSize: "12px" }}>
                        <label for="inputPassword2">Trip Cancel ON</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                      {item.gatepasscancel == null && "00-00-0000 00:00:00" || new Date(parseInt(item.gatepasscancel)*1000).toLocaleString()}

                      
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-3 mt-1">
                    <div className="row" style={{ marginRight: "-399px" }}>
                      <div className="col-md-3" style={{ fontSize: "12px" }}>
                        <label for="inputPassword2">Trip Cancel SMS ON</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {"==="}
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-3 mt-1">
                    <div className="row" style={{ marginRight: "-399px" }}>
                      <div className="col-md-3" style={{ fontSize: "12px" }}>
                        <label for="inputPassword2">
                          Trip Cancel SMS Status
                        </label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {"==="}
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-2">
                    <h
                      style={{ fontSize: "15px", fontFamily: "timesNewRoman" }}
                    >
                      <b>Campus Entry</b>
                    </h>
                    <div className="row mt-4" style={{ marginRight: "-399px" }}>
                      <div
                        className="ml-0 col-md-3"
                        style={{ fontSize: "12px" }}
                      >
                        <label for="inputPassword2">Trip Entry ON</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                     {item.campusentry == null && "00-00-0000 00:00:00" || new Date(parseInt(item.campusentry)*1000).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-2">
                    <div className="row" style={{ marginRight: "-399px" }}>
                      <div
                        className="ml-0 col-md-3"
                        style={{ fontSize: "12px" }}
                      >
                        <label for="inputPassword2">Trip Entry SMS ON</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {"==="}
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-2">
                    <div className="row" style={{ marginRight: "-399px" }}>
                      <div
                        className="ml-0 col-md-3"
                        style={{ fontSize: "12px" }}
                      >
                        <label for="inputPassword2">
                          Trip Entry SMS Status
                        </label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {"==="}
                      </div>
                    </div>
                  </div>
                  <div class="form-group mx-sm-3 mb-2 ml-2">
                    <div className="row" style={{ marginRight: "-399px" }}>
                      <div
                        className="ml-0 col-md-3"
                        style={{ fontSize: "12px" }}
                      >
                        <label for="inputPassword2">Trip Entry Travel by</label>
                      </div>
                      <div className="col-md-5" style={{ fontSize: "12px" }}>
                        {"==="}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 " style={{ fontSize: "15px" }}>
                  <h style={{ color: "red" }}>Remarks</h>
                  <div className="col-md-8 ml-3 mt-2 ">
                    <textarea
                      type="text"
                      className="form-control"
                      id="Remarks"
                      placeholder="Remarks"
                      values="description"
                      rows="4"
                      cols="50"
                      disabled
                    ></textarea>
                  </div>
                </div>
                <div>
                  <Button
                    className="mr-4 ml-4 pb-2 pt-2 px-1 "
                    style={{
                      backgroundColor: "#1D91EF",
                      color: "black",
                      borderRadius: "10px",
                      alignItems: "left",
                      float: "right",
                    }}
                    disabled
                  >
                    {" "}
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
     )))}
    </>
  );
}
