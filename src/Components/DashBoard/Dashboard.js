import React from "react";
import { useSelector } from "react-redux";
import MaterialTable from "material-table";
import { Card } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {getTodayStatus} from "../../Actions";
import {getDashBoard} from "../../Actions";


export default function Dashboard() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashBoard(Header));
  dispatch(getTodayStatus(Header))
  }, [dispatch]);
  
  const Header = useSelector((state) => state.AdminPageReducers);
console.log("heasader",Header);
  const columns = [

    { title: "SINo", render: (rowData) => rowData.tableData.id + 1 },
    { title: "Student Groups", field: "studentGroupName" },
    { title: "Warden InCharge", field: "wardenIncharge" },
    { title: "Total Students", field: "totalStudents" },
    { title: "Trip Planned", field: "tripPlanned" },
    { title: "trip Unplanned", field: "tripUnplanned" },
    { title: "Exited", field: "exited" },
  ];

  const data=Header.dashboardData  && Header.dashboardData.map((item)=>(
    {
    studentGroupName:item.studentGroup,
    wardenIncharge:item.warden,
    totalStudents:item.total,
    tripPlanned:item.tripPlanned,
    tripUnplanned:item.tripUnplanned,
    exited:item.exited,
    }
  ))

  return (
    <>
      <div class="content">
        <div className="ml-3 mr-2" style={{ marginTop: "90px" }}>
       
          <div className="row">
          { Header.todayStatus  &&  Header.todayStatus.map((item)=>(
            <Card className="col-md-4 mr-5 ml-3 mb-2" style={{ backgroundColor: "#EAEDED " , borderRadius:"20px" }}>
              <div>
                <div
                  style={{
                    fontSize: "20px",
                    color: "white",
                    backgroundColor: "#2874A6",
                    borderRadius:"5px",
                    textAlign:'center'
                  }}
                >
                  TODAY STATUS
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    color: "purple",
                    fontSize: "12px",
                  }}
                >
                  GATE PASS APPLIED :
                  {item.gatePassApplied}
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    color: "purple",
                    fontSize: "12px",
                  }}
                >
                  CAMPUS EXITED :
                  {item.CampusExit}
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    color: "purple",
                    fontSize: "12px",
                  }}
                >
                  CAMPUS ENTERED :
                  {item.CampusEntry}
                </div>
              </div>
            </Card>
                ))} 
          {  Header.dashboardData  &&  Header.dashboardData.map((item)=>(
            <Card className="col-md-4 ml-3 mr-5 mb-2" style={{ backgroundColor: "#EAEDED ", borderRadius:"20px" }}>
            <div
                  style={{
                    fontSize: "20px",
                    color: "white",
                    backgroundColor: "#2874A6",
                    borderRadius:"5px",
                    textAlign:'center'
                  }}
                >
                 TOTAL STATUS
                </div>
              <div
                className="ml-5"
                style={{ marginTop: "10px", color: "purple",  fontSize: "12px"}}
              >
                TOTAL :{item.total}
              </div>

              <div
                className="ml-5"
                style={{ marginTop: "10px", color: "purple",  fontSize: "12px" }}
              >
                Unplanned :{item.tripUnplanned}
              </div>

              <div
                className="ml-5"
                style={{ marginTop: "10px", color: "purple", fontSize: "12px" }}
              >
                Planned :{item.tripPlanned}
              </div>

              <div
                className="ml-5"
                style={{ marginTop: "10px", color: "purple",  fontSize: "12px" }}
              >
                Exited :{item.exited}
              </div>

              {/* <h3 style={{marginTop:"10px", color:"purple", fontSize:"20px"}}>GATE PASS APPLIED</h3>
            <h3 style={{marginTop:"10px", color:"purple",fontSize:"20px"}}>CAMPUS EXITED</h3>
            <h3 style={{marginTop:"10px", color:"purple",fontSize:"20px"}}>CAMPUS ENTERED</h3>
            <h3 style={{marginTop:"10px"}}></h3>
            <h3 style={{marginTop:"10px"}}></h3> */}
            </Card>
          ))}
          </div>

          <div className=" ">
            <MaterialTable
              title={
                <div>
                <div
              className="ml-4"
              style={{
                color: "#CB7C24",
                fontWeight: "revert",
                fontFamily: "fantasy",
                fontSize: "20px",
              }}
            >
          
              DashBoard
            </div>
            <hr
              style={{
            marginTop:"1px",
            marginLeft:"20px",
                border: " 3px solid rgb(150, 150, 150)",
              }}
            ></hr>
            </div>
              }
              columns={columns}
               data={data}

              options={{
                actionsColumnIndex: -1,
                search: false,
              //  paging: false,
               // showTitle:false,
               // width: "100px",
                padding:"dense",
                pageSize:20,
                paging: false,
                pageSizeOptions:[20,40,60],
                rowStyle:{
                  fontSize:12
                },
               
                headerStyle: {
                  backgroundColor: "#01579b",
                  color: "#FFF",
                 
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
