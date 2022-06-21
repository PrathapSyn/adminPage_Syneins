import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import { getHostelAccount } from "../../../../../Actions";
import Demo from "../../../../../Actions/demo";
import { TableHead, TableCell, TableRow, TableBody } from "@material-ui/core";
import hostelImage from '../../../../../Assets/hostelImage.png'


export default function HostelAccount(){

  const dispatch = useDispatch();
  useEffect(() => {dispatch(getHostelAccount());
},[dispatch]);


const hosteldata = useSelector((state) => state.demo);
 const details = hosteldata.displayHostel;
const columns = [
  {
    title: "S.No",
    field: "id",
    render: (rowData) => rowData.tableData.id + 1,
  },
  {
    title: "AccountId",
    field: "accountId",
  
  },
  {
    title: "HostelName",
    field: "hostelName",
  },
  {
    title: "WardenName",
    field: "wardenName",
  },
  {
    title: "Is Active",
    field: "isActive",
  },
]
const data = details && details.map((item)=>({
  accountId:item.AccountID,
  hostelName:item.HostelName,
  wardenName:item.WardenName,
  isActive:item.isActive
}))

return (
  console.log("view hostel"),
        <>
         <div class="content">
      <div className="ml-1" style={{ marginTop: "90px"}}>
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
              src = {hostelImage}
              width={30}
              height={30}>
              </img>
              HostelSetting
            </div>
            <hr
              style={{
                margin: "auto 20px",
                border: " 3px solid rgb(150, 150, 150)",
              }}
            ></hr>

           
        <MaterialTable 
         columns={columns}
         data={data}
         components={{
          Header: (props) => {
            return (
              <>
                <TableHead>
                  <TableRow>
                  <TableCell
                        colSpan={1}
                        align="right"
                       
                      >
                  </TableCell>
                  <TableCell
                        colSpan={1}
                        align="right"
                      >
                  </TableCell>
                  <TableCell
                        colSpan={1}
                        align="right"
                      >
                  </TableCell>
                  <TableCell
                        colSpan={1}
                        align="right"
                      >
                      <Link to="/Component/Admin/HostelSetting">
                      <button className=" btn btn-primary text-white mb-2 responsive" >
                        Add
                      </button>
                      </Link>
                  </TableCell>
                  <TableCell
                        colSpan={1}
                        align="left"
                      >
                      <Link to="/Component/AdminSetting">
                      <button className=" btn btn-primary text-white mb-2 ml-2 mr-3 responsive">
                        Back
                      </button>
                      </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" style={{ color: "white" , backgroundColor:"#01579b"}}>
                    #
                    </TableCell>
                    <TableCell align="left" style={{ color: "white",backgroundColor:"#01579b" }}>
                    AccountId
                    </TableCell>
                    <TableCell align="left" style={{ color: "white" ,backgroundColor:"#01579b"}}>
                    HostelName
                    </TableCell>
                    <TableCell align="left" style={{ color: "white",backgroundColor:"#01579b" }}>
                    WardenName
                    </TableCell>
                    <TableCell align="left" style={{ color: "white",backgroundColor:"#01579b" }}>
                    Is Active
                    </TableCell>
                </TableRow>
              </TableHead>
              </>
              )}
              }}
        options={{
          actionsColumnIndex: -1,
          search: false,
          paging: false,
            width: "100px",
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
          rowStyle: {
            fontSize:12,
          },
          showTitle:false,
        }}
      />
    
  </div>
  </div>
      </>

    );
}