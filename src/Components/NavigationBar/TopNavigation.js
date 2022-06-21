import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DateAndTime from "./DateAndTime";
import { Navbar } from "react-bootstrap";

export default function TopNavigation() {
  return (
    <>
      <div  style={{position:"fixed"}}>
      <AppBar position='static' color='primary' >
          <Toolbar >
            <Typography variant="h6" component="div" style={{fontFamily:"times New Roman",
        fontWeight:"bolder",
        fontSize:"50px",
        color:"#E75276"}}>
           iConnect...
            </Typography>
            <Typography variant="h5" component="div" style={{paddingLeft:"150px" ,
            fontWeight:"bolder",fontFamily:"times New Roman"}}>
            Hostel Name N 
            </Typography>
            <Typography variant="h6" component="div" style={{paddingLeft:"220px",position :"acsolute",fontFamily:"times New Roman"}}>
           <DateAndTime/>
           
            </Typography>
          </Toolbar>
        </AppBar>


      </div>
    </>
  );
}
