import React from "react";
import { Link } from "react-router-dom";
import WardenImage from "../../../../../Assets/warden.jpg";
import { Table, TableBody, TableHead, TableCell } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import { useSelector } from "react-redux";

export default function Warden() {

  const wardenList = useSelector(state => state.AdminPageReducers)
    const columns = [
        { title: "SINo", render: (rowData) => rowData.tableData.id + 1 },
        { title: "Warden Name", field: "wardenName" },
        { title: "Warden ID", field: "wardenId" },
        { title: "Contact Number", field: "contactNumber" },
        { title: "Contact Email", field: "contactEmail" },
        { title: "Last Updated Time", field: "lastUpdatedTime" }
      ];
         const data = wardenList.wardenList && wardenList.wardenList.map((item) => (
          {
            wardenName: item.employee_name,
            wardenId: item.emp_id,
            contactNumber: item.phone_num,
            contactEmail: item.email_id,
            lastUpdatedTime: item.modified_date,
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
              src={WardenImage}
              alt="Admin"
              width={50}
              style={{ paddingRight: "10px" }}
            />
          Warden
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
              // actions={[
              //   {
              //     icon: () => (
              //       <Link to="/Component/warden/AddWarden" styleName="margin: 5px">
              //         <button
              //           type="button"
              //           className="btn btn-primary margin-5px"
              //           styleName="margin: 5px"
              //         >
              //           Edit
              //         </button>
              //       </Link>
              //     ),
              //     tooltip: "User-Right",
              //     //   onClick: handleEdit
              //   },
              //   (rowData) => ({
              //     icon: "delete",
              //     tooltip: "Delete User",
              //     //  onClick: handleChange1
              //   }),
              //   {
              //     icon: () => (
              //       <Link
              //         to="/Component/warden/AddWarden"
              //         styleName="margin: 5px"
              //       >
              //         <Button
              //           className=""
              //           style={{
              //             backgroundColor: "#1D91EF",
              //             color: "black",
              //             borderRadius: "10px",
              //           }}
              //         >
              //           {" "}
              //           ADD
              //         </Button>
              //       </Link>
              //     ),
              //     tooltip: "Add",
              //     isFreeAction: true,
              //     onClick: (event) => alert("You want to add a new Employee"),
              //   },
              //   {
              //     icon: () => (
              //       <Link to="/Component/AdminSetting">
              //         <Button
              //           className=""
              //           style={{
              //             backgroundColor: "#ED2E22",
              //             color: "black",
              //             borderRadius: "10px",
              //           }}
              //         >
              //           {" "}
              //           Cancel
              //         </Button>
              //       </Link>
              //     ),
              //     tooltip: "cancel",
              //     isFreeAction: true,
              //     //   onClick: (event) => alert("You want to add a new Employee")
              //   },
              // ]}
              options={{
                showTitle: false,
                paging:false,
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
