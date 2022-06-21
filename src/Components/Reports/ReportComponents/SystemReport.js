import React from 'react';
import MaterialTable from 'material-table';
import { Card } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { getSystemReport } from "../../../Actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [10.5,14]
};
export default function SystemReport() {
           
  const dispatch = useDispatch();
  const Data= JSON.parse(localStorage.getItem("report"));
  useEffect(() => {
    dispatch(getSystemReport(Data));
    
  }, [dispatch])
  const report = useSelector((state) =>
  state.AdminPageReducers
);
      
  const columns = [

    { title: 'SINo', render: rowData => rowData.tableData.id + 1 },
    { title: 'Log Type', field: 'logType' },
    { title: 'Server Date/Time', field: 'serverDateTime' },
    { title: 'Event Date/Time', field: 'eventDateTime' },
    { title: 'Device ID', field: 'deviceId' },
    { title: 'Event ID', field: 'eventId' },
    { title: 'Description', field: 'description' },
  ];
  const data = report.systemReportDisplay && report.systemReportDisplay.map((item) => (
    {
      logType: item.LogType,
      serverDateTime: item.ServerDateTime,
      eventDateTime: item.EventDateTime,
      deviceId: item.deviceId,
      eventId: item.EventId,   
      description: item.Description,
     
      
    }
  ))
  return (
    <div className="mt-2">
      <div
        className=""
        style={{
          color: "#CB7C24",
          fontWeight: "revert",
          fontFamily: "fantasy",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
      System Report
        <hr
          style={{
            margin: "auto 230px",
            border: " 3px solid rgb(150, 150, 150)",
          }}
        ></hr>
      </div>
      <Card
        className="col-md-12 pr-4 pt-2 mt-5 pb-4"
        style={{ backgroundColor: "#F2F4F4" }}
      >
        <div ref={ref}>
          <div className="row">
            <div
              className="col-md-3 ml-4 mr-4"
              style={{
                color: "#2471A3",
                fontWeight: "revert",
                fontFamily: "fantasy",
                fontSize: "20px",
              }}
            >
              System Report
            </div>
         
            <div className="col-md-4 ml-5" >
            <p> Hostel Name:{report.hostelNameSelected}</p>
            </div>
            <div className="col-md-3 ml-5">
            <p> Date:{Data.currentDate}</p>
          </div>
          </div>
        <Card
          className="  mt-2  ml-3 mr-3"
          style={{ backgroundColor: "#F2F4F4" }}
        >
             <MaterialTable
      columns={columns}
      data={data} 
      
      options={{
        showTitle: false,
        search: false,
   }}

    />


        </Card>
        </div>
      </Card>
    </div>
  );
}