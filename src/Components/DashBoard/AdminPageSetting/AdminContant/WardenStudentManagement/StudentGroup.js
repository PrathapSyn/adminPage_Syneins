import React from 'react';
import { Link } from "react-router-dom";
import StudentGroupImage from "../../../../../Assets/group.png";
import { Table, TableBody, TableHead, TableCell } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import { useSelector } from 'react-redux';

export default function StudentGroup() {

  const GroupList = useSelector(state => state.AdminPageReducers)
    const columns = [
      
        { title: "SINo", render: (rowData) => rowData.tableData.id + 1 },
        { title: "Student Groups", field: "studentGroupName" },
        { title: "Warden ID", field: "wardenId" },
        { title: "Notes", field: "notes" },
       
      ];
         const data = GroupList.studentGroupList && GroupList.studentGroupList.map((item) => (
          {
           studentGroupName: item.StudentGroup == "0" && "GROUND FLOOR",
            wardenId: item.SubWardenIncharge,
            notes: `total=${item.Total} ,RoomNo=${item.roomNo}`
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
              src={StudentGroupImage}
              alt="Admin"
              width={50}
              style={{ paddingRight: "10px" }}
            />
        Students Group
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
                paging:false,
                showTitle: false,
                actionsColumnIndex: -1,
                searchFieldAlignment: "left",
                headerStyle:{
                  backgroundColor: "#01579b",color: "#FFF"
                },
                rowStyle: {
                  fontSize:12,
                },
                paddingDefault:"2px"
              }}
            />
          </Card>
        </div>
      </div>
    )
}