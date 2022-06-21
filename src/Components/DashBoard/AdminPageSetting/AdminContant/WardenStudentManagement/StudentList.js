import React from 'react';
import { Link } from "react-router-dom";
import StudentListImage from "../../../../../Assets/Student1.jpg";
import { Table, TableBody, TableHead, TableCell } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import { useSelector } from 'react-redux';

export default function StudentList() {

  const StudentList = useSelector(state => state.AdminPageReducers)
  const Student= StudentList.studentList
    const columns = [
        { title: "SINo", render: (rowData) => rowData.tableData.id + 1 },
        { title: "Student Name", field: "studentName" },
        { title: "Student Roll No", field: "studentRollNo" },
        { title: "Course Details", field: "courseDetails" },
        { title: "Year of Study", field: "yearofStudy" },
        { title: "Father Name", field: "fatherName" },
        { title: "Contact Number", field: "studentContactNumber" },
        
      ];
         const data = Student && Student.map((item) => (
          {
            studentName: item.studentName,
            studentRollNo: item.rollNo,
            courseDetails: item.course,
            yearofStudy: item.batch,
            fatherName: item.fatherName,
            studentContactNumber: item.contactNo
    
          }
        ))
    return (
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
              src={StudentListImage}
              alt="Admin"
              width={50}
              style={{ paddingRight: "10px" }}
            />
        Students List
          </div>
          <hr
            style={{
              margin: "auto 20px",
              border: " 3px solid rgb(150, 150, 150)",
            }}
          ></hr>
          <Card
            className=" pr-4 pt-4 mt-4"
            style={{ backgroundColor: "#D6DBDF" }}
          >
            <MaterialTable
              
              columns={columns}
              data={data}
              actions={[
                {
                  icon: () => (
                    <Link to="/Component/AdminSetting">
                      <Button
                        className=""
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
                  ),
                  tooltip: "cancel",
                  isFreeAction: true,
                  //   onClick: (event) => alert("You want to add a new Employee")
                },
              ]}
             
              options={{
                showTitle: false,
                actionsColumnIndex: -1,
                searchFieldAlignment: "left",
                headerStyle:{
                  backgroundColor: "#01579b",color: "#FFF"
                },
                rowStyle: {
                  fontSize:12,
                },
              }}
            />
          </Card>
        </div>
      </div>
    )
}
