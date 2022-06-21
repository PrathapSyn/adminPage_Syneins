 import { Table, TableBody, TableCell, TableHead } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {SelectedCommand} from "../../../../../Actions";
import { InputChange } from "../../../../../Actions";
import { postTheCommand } from "../../../../../Actions";
import MaterialTable from "material-table";

export default function Command() {
  const handleSend=()=>{
    dispatch(postTheCommand(AdminPageReducers));
  }

  const dispatch = useDispatch();
 const handleClick=(val,rowData)=>{
 // console.log("this is the Selected COmmadn",rowData);
        dispatch(SelectedCommand(rowData));
      
  }
  const AdminPageReducers = useSelector(state => state.AdminPageReducers);
   console.log("AdinPageReducerws",AdminPageReducers);
 
  const columns=[

    { title: 'SINo', render: rowData => rowData.tableData.id + 1 },
    { title: 'Name', field: 'Name' },
    { title: 'Type', field: 'Type' },
    { title: 'Command Send/Receive', field: 'Command' }, 
  ];

  const data= AdminPageReducers.commandList && AdminPageReducers.commandList.map((item)=>(
    {
      Name: item.Name,
      Type: item.Type,
      Command: item.command,
    }
    ))
  
  return (
    <>

      <Card className="" style={{ backgroundColor: "#D6DBDF" }}>
        {/* <Table class="table table-sm table-hover"> */}
        <MaterialTable
      columns={columns}
      data={data}       
      onRowClick={handleClick}
      options={{
        showTitle: false,
        paginationType:"stepped",
        padding: "0px 16px",
        search:false,
        headerStyle : {
          backgroundColor: "#01579b",
          color: "#FFF",
        },
        rowStyle:{
          fontSize:13,
         
        }
   }}
    />
         
        {/* </Table> */}
      </Card>

      <Card className="mt-4 pr-4 " style={{ backgroundColor: "#D6DBDF" }}>
        <p style={{ fontFamily: "times New Roman", fontWeight: "bolder" }}>
          Send Command
        </p>

        <div class="form-group mx-sm-3 ">
          <div className="row">
            <div className=" mb-3 ml-4 mr-5">
              <label for="inputPassword2">Name</label>
            </div>
            <div className="ml-5">
              <input
                type="text"
                class="form-control"
                id="inputPassword2"
             
                value={AdminPageReducers.SelectedTheCommand.Name}
                disabled
              />
            </div>
          </div>
        </div>
       
          <div className="row">
            <div className="ml-5 mt-2 mr-5">
              <label for="inputPassword2">Format</label>
            </div>
            <div className="ml-5">
            <input
              type="text"
              class="form-control"
              id="inputPassword2"
              width={30}
              value={AdminPageReducers.SelectedTheCommand.Type == "1" && "ASCII"}
              disabled
            >
             
            </input>
            </div>
          </div>
      

        <div class="form-group mt-4">
          <div className="row">
            <div className="mt-3 ml-5 mr-5">
              <label for="textArea">Command</label>
            </div>
            <div className="ml-4">
              <textarea
                class="form-control"
                id="textArea"
                rows="3"
                style={{backgroundColor:"#FDEBD0"}}
                value={AdminPageReducers.SelectedTheCommand.Command}
                disabled
              ></textarea>
            </div>
          </div>
        </div>
<div>
    <div className="row">
    <p className="pl-4" style={{fontFamily:'cursive'}}>Command Will be Send to devices Once it Connected to Server</p>
        <div class="dropdown">
        <div className="ml-5" style={{fontWeight:"bolder"}}>
              <label for="inputPassword2">Device</label>
            </div>
          <div className="row ml-3">
        
          
            <select  style={{borderRadius:"10px",backgroundColor:"cornsilk"}}
             value={AdminPageReducers.deviceIdCommand}
             onChange={(val) => {
              dispatch(InputChange({
                 props: "deviceIdCommand",
                 value: val.target.value,
                 error: "deviceIdCommandError",
               }));
             }}>
            {AdminPageReducers.hostelList && AdminPageReducers.hostelList.map((item)=>(

              <option value={item.hostel_id}>{item.hostel_name}</option>
              ))}
            </select>
          
            <Button
                className="" 
                style={{ backgroundColor: "#CF4313",marginLeft:"140px",color:"black"}}
                onClick={handleSend}
              >
                {" "}
                Send
              </Button>
          </div>
        </div>
        </div>
        </div>
      </Card>
    </>
  );
}
