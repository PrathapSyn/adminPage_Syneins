import React from 'react';
import MaterialTable from 'material-table';
import { Card } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { StudentGroupReport } from "../../../Actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [10.5,14]
};




export default function StudentGroup() {

  const dispatch = useDispatch();
  const Data= JSON.parse(localStorage.getItem("report"));
  useEffect(() => {
    dispatch(StudentGroupReport(Data,report));
    
  }, [dispatch])
  const report = useSelector((state) =>
  state.AdminPageReducers
);
       
  const columns = [

    { title: 'SINo', render: rowData => rowData.tableData.id + 1 },
    { title: 'Student Roll No', field: 'studentRollNo' },
    { title: 'Student Name', field: 'studentName' },
    { title: 'Mobile Number', field: 'mobileNumber' },
    { title: 'Student Room No', field: 'StudentRoomNo' },
    { title: 'Course', field: 'course' },
    { title: 'Batch', field: 'batch' },
    { title: 'Father Name', field: 'fatherName' },
    { title: 'Destination', field: 'destination' },
   
 
   
  ];
  const data = report.StudentGroupReport && report.StudentGroupReport.map((item) => (
    {  fatherName: item.fatherName,
      studentRollNo: item.rollNo,
      studentName: item.studentName,
      course: item.course,
     
      StudentRoomNo: item.roomNo,
      destination: item.destination,
      batch: item.batch,
      mobileNumber: item.contactNo

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
        Student Group Report
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
             Student Group Report
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
        pageSize: 20,
        pageSizeOptions:[20, 40, 60],
        paging: false,
        rowStyle:{
          fontSize:12
        }

   }}

    />


        </Card>
        </div>
      </Card>
    </div>
  );
}