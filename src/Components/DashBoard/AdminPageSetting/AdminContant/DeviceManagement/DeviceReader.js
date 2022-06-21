import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MaterialTable from "material-table";
import AddNewDevice from "./AddNewDevice";
import { Link } from "react-router-dom";
import {getReaderSetting} from "../../../../../Actions/demo";
import { TableHead, TableCell, TableRow, TableBody } from "@material-ui/core";
import DoneIcon from '@mui/icons-material/Done';
import deviceReader from '../../../../../Assets/deviceReader.png';


export default function DeviceReader(){
//const Header = useSelector((state)=>state)
const dispatch = useDispatch();
useEffect(() => {dispatch(getReaderSetting());
},[dispatch]);
const readerdata = useSelector((state) => state.demo);
 const details = readerdata.displayReader;
const columns = [
  {
    title: "S.No",
    field: "id",
    render: (rowData) => rowData.tableData.id + 1,
  },
 
  {
    title: "DeviceId",
    field: "deviceId",
  },
  {
    title: "DeviceModal",
    field: "deviceModal",
  },
  {
    title: "Description",
    field: "description",
  },
  {
    title: "Place",
    field: "place",
  },
  {
    title: "SIM phonenumber",
    field: "phonenumber",
  },
  {
    title: "IMEI number",
    field: "iMEInumber",
  },
  {
    title: "Is Active",
    field: "isActive",
  },
]

 const data = details && details.map((item) => ({
        isActive:  (
          <DoneIcon
            color={(item.status == "1" && "success") || "dark"}
          />
        ),
        description:item.Description,
        deviceId: item.ReaderId,
        deviceModal: item.Model,
        place:item.AccessPoint == "1" && "Gatepass" || item.AccessPoint == "2" && "Entry" || "Exit",
        phonenumber: item.deviceIp,
        iMEInumber: item.deviceImei,
}));

return (
  console.log("view deavice"),
  <>
    <div class="content">
      <div className="ml-1" style={{ marginTop: "90px" }}>
       
        <MaterialTable
        title={
          <div>
          <div
              className="ml-2"
              style={{
                color: "#CB7C24",
                fontWeight: "revert",
                fontFamily: "fantasy",
                fontSize: "20px",
              }}
            >
              <img
              src = {deviceReader}
              width={30}
              height={30}>
              </img>
               Reader/Device Setting
            </div>
            <hr
              style={{
                margin: "auto 1px",
                border: " 3px solid rgb(150, 150, 150)",
              }}
            ></hr>
        </div>
        }
         columns={columns}
         data={data}
       // onRowClick={handleClick}
       components={{
        Header: (props) => {
          return (
            <>
              <TableHead>
                <TableRow>
                <TableCell
                      colSpan={4}
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
                    <Link to="/Component/AddNewDevice">
                    <button className=" btn btn-primary text-white mb-2 responsive" >
                    Add
                    </button>
                    </Link>
                </TableCell>
                <TableCell
                      colSpan={1}
                      align="center"
                    >
                    <Link to="/Component/AdminSetting">
                    <button className=" btn btn-primary text-white mb-2 ml-2 mr-3 responsive">
                    Back
                    </button>
                    </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                    <TableCell align="left" style={{ backgroundColor: "#01579b", color: "#FFF" }}>
                      #
                    </TableCell>
                    <TableCell align="center" style={{ backgroundColor: "#01579b", color: "#FFF" }}>
                    DeviceId
                    </TableCell>
                    <TableCell align="center" style={{ backgroundColor: "#01579b", color: "#FFF" }}>
                    DeviceModal
                    </TableCell>
                    <TableCell align="center" style={{ backgroundColor: "#01579b", color: "#FFF" }}>
                    Description
                    </TableCell>
                    <TableCell align="center" style={{ backgroundColor: "#01579b", color: "#FFF" }}>
                    Place
                    </TableCell>
                    <TableCell align="center" style={{ backgroundColor: "#01579b", color: "#FFF"}}>
                    SIMphonenumber
                    </TableCell>
                    <TableCell align="center" style={{ backgroundColor: "#01579b", color: "#FFF" }}>
                    IMEInumber
                    </TableCell>
                    <TableCell align="left" style={{ backgroundColor: "#01579b", color: "#FFF" }}>
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
          rowStyle:{
            fontSize:"12px"
          },
        }}
      />
    
  </div>
  </div>
      </>

    );
}