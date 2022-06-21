import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import StudentGroupImage from "../../Assets/Report.jpg";
import Excel from "../../Assets/Excel.png";
import StudentInformation from "./ReportComponents/StudentInformation";
import StudentGroup from "./ReportComponents/StudentGroup";
import StudentTrip from "./ReportComponents/StudentTrip";
import TripReport from "./ReportComponents/TripReport";
import SMSPending from "./ReportComponents/SMSpending";
import DatawiseEntry from "./ReportComponents/DatawiseEntry";
import DatawiseExit from "./ReportComponents/DatawiseExit";
import StudentAbsent from "./ReportComponents/StudentAbsent";
import StudentPresent from "./ReportComponents/StudentPresent";
import RFIDCard from "./ReportComponents/RFIDCard";
import SystemReport from "./ReportComponents/SystemReport";
import { reportId } from "../../Actions";
import Options from "./Options";
import { useState } from "react";

import { reportChange } from "../../Actions";
import { showRecords } from "../../Actions";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

export default function MainReportPage() {
  const handleClick = () => {
    window.open(`/Report/${report.reportChange}`);
    // window.history.back();
  };
  const handleShow = () => {
    dispatch(showRecords());
    //console.log("changewef",change);
  };
  const dispatch = useDispatch();
  const report = useSelector((state) => state.Report);
  localStorage.setItem("report", JSON.stringify(report));

  const change = useSelector((state) => state.AdminPageReducers);

  //const [selected, setselected] = useState(new Date());

  const handleChange = (dateFrom) => {
   // setselected(date);

   var date = new Date(dateFrom); // some mock date
   var millisecondsFrom = date.getTime();
    // date =
    // date.getFullYear() +
    //   "-" +
    //   (date.getMonth() + 1) +
    //   "-" +
    //   date.getDate() +
    //   " " +
    //   date.getHours() +
    //   ":" +
    //   date.getMinutes() +
    //   ":" +
    //   date.getSeconds();
    dispatch(
      reportChange({
        props: "fromDate",
        value: millisecondsFrom,
        error: "fromDateError",
      })
    );
  };
 // const [selectedFrom, setselectedFrom] = useState(
   // new Date().setHours(12, 0, 0)
 // );
  const handleChangeFrom = (fromDate) => {
   // setselectedFrom(fromDate);

   var date = new Date(fromDate); // some mock date
var milliseconds = date.getTime(); 


    fromDate =
    fromDate.getFullYear() + "-" + (fromDate.getMonth() + 1) +"-" +fromDate.getDate() +" " +"" +fromDate.getHours() +
      ":" +fromDate.getMinutes() +":" +
      fromDate.getSeconds();
    dispatch(
      reportChange({
        props: "toDate",
        value: milliseconds,
      })
    );
  };


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
            <img
              src={StudentGroupImage}
              alt="Admin"
              width={50}
              style={{ paddingRight: "10px" }}
            />
            Report
          </div>
          <hr
            style={{
              margin: "auto 20px",
              border: " 3px solid rgb(150, 150, 150)",
            }}
          ></hr>
          <Card
            className=" pr-4 pt-2 mt-2 pb-4"
            style={{ backgroundColor: "#F2F4F4" }}
          >
            <div className="row">
              <label className="ml-4">Choose Report</label>

              <select
                className="custom-select d-block ml-4 mr-4"
                style={{ width: "25%" }}
                value={report.reportChange}
                onChange={(val) => {
                  // console.log("helloo",val.target.value)
                  //  dispatch(reportId(val.target.name));
                  window.sessionStorage.setItem("ReportData", val.target.value);
                  dispatch(
                    reportChange({
                      props: "reportChange",
                      value: val.target.value,
                      error: "reportChangeError",
                    })
                  );
                }}
                
              >
                <option>Choose here...</option>
                {Options &&
                  Options.map((item) => (
                    <option value={item.title} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                
              </select>

              {/* <div className="row col-12"> */}
              <div className="row ml-2">
                <label for="verticle" className="pr-1">
                  from :
                </label>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <div
                    key="datetime_default"
                    className=" row col-md-8 ml-4  form-control picker"
                  >
                    <DateTimePicker
                      fullWidth
                      disableFuture
                      value={report.fromDate}
                      showTabs={false}
                      onChange={handleChange}
                      leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                      rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                      disabled={
                        report.reportChange == "1" ||
                       
                        report.reportChange == "2" ||
                        report.reportChange == "4"  
                      }
                    />
                  </div>
                </MuiPickersUtilsProvider>
              </div>


              <div className="row ml-2 mr-4">
                <div className="row ml-4">
                  <label for="verticle" className="pr-1">
                    to :
                  </label>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div
                      key="datetime_default"
                      className=" row col-md-8 ml-4 form-control picker"
                    >
                      <DateTimePicker
                        fullWidth
                        disableFuture
                        value={report.toDate}
                        showTabs={false}
                        onChange={handleChangeFrom}
                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                        rightArrowIcon={
                          <i className="zmdi zmdi-arrow-forward" />
                        }
                        disabled={
                          report.reportChange == "1" ||
                         
                          report.reportChange == "2" ||
                          report.reportChange == "4"
                        }
                      />
                    </div>
                  </MuiPickersUtilsProvider>
                </div>
              </div>

             
              {/* </div> */}
              {/* <div className="row">
                <div className="ml-4 mt-1">
                  <label for="inputPassword2"> From Date</label>
                </div>
                <div className="ml-2 mr-4">
                  <div class="input-group date" data-provide="datepicker">
                    <input
                      type="date"
                      class="form-control"
                      value={report.fromDate}
                      formatDate={(date) => (date).format('DD-MM-YYYY')}
                      onChange={(val) => {
                        dispatch(
                          reportChange({
                            props: "fromDate",
                            value: val.target.value,
                            error: "fromDateError",
                          })
                        );
                      }}
                    />
                  </div>
                </div>
              </div> */}
              {/* <div className="row">
                <div className="ml-4 mt-1">
                  <label for="inputPassword2">To Date</label>
                </div>
                <div className="ml-2">
                  <div class="input-group date" data-provide="datepicker">
                    <input
                      type="date"
                      class="form-control"
                      value={report.toDate}
                      onChange={(val) => {
                        dispatch(
                          reportChange({
                            props: "toDate",
                            value: val.target.value,
                            error: "toDateError",
                          })
                        );
                      }}
                    />
                  </div>
                </div>
              </div> */}
            </div>

            <div className="row mt-4">
              <div className="row ml-3">
                <label className="ml-4">Select Group</label>
              </div>
              <div className="row ml-5">
                <select
                  className="custom-select d-block mr-4"
                  onChange={(val) => {
                    dispatch(
                      reportChange({
                        props: "groupSelect",
                        value: val.target.value,
                        error: "groupSelectError",
                      })
                    );
                  }}
                  disabled={report.reportChange != "2"}
                >
                  <option>Choose here...</option>
                  <option value="0">Ground_Floor</option>
                </select>
              </div>
              {report.reportChange == "1" && (
                <div class="mb-2 ml-4">
                  <div className="row">
                    <div className="">
                      <label for="inputPassword2">
                        Roll No<span style={{ color: "red" }}>*</span>
                      </label>
                    </div>
                    <div className="ml-3" style={{ width: "35%" }}>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                        value={report.rollNo}
                        onChange={(val) => {
                          dispatch(
                            reportChange({
                              props: "rollNo",
                              value: val.target.value,
                              error: "rollNoError",
                            })
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* <div class="mb-2">
                <div className="row">
                  <div className="">
                    <label for="inputPassword2">User ID</label>
                  </div>
                  <div className="ml-3" style={{ width: "25%" }}>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword2"
                      value={report.userId}
                      onChange={(val) => {
                        dispatch(
                          reportChange({
                            props: "userId",
                            value: val.target.value,
                            error: "userIdError",
                          })
                        );
                      }}
                    />
                  </div>
                </div>
              </div> */}

              <div class="mb-2 ml-4">
                {report.reportChange == "4" && (
                  <div className="row">
                    <div className="">
                      <label for="inputPassword2">Trip Id</label>
                    </div>
                    <div className="ml-5" style={{ width: "50%" }}>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                        value={report.tripId}
                        onChange={(val) => {
                          dispatch(
                            reportChange({
                              props: "tripId",
                              value: val.target.value,
                              error: "tripIdError",
                            })
                          );
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div>
                <Button
                  className="mt-1 pb-2 pt-2 px-1"
                  style={{
                    backgroundColor: "lightBlue",
                    color: "black",
                    borderRadius: "10px",
                  }}
                  onClick={handleClick}
                >
                  {" "}
                  Generate-Report
                </Button>
                {report.reportChange != "" && (
                  <Button
                    className="mr-4 mt-1 pb-2 pt-2 px-1 ml-3"
                    style={{
                      backgroundColor: "orange",
                      color: "black",
                      borderRadius: "10px",
                    }}
                    onClick={handleShow}
                  >
                    {" "}
                    Show
                  </Button>
                )}
              </div>
            </div>
          </Card>
          {change.showtheRecords == "1" && (
            <div>
              {report.reportChange == "1" && <StudentInformation />}
              {report.reportChange == "2" && <StudentGroup />}
              {report.reportChange == "3" && <StudentTrip />}
              {report.reportChange == "4" && <TripReport />}
              {report.reportChange == "5" && <SMSPending />}
              {report.reportChange == "6" && <DatawiseEntry />}
              {report.reportChange == "7" && <DatawiseExit />}
              {report.reportChange == "8" && <StudentAbsent />}
              {report.reportChange == "9" && <StudentPresent />}
              {report.reportChange == "10" && <RFIDCard />}
              {report.reportChange == "11" && <SystemReport />}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
