import React from 'react';
import MaterialTable from 'material-table';
import { Card } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { SmsPending } from "../../../Actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [10.5,14]
};
export default function SMSpending() {

  const dispatch = useDispatch();
  const Data= JSON.parse(localStorage.getItem("report"));
  useEffect(() => {
    dispatch(SmsPending(Data));
    
  }, [dispatch])
  const report = useSelector((state) =>
  state.AdminPageReducers
);
       
  const columns = [

    { title: 'SINo', render: rowData => rowData.tableData.id + 1 },
    { title: 'ID[SMS-USER-TRIP]', field: 'ID' },
    { title: 'Student Roll No', field: 'studentRollNo' },
    { title: 'Student Name', field: 'studentName' },
    { title: 'Mobile Number', field: 'mobileNumber' },
    { title: 'Creation Time', field: 'creationTime' },
    { title: 'Update Date', field: 'updateTime' },
    { title: 'Msg Type', field: 'msgType' },
    { title: 'Status', field: 'status' }
   
  ];
  const data = report.smsPendingReport && report.smsPendingReport.map((item) => (
    {
      ID: item.SMSCallUID,
      studentRollNo: item.student_id,
      studentName: item.student_name,
      mobileNumber: item.alt_contact_num,
     
      creationTime: item.creationTime,
      updateTime: item.lastUpdateTime,
      msgType: item.messageType,
      status: item.sendStatus,
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
        SMS Pending Report
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
            SMS Pending Report
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
      title={<p style={{ fontFamily: "Cursive", fontWeight: "bolder" }}>
      Devices List
    </p>}
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