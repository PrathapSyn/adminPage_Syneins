import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import { useDispatch, useSelector } from 'react-redux';
import {getStudentList} from "../../Actions";
import SearchIcon from '../../Assets/Search.png';
import {InputChange} from "../../Actions";
import {getSearchQuery} from "../../Actions";


export default function Search() {

  const dispatch=useDispatch();

  // useEffect(() => {dispatch(getStudentList(StudentList));
  // },[dispatch]);

  const AdminPageReducers = useSelector(state => state.AdminPageReducers)
    const columns = [
        { title: "SINo", render: (rowData) => rowData.tableData.id + 1 },
        { title: "StudentName", field: "studentName" },
        { title: "StudentRollNo", field: "studentRollNo" },
        { title: "Hostel Name", field: "HostelName" },
        { title: "RFID.No", field: "rfidNo" },
        { title: "CourseDetails", field: "courseDetails" },
        { title: "YearofStudy", field: "yearofStudy" },
        { title: "FatherName", field: "fatherName" },
        { title: "ContactNumber", field: "studentContactNumber" },
        { title: "Destination", field: "Destination" },
      ];

      console.log("vdvdss",AdminPageReducers.SearchElement);
         const data = AdminPageReducers.SearchElement && AdminPageReducers.SearchElement.map((item) => (
          {
            studentName: item.student_name,
            studentRollNo: item.student_id,
            courseDetails: item.course_name,
            HostelName:item.hostel_name,
            yearofStudy: item.year == "1" && "I" ||
            item.year == "2" && "II" ||
            item.year == "3" && "III" || 
            item.year == "4" && "IV" ||
            item.year == "5" && "V" ||
            item.year == "6" && "VI",
            fatherName: item.father_guardian_name,
            studentContactNumber: item.parent_phno,
                     rfidNo:item.rfid_id,
                     Destination:item.destination
    
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
            src={SearchIcon}
            width={40}
            height={40}
            >
            </img>
            
        Search
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
          <div className="row mr-4 ml-5 mb-2">
                  <label for="accountId">
                    <b>Select</b>
                  </label>
                  {/* {
                  AdminPageReducers.StudentGroupDropDown.map((item) => ( */}
                  <select
                    id="groupId"
                    className="form-control"
                    style={{
                      width: "150px",
                      textAlign: "50px",
                      marginLeft: "1rem",

                    }}
                    onChange={(val) => {
                      
                      dispatch(
                        InputChange({
                          props: "SearchOrder",
                          value: val.target.value,
                        
                        })
                      );
                    }}
                  >
                    <option>select...</option>
                    <option value="1">Name</option>
                    <option value="2">Student Id</option>
                    <option value="4">RFID No</option>
                    <option value="3">PhoneNumber</option>
                  </select>
                
                  {AdminPageReducers.SearchOrder != "" && 
                  <label for="accountId" className='ml-3'>
                    
                    {AdminPageReducers.SearchOrder == "1" && <b>Name</b>}
                    {AdminPageReducers.SearchOrder == "2" && <b>Student ID</b>}
                    {AdminPageReducers.SearchOrder == "3" && <b>Phone No</b>}
                    {AdminPageReducers.SearchOrder == "4" && <b>RFID No</b>}
                  </label>
}

                  {/* {
                  AdminPageReducers.StudentGroupDropDown.map((item) => ( */}
                   {AdminPageReducers.SearchOrder != "" && 
                  <div className="ml-3">
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                        value={AdminPageReducers.SearchOrderText}
                        onChange={(val) => {
                          dispatch(
                            InputChange({
                              props: "SearchOrderText",
                              value: val.target.value,
                            
                            })
                          );
                        }}
                       
                      />
                    </div>
                    
}
<Button
                        className="ml-3"
                        style={{
                          backgroundColor: "#ED2E22",
                          color: "black",
                          borderRadius: "10px",
                        }}

                    onClick={()=>{dispatch(getSearchQuery(AdminPageReducers))}}
                      >
                        {" "}
                        Submit
                      </Button>
                  </div>

            <MaterialTable
              columns={columns}
             data={data}
            
             
              options={{
                showTitle: false,
                actionsColumnIndex: -1,
                searchFieldAlignment: "left",
                headerStyle:{
                  backgroundColor: "#01579b",
                  color:"white"
                },
                rowStyle: {
                  fontSize:12,
                },
                pageSize:10,
              }}
            />
          </Card>
        </div>
      </div>
    )
}
