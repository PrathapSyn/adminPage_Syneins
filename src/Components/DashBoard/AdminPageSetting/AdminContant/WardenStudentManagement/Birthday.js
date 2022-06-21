import React from 'react'
import { Link } from "react-router-dom";
import BirthdayImage from "../../../../../Assets/bday.png";
import { Table, TableBody, TableHead, TableCell } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
export default function Birthday() {
    const columns = [
        { title: "SINo", render: (rowData) => rowData.tableData.id + 1 },
        { title: "Student Name", field: "studentName" },
        { title: "Student ID", field: "studentId" },
        { title: "Student Roll No", field: "studentRollNo" },
        { title: "Course Details", field: "courseDetails" },
        { title: "Year of Study", field: "yearofStudy" },
        { title: "Contact Number", field: "studentContactNumber" },
        
      ];
      //    const data = activeList && activeList.map((item) => (
      //     {
      //       Name: item.firstName,
      //       EmployeeID: item.empId,
      //       ContactNo: item.contactNo,
      //       Designation: item.designation,
      //       EmailID: item.email,
      //       department: item.department
    
      //     }
      //   ))
    return (
        <div class="content">
        <div className="ml-3" style={{ marginTop: "110px" }}>
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
              src={BirthdayImage}
              alt="Admin"
              width={50}
              style={{ paddingRight: "10px" }}
            />
        Student Birthday
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
              data={[
                {
                  name: "Mehmet",
                  surname: "Baran",
                  birthYear: 1987,
                  birthCity: 63,
                },
                {
                  name: "Zerya Betül",
                  surname: "Baran",
                  birthYear: 2017,
                  birthCity: 34,
                },
              ]}
              actions={[
                {
                  icon: () => (
                    <Link to="/Component/AdminSetting">
                      <Button
                        className=""
                        style={{
                          backgroundColor: "#D35400",
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
                }
              }}
            />
          </Card>
        </div>
      </div>
    )
}
