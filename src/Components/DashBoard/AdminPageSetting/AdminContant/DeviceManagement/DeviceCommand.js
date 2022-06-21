import React, { Component } from "react";
import { Card } from "react-bootstrap";
import CommandImage from "../../../../../Assets/Command.jpg";
import Devices from "../DeviceCommandComponent/Devices";
import Command from "../DeviceCommandComponent/Command";
import Status from "../DeviceCommandComponent/Status";

import {getCommandList} from "../../../../../Actions";
import { connect } from "react-redux";

 class DeviceCommand extends Component {

  constructor(props){
    super(props);
    this.props.getCommandList();
  }
  
  state = {
    Device: true,
    Command: false,
    Status: false,
   
  };

  handleDevices = () => {
    this.setState({ Device: true });
    this.setState({ Command: false });
    this.setState({ Status: false });
  };
  handleCommand = () => {
    this.setState({ Device: false });
    this.setState({ Status: false });
    this.setState({ Command: true });
 
  };
  handleStatus = () => {
    this.setState({ Device: false });
    this.setState({ Status: true });
    this.setState({ Command: false });
  };

  render() {
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
              src={CommandImage}
              alt="Admin"
              width={50}
              style={{ paddingRight: "10px" }}
            />
            Device Command
          </div>
          <hr
            style={{
              margin: "auto 20px",
              border: " 3px solid rgb(150, 150, 150)",
            }}
          ></hr>

          <div
            className="col-md-11 center mt-4"
            style={{ alignItems: "center"}}
          >
            <Card className=" pb-4  " style={{ backgroundColor: "#D6DBDF" }}>
              <p
                className=""
                style={{ fontFamily: "cursive", backgroundColor: "gray" }}
              >
                <button
                  className="mr-1"
                  style={{ backgroundColor: "#2471A3"}}
                  onClick={this.handleDevices}
                >
                  {" "}
                  Devices
                </button>
                <button
                  className="mr-1"
                  style={{ backgroundColor: "#2471A3" }}
                  onClick={this.handleCommand}
                >
                  Command
                </button>
                <button
                  className="mr-1"
                  style={{ backgroundColor: "#2471A3" }}
                  onClick={this.handleStatus}
                >
                  Status
                </button>
              </p>

                {this.state.Device == true && <Devices />}
                {this.state.Command == true && <Command />}
                {this.state.Status == true && <Status />}
              </Card>
        
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({AdminPageReducers }) => {
  const {SelectedHostel,
    hostelList
  } =AdminPageReducers

  return{
    SelectedHostel,
    hostelList
  }

}
const mapDispatchToProps = {
  getCommandList,

};
export default connect(mapStateToProps, mapDispatchToProps)(DeviceCommand);