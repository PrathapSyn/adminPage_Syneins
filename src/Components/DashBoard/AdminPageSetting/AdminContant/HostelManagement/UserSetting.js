import React from "react";
import { Link } from "react-router-dom";
import User from "../../../../../Assets/User.png";
import { Table, TableBody, TableHead, TableCell } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import { useSelector } from "react-redux";
import userrights from "../../../../../Assets/userRights.png"
import { useDispatch } from "react-redux";
import { smsInputChange } from "../../../../../Actions";

export default function UserSetting() {

  const dispatch = useDispatch();

  const userList = useSelector(state => state.AdminPageReducers);
  console.log("userLIst",userList);
  const columns = [
    { title: "SINo", render: (rowData) => rowData.tableData.id + 1 },
    { title: "Hostel ID", field: "hostelId" },
    { title: "User ID", field: "userId",render: rowData => rowData.userId },
    { title: "User Role", field: "userRole" },
    { title: "Contact Name", field: "contactName" },
    { title: "Is Active", field: "Active" },
    { title: "Last Updated Date", field: "lastUpdatedDate" },
  ];
     const data = userList.userList && userList.userList.map((item) => (
      {
        hostelId: item.AccountID,
        userId: item.UserID,
        userRole: item.UserRole,
        contactName: item.ContactName,
        Active: item.IsActive,
        lastUpdatedDate: item.LastUpdateTime
      }
    ))

    const handleOnClick=(val,rowData)=>{
     console.log("ddsv",rowData.userId);
      dispatch(smsInputChange({
        props: "UserRightsId",
        value: rowData.userId,
     
      }));
    }
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
            src={User}
            alt="Admin"
            width={50}
            style={{ paddingRight: "10px" }}
          />
          User Settings
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
            localization={{ header: { actions:<pre style={{fontFamily:"times new roman",fontWeight:"bolder",fontSize:"15px"}}>User-Right</pre>} }}
            columns={columns}
            data={data}
            onRowClick={handleOnClick}
            actions={[
              {
                icon: () => (
                  <Link to="/Component/UserRights" styleName="margin: 5px"
                 // onClick={handleOnClick}
                  >
                     <img
                    src={userrights}
                    width={30}
                    height={30}></img>
                  
                    {/* <button
                      type="button"
                      className="btn btn-primary margin-3px"
                      styleName="margin: 3px"
                      style={{marginLeft:"-59px"}}
                    >
                      User-Rights
                    </button> */}
                  </Link>
                ),
                tooltip: "User-Right",
                
                //   onClick: handleEdit
              },

            //   (rowData) => ({
            //     icon: () => (
            //       <Link
            //         to="/Component/Admin/AddUpdateUser"
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
            //           Edit
            //         </Button>
            //       </Link>
            //     ),
            //     tooltip: "Edit Rights",
            //     //  onClick: handleChange1
            //   }),
            //   (rowData) => ({
            //     icon: "delete",
            //     tooltip: "Delete User",
            //     //  onClick: handleChange1
            //   }),
            //   {
            //     icon: () => (
            //       <Link
            //         to="/Component/Admin/AddUpdateUser"
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
             ]}
            options={{
              showTitle: false,
              paging:false,
              actionsColumnIndex: -1,
              searchFieldAlignment: "left",
              headerStyle : {
                backgroundColor: "#01579b",
                color: "#FFF",
              }
            }}
          />
        </Card>
      </div>
    </div>
  );
}
