import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HostelActionDetails } from "../../../../../Actions";
import { getSmsOutbox } from "../../../../../Actions";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import resend from "../../../../../Assets/resend.png";
import deleteData from "../../../../../Assets/deleteData.png";



export default function SMSLogger() {
  const dispatch = useDispatch();
  const handleGet = () => {
    dispatch(getSmsOutbox(demo));
  };

  //const [selected, setselected] = useState(new Date());

  const handleChange = (date) => {
    ////setselected(date);
    date = date.getFullYear() + ((date.getMonth()+1) < 10 && '-0' || '-') + (date.getMonth() + 1) + "-"+ date.getDate()+ ' ' + date.getHours() + ":" +
    date.getMinutes() + ":" +
    date.getSeconds()
    dispatch(
      HostelActionDetails.hostelDetailsInputChange({
        prop: "date",
        value: date,
        error: "dateError",
      })
    );
  };
  //const [selectedFrom, setselectedFrom] = useState(new Date().setHours(12, 0, 0));
  const handleChangeFrom = (fromDate) => {
  //  setselectedFrom(fromDate);
    fromDate =  fromDate.getFullYear() + ((fromDate.getMonth()+1) < 10 && '-0' || '-') + (fromDate.getMonth() + 1) + "-0"+ fromDate.getDate()+ ' '+"0" + fromDate.getHours() + ":0" +
    fromDate.getMinutes() + ":0" +
    fromDate.getSeconds()
    dispatch(
      HostelActionDetails.hostelDetailsInputChange({
        prop: "fromDate",
        value: fromDate,
        error: "fromDateError",
      })
    );
  };

  const AdminPageReducers = useSelector((state) => state.demo);

  
  const columns = [
    {title:'TripID',field:'tripId'},
    {title:'StudentID',field:'studentId'},
    {title:'ContactNo',field:'altNum'},
    {title:'ReportType',field:'reportType'},
    {title:'MsgID',field:'msgID'},
    {title:'SendStatus',field:'sendStatus'},
    {title:'JobID',field:'jobId'},
    {title:'SendTime',field:'sendTime'},
    {title:'DeliveredTime',field:'deliveredTime'},
    {title:'ReSend',field:'reSend',
    render: (row) => (
      <img
      src={resend}
      width={40}
      height={30}
     ></img>
    ),
  },
  //   {title:'Delete',field:'delete',
  //   render: (row) => (
  //     <img
  //     src= {deleteData}
  //     width={30}
  //     height={30}
  //    ></img>
  //   ),
  // },
]
  const demo = useSelector((state) => state.demo);
  const data = demo.displaySmsoutbox && demo.displaySmsoutbox.map((item)=>({
    
    tripId:item.TripId,
    studentId:item.student_id,
    altNum:item.alt_contact_num,
    reportType:item.reportType,
    msgID:item.MsgID,
    sendStatus:item.sendStatus,
    jobId: item.jobId,
    sendTime:item.sendTime, 
    deliveredTime:item.DeliveredTime,
  }))


  return (
    <div class="content">
      <div className="ml-3" style={{ marginTop: "90px" }}>
        <div class="row col-12">
          <div
            className=" row col-md-8 ml-3 mb-3 mr-5"
            style={{
              color: "#CB7C24",
              fontWeight: "revert",
              fontFamily: "fantasy",
              fontSize: "20px",
            }}
          >
            CALL/SMS Outbox
          </div>
          <div className="row ml-5">
            <Link to="/Component/AdminSetting">
              <button
              className="ml-5"
                style={{
                  borderRadius: "8px",
                  backgroundColor: "#87A7B0",
                  fontSize: "20px",
                
                  color: "white",
                }}
              >
                Back
              </button>
            </Link>
          </div>
        </div>
        <hr
          style={{
            margin: "auto 20px",
            border: " 3px solid rgb(150, 150, 150)",
          }}
        ></hr>

        <div className="row col-12">
          <div
            className="row ml-2"
            style={{marginTop: "12px"}} 
          >
            <div className="row ml-4" >
              <label for="verticle" className="pr-1">
               From :
              </label>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div
                key="datetime_default"
                className=" row col-md-8 ml-4 form-control picker"
                
              >
                <DateTimePicker
                  fullWidth
                  disableFuture
                  value={AdminPageReducers.fromDate}
                  showTabs={false}
                  onChange={handleChangeFrom}
                  leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                  rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                />
              </div>
            </MuiPickersUtilsProvider>
            </div>
          </div>
          <div className="row ml-5" style={{ marginTop: "12px" }}>
            <label for="verticle" className="pr-1">
              to :
            </label>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div
                key="datetime_default"
                className=" row col-md-4 ml-4  form-control picker"
              >
                <DateTimePicker
                  fullWidth
                  disableFuture
                  value={AdminPageReducers.date}
                  showTabs={false}
                  onChange={handleChange}
                  leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                  rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                />
              </div>
            </MuiPickersUtilsProvider>

            
            <div className="row ">
              <div className="mr-4 ml-5">
                <label for="verticle" className="pr-3">
                  Filter
                </label>
                <div className="" style={{ float: "right" }}>
                  <select
                    id="groups"
                    className="form-control"
                    style={{ width: "177px" }}
                    onChange={(val) => {
                      dispatch(
                        HostelActionDetails.hostelDetailsInputChange({
                          prop: "filter",
                          value: val.target.value,
                          error: "filterError",
                        })
                      );
                    }}
                  >
                    <option>Select</option>
                    <option value="1">Success</option>
                    <option value="2">Queue</option>
                    <option value="3">Fail</option>
                  </select>
                </div>
              </div>
              <Button onClick={handleGet}>Get</Button>
            </div>
          </div>
          <div className="row col-12 mt-2">
            <p style={{ marginLeft: "2rem", fontSize: "14px" }}>
              SMS Task Monitor Time :
            </p>
            <p style={{ marginLeft: "3rem", fontSize: "12px" }}>
              {new Date().toLocaleString()}
 
    </p>
          </div>
          <div className="row col-12 ">
            <p style={{ marginLeft: "2rem", fontSize: "14px" }}> SMS Total :</p>
            <p style={{ marginLeft: "9rem", fontSize: "12px" }}>0</p>
          </div>
        </div>

        <hr
          style={{
            margin: "auto 1px",
            border: " 3px solid rgb(150, 150, 150)",
          }}
        ></hr>



        <MaterialTable
          style={{ width: "101%" }}
          title={<div style={{ fontSize: "30px", color: "#2E605E" }}></div>}
          columns={columns}
          data={data}
          
          options={{
            actionsColumnIndex: -1,
            search: false,
            paging: false,
            padding: "dense",
            showTitle: false,
            headerStyle:{
              backgroundColor: "#01579b",
              color: "#FFF",
            },
            rowStyle: {
              fontSize:12,
            },
            MuiToolbarRegular: {
              minHeight: "7px !important",
            },
            width: "100px",
          }}
        />
      </div>
    </div>
  );
}
