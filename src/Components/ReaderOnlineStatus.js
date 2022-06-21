import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TableHead, TableCell, TableRow, TableBody } from "@material-ui/core";
import MaterialTable from "material-table";
import {getReaderOnlineStatus} from "../Actions/demo";
import DoneIcon from '@mui/icons-material/Done';
import {readerStatusHeader} from "../Actions/demo";
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import onlineStatus from '../Assets/onlineStatus.jpg';
import {useState} from "react";
export default function ReaderOnlineStatus() {
  const [selected, setselected] = useState(new Date());
  const dispatch = useDispatch();
  
 
  useEffect(() => {dispatch(getReaderOnlineStatus());
    
},[dispatch]);
useEffect(() => { setInterval(() => {
  dispatch(getReaderOnlineStatus());
  dispatch(readerStatusHeader());
}, 120000);
    
},[dispatch]);
  useEffect(() => {dispatch(readerStatusHeader());
},[dispatch]);


const readeronlinedata = useSelector((state) => state.demo);
 const readerOnlinedetails = readeronlinedata.dispalyReaderStatus;
const columns = [
  {
    title: "S.No",
    field: "id",
    render: (rowData) => rowData.tableData.id + 1,
  },
  {
    title: "ReaderID",
    field: "readerId",
  },
  {
    title: "Modal",
    field: "modal",
  },
  {
    title: "AccessPoint",
    field: "accesspoint",
  },
  {
    title: "Reader Type",
    field: "readerType",
  },
  {
    title: "LastUpdated",
    field: "lastUpdated",
  },
  {
    title: "OfflineEventCount",
    field: "offlineEventCount",
  },
  {
    title: "Activation",
    field: "activation",
    render: (row) => (
      < DoneIcon  color="success"/>
    ),
  },
  {
    title: "Status",
    field: "status",
  
  },
]

const data = readerOnlinedetails && readerOnlinedetails.map((item)=>({

  status:   < SignalWifiStatusbar4BarIcon   color={item.status ==  "1" && "success" || "dark" }/>,
  readerId:item.ReaderId,
  modal:item.Model,
  accesspoint:item.AccessPoint == "1" && "Gatepass" || item.AccessPoint == "2" && "Entry" || "Exit",
  readerType:item.ReaderType == "1" && "Biometric" || "RFID",
  lastUpdated:item.lastUpdate,
  //devicertc:item.,
  offlineEventCount:item.offlineCount,

}
))
const Header = useSelector((state)=>state.demo);
const readerHeader = Header.dispalyReaderHeader;
console.log("readerHeader",readerHeader);
       
    return (
    <>    
    <div class="content">
      <div className="ml-2" style={{ marginTop: "90px" }}>
      
      <div className="row" >
        <div className="col-md-12">
       
        <MaterialTable 
        title={ <div><div
          className="ml-4"
          style={{
            color: "#CB7C24",
            fontWeight: "revert",
            fontFamily: "fantasy",
            fontSize: "20px",
          }}
        >
          <img
          src={onlineStatus}
          width={50}
          height={50}>
          </img>
         Reader Online Status
      
        </div>
        <hr
          style={{
            margin: "auto 10px",
            marginLeft:"25px",
            marginRight:"1px",
            border: " 3px solid rgb(150, 150, 150)",
          }}
        ></hr>
        </div>}
      columns={columns}
        data={data}
       //onRowClick={handleClick}
        components={{
          Header: (props) => {
            return (
              <>
                <TableHead>
                {readerHeader && readerHeader.map((item)=>(
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      align="right"
                    >
                    </TableCell>
                    <TableCell
                      colSpan={1}
                      align="right"
                    >
                    </TableCell>
                    <TableCell
                      colSpan={2}
                      align="right"
                    >
                    </TableCell>
                    <TableCell
                      colSpan={1}
                      align="right"
                      style={{ color: "blue",
                    fontSize:"20px" }}
                    >
                      Total ({item.TOTAL})
                    </TableCell>
                    <TableCell
                      colSpan={1}
                      align="right"
                      style={{ color: "green", fontSize:"20px" }}
                    >
                      online  ({item.ONLINE})
                    </TableCell>
                    <TableCell
                      colSpan={1}
                      align="right"
                      style={{ color: "red", fontSize:"20px" }}
                    >
                      offline ({item.OFFLINE})
                    </TableCell>
                    </TableRow>
                      ))}
                   <TableRow>

                    <TableCell align="left" style={{ backgroundColor:"#01579b",color:"white" }}>
                      #
                    </TableCell>
                    <TableCell align="left" style={{ backgroundColor:"#01579b",color:"white" }}>
                      Reader ID
                    </TableCell>
                    <TableCell align="left" style={{ backgroundColor:"#01579b",color:"white" }}>
                      Model
                    </TableCell>
                    <TableCell align="left" style={{ backgroundColor:"#01579b",color:"white" }}>
                      Access Point
                    </TableCell>
                    <TableCell align="left" style={{ backgroundColor:"#01579b",color:"white" }}>
                      Reader Type
                    </TableCell>
                    <TableCell align="left" style={{ backgroundColor:"#01579b",color:"white" }}>
                      LastUpdated
                    </TableCell>
                    <TableCell align="left" style={{ backgroundColor:"#01579b",color:"white" }}>
                      OfflineEvent Count
                    </TableCell>   
                    <TableCell align="left" style={{ backgroundColor:"#01579b",color:"white"}}>
                      Activation
                    </TableCell>
                    <TableCell align="left" style={{ backgroundColor:"#01579b",color:"white"}}>
                      Status
                    </TableCell>               
                  </TableRow> 
                </TableHead>
              </>
            );
          },
        }}
        // actions={[
        //   {
        //     icon: () => <Edit />,
        //     tooltip: "Edit User",
        //     onClick: handleClick,
        //   },
        // ]}
        options={{
          padding:"dense",
          actionsColumnIndex: -1,
          search: false,
          paging: false,
        
            width: "100px",
            columnResizable: true,
          headerStyle: {
              backgroundColor:"grey",
              color:"white"
          
          },
          rowStyle: {
            fontSize:12,
          },
        }}
      />            
      </div>
    </div>
        </div>
        </div>
        </>
    )
}
