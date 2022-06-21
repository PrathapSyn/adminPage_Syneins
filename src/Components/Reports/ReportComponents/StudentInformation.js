import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getStudentDetails } from "../../../Actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const ref = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [10.5, 14],
};
export default function StudentInformation() {

  const dispatch = useDispatch();
  const Data= JSON.parse(localStorage.getItem("report"));
  useEffect(() => {
    dispatch(getStudentDetails(Data));
    
  }, [dispatch])
  const report = useSelector((state) =>
  state.AdminPageReducers
);
  return (
    
    <div>
    <div >
    <div className="mt-2 mb-3">
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
        Student Information
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
              Student Information
            </div>
         
          <div className="col-md-4 ml-5" >
            <p> Hostel Name:{report.hostelNameSelected}</p>
            </div>
            <div className="col-md-3 ml-5">
            <p> Date:{Data.currentDate}</p>
          </div>
          </div>
          <Card className=" pb-4  " style={{ backgroundColor: "#D6DBDF" }}>
            <p
              className="pb-2 pt-2 "
              style={{
                fontFamily: "cursive",
                backgroundColor: "#38476C",
                color: "whitesmoke",
                textAlign: "center",
              }}
            >
            {report.StudentDetails.Name}
            </p>
            <ul> 
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    EMAIL
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                   {report.StudentDetails.email}
                  </div>
                </div>{" "}
              </li>

              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Roll No
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.student_id}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Martial Status
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.marital_status}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Husband Occupation
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.HusbandOccupation}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Gender
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.gender == "2" && "Female"}
                  {report.StudentDetails.gender == "1" && "Male"}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Name
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.Name}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Room No
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.roomNo}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Father Name
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.fatherName}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Room Type
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.room_type}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Batch
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.batch}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Birth Date
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.BirthDate}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Course
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.course}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Contact Address
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.contactAddress}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Guardian Address
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.GuardianAddress}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Religion
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.religion}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Husband Name
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.husbandname}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Guardian Name
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.guardianName}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    City
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.city}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Mother Name
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.mothername}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Alternate Phonenumber
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.asAlternateNo}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Nationality
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.nationality == "1" && "India"}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Date of Joining
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.dateofJoin}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Year
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.year}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Father Occupation
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.fatherOccupation}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    State
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.state}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    RelationShip
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.relationship}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    College
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.college}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Caste
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.caste}
                  </div>
                </div>{" "}
              </li>
      
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Student ContactNo.
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.phoneNo}
                  </div>
                </div>{" "}
              </li>
              <li>
                {" "}
                <div className="row mb-2">
                  <div
                    className="col-md-5 "
                    style={{
                      fontFamily: "times new Roman",
                      fontWeight: "bolder",
                    }}
                  >
                    Community
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentDetails.community}
                  </div>
                </div>{" "}
              </li>
            </ul>
          </Card>
        </div>
      </Card>
    </div>
    </div>
     </div>
  );
}
