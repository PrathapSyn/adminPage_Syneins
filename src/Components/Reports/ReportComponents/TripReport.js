import React from "react";
import MaterialTable from "material-table";
import { Card } from "react-bootstrap";
import PdfImage from "../../../Assets/pdf.png";
import { useSelector } from "react-redux";
import { getStudentTripById } from "../../../Actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const ref = React.createRef();

const options = {
  orientation: "landscape",
  unit: "in",
  format: [10.5, 14],
};
export default function TripReport() {
  const dispatch = useDispatch();
  const Data= JSON.parse(localStorage.getItem("report"));
  useEffect(() => {
    dispatch(getStudentTripById(Data));
    
  }, [dispatch])
  const report = useSelector((state) =>
  state.AdminPageReducers
);
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
      Trip Report By ID
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
             Trip Report By ID
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
              className="pb-2 pt-2 pl-4"
              style={{
                fontFamily: "cursive",
                backgroundColor: "#38476C",
                color: "whitesmoke",
              }}
            >
              Trip Report By ID
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
                   Trip Request Date/Time -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                    23-12-3344 00:09:08
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
                   Trip SMS Send Status -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                    ===
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
                   Campus Exit Date/Time -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                    {report.StudentTripById.ExitDateTime}
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
                   student Roll Number -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentTripById.student_id}
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
                   student Name -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentTripById.student_name}
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
                   Trip ID -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentTripById.tripId}
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
                   Travel Exit by -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
               bus/Own
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
                   Exit SMS Status -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                    sent
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
                   ENtry SMS Inform Date/Time -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
              
                  {report.StudentTripById.plannedDateTime}
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
                   Entry SMS Status -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                    00-00-0000
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
                  Exit SMS inform Date/Time -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                   =====
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
                   Campus Entry Date/Time -----
                  </div>
                  <div className="col-md-5 ml-4" style={{ float: "" }}>
                  {report.StudentTripById.ReturnDateTime}
                  </div>
                </div>{" "}
              </li>
            </ul>
          </Card>
        </div>
      </Card>
    </div>
  );
}
