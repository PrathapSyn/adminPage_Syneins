
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TravelStatus from "./TravelStatus";
import "@fancyapps/ui/dist/fancybox.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../../Styles/popup.css";
import StatusView from "../../Assets/StatusView.png";
import { getManualdata } from "../../Actions";
import { useDispatch } from "react-redux";
import { InputChange } from "../../Actions"
import SmsSuccess from "../../Assets/smsSend.jpg";
import SmsFailed from "../../Assets/smsFailed.jpg";
import travelDesk from "../../Assets/travelDesk.png";
import { getTravelSortData } from "../../Actions"
import MaterialTable from "material-table";
import Tooltip from "@material-ui/core/Tooltip";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import UpdateRowDialog from "./NewDialog";

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

export default function TravelDesk() {

    const AdminPageReducers = useSelector((state) => state.AdminPageReducers);
    const dispatch = useDispatch();
    // const handleGetData = () => {
    //   dispatch(getTravelDeskData(AdminPageReducers));
    // }
    useEffect(() => {dispatch(getTravelSortData({
      fId: "0", hstId: AdminPageReducers.SelectedHostel,
      status: "1"
    }));
    },[dispatch]);
    
    
    const handle = (val) => {
      console.log("handleClick to get Id", val.tripId)
  
      dispatch(InputChange({
        props: "TravelDeskId",
        value: val.Id,
        error: "TravelDeskIdError",
      }));
      dispatch(InputChange({
        props: "institutionId",
        value: val.institutionId,
        error: "TravelDeskIdError",
      }));
      dispatch(InputChange({
        props: "uid",
        value: val.tripId,
        
      }));
    }
  
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
  
    const setModalIsOpenToTrue = () => {
      setModalIsOpen(true);
    };
  
    const setModalIsOpenToFalse = () => {
      setModalIsOpen(false);
    };
  
  
    const handleGetManual = () => {
      dispatch(getManualdata(AdminPageReducers));
      setModalIsOpenToFalse();
     
    }
  
    const [openDialog, setOpenDialog] = useState(false);
    const [rowToUpdate, setRowToUpdate] = useState([]);
    
    const handleOpenDialog = () => {
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
  
  
    const updateDetails = (val) => {
              console.log("val value is",val);
      dispatch(InputChange({
        props: "TravelDeskId",
        value: val.Id,
        error: "TravelDeskIdError",
      }));
      dispatch(InputChange({
        props: "institutionId",
        value: val.institutionId,
        error: "TravelDeskIdError",
      }));
      dispatch(InputChange({
        props: "uid",
        value: val.tripId,
        
      }));
      debugger;
      setOpenDialog(true);
      let details;
      details = [];
      
      console.log("donation details to update: ", details);
      setRowToUpdate(details);
    };

    const columns = [
        { title: "SINo", render: (rowData) => rowData.tableData.id + 1 },
        { title: "StudentName", field: "Name" },
        { title: "StudentRollNo", field: "RollNO" },
        { title: "Institution", field: "Institution" },
        { title: "RoomNo", field: "RoomNo" },
        { title: "TripTravelStatus", field: "TripTravelStatus" },
        { title: "GatePassID", field: "GatePassID" },
        { title: "SMS", field: "SMS" },
        { title: "Status", field: "Status" },
        { title: "manual", field: "manual" },
      ];

console.log("vvdfvfdvfvdfvfdvdvd",AdminPageReducers.travelDeskDisplay)

const data= AdminPageReducers.travelDeskDisplay && AdminPageReducers.travelDeskDisplay.map((item) => (
    {

    RollNO:item.rollNo,
    Institution:item.institution,
           Name:item.Name,
           RoomNo:item.roomNo,
           TripTravelStatus: (item.tripStatus == "-" &&   <div><i class="zmdi zmdi-badge zmdi-hc-2x" style={{ color: "black" }}>
        </i> None</div> ||
    
      item.tripStatus == "1" &&   <div><i class="zmdi zmdi-badge-check zmdi-hc-2x" style={{ color: "yellow" }}>
        </i> Gate pass Applied</div> ||
    
      item.tripStatus == "2" &&   <div><i class="zmdi zmdi-badge-check zmdi-hc-2x" style={{ color: "red" }}>
        </i> exit</div> ||
     
      item.tripStatus == "3" &&   <div><i class="zmdi zmdi-badge-check zmdi-hc-2x" style={{ color: "green" }}>
        </i>Entered</div> ||
      
      item.tripStatus == "4" &&   <div><i class="zmdi zmdi-badge-check zmdi-hc-2x" style={{ color: "brown" }}>
        </i>Cancelled Trip</div>),
    
     
    GatePassID:item.gatePassNo,
    SMS:item.smsStatus == "1" && <div><img src={SmsSuccess} width={30} height={30}></img></div> || <div><img src={SmsFailed} width={30} height={30}></img></div>,
    Status:<Popup
          trigger={
            <div
              style={{ fontSize: "13px", backgroundColor: "opacity", opacity: "5rem", borderColor: "black" }}
            >
              <img
                src={StatusView}
                width={40}
                height={30}
                onClick={() => { handle(item) }} key={item.Id, item.institutionId, item.tripId}
              ></img>


            </div>
          }
          position="left center"
        >
          <div>
            <TravelStatus />{" "}
          </div>
        </Popup>,

        manual:   <Tooltip title="Press to update">
            <BorderColorIcon
              // className={classes.borderIcon}
             // onClick={(e) => updateDetails(e,item.Id)}
              onClick={() => updateDetails(item)} key={item.Id, item.institutionId, item.tripId}
            />
          </Tooltip>
    }
))


  return (
      <>
         <UpdateRowDialog
        open={openDialog}
        handleOpenDialog={handleOpenDialog}
        handleCloseDialog={handleCloseDialog}
        // columns={myColumns}
        // row={rowToUpdate}
        // active={active}
      />
       <div class="content">
          <div className="ml-2" style={{ marginTop: "90px" }}>
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
                src={travelDesk}
                width={50}
                height={50}>
              </img>
              Travel Desk Student Status View
            </div>
            <hr
              style={{
                margin: "auto 20px",
                border: " 3px solid rgb(150, 150, 150)",
              }}
            ></hr>
            <div className="row ">
              <div className="row col-12 mt-3" style={{ marginLeft: "1rem" }}>
                <div className="row mr-4 ml-5">
                  <label for="accountId">
                    <b>Student Group</b>
                  </label>
                  {/* {
                  AdminPageReducers.StudentGroupDropDown.map((item) => ( */}
                  <select
                    id="groupId"
                    className="form-control"
                    style={{
                      width: "150px",
                      textAlign: "50px",
                      marginLeft: "1rem",

                    }}
                    onChange={(val) => {
                      
                      dispatch(
                        InputChange({
                          props: "groupId",
                          value: val.target.value,
                          error: "groupIdError",
                        })
                      );
                    }}
                  >
                    <option>select...</option>
                    <option value="0">GroundFloor</option>

                  </select>
                  {/* <Button className="mb-3" style={{ marginLeft: "2rem" }} onClick={handleGetData}>Get</Button> */}
                </div>
                {/* ))} */}
                <label className="ml-5 " for="accountId">
                  <b>Order by</b>
                </label>
                <select
                  id="groups"
                  className="form-control"
                  style={{
                    width: "150px",
                    textAlign: "50px",
                    marginLeft: "1rem",
                  }}
                  onChange={(val) => {
                    dispatch(getTravelSortData({
                      fId: AdminPageReducers.groupId, hstId: AdminPageReducers.SelectedHostel,
                      status: val.target.value
                    }));
                    dispatch(
                      InputChange({
                        props: "orderBy",
                        value: val.target.value,
                        error: "orderByError",
                      })
                    );
                  }}
                  disabled={AdminPageReducers.groupId == ""}
                >
               
                  <option value="1">Name</option>
                  <option value="2">StudentId</option>
                  <option value="3">RoomNo</option>
                  <option value="4">TripTravelStatus</option>
                  <option value="5">SMS Status</option>
                  <option value="6">SMS Pending</option>
                  <option value="7">Gate Pass Applied</option>
                  <option value="8">Exited</option>
                </select>
                {/* <input
                  class="btn btn-primary ml-5 mb-4 mr-2"
                  type="reset"
                  value="Download"
                  // onClick={}
                  style={{ backgroundColor: "#A52A2A", float: "left" }}
                ></input> */}
              </div>
            </div>

            <div className="col-md-12 mt-1">
        <MaterialTable
          title="Free Action Preview"
          columns={columns}
          data={data}        

          options={{
            showTitle:false,
            pageSize:10,
            rowStyle:{
              fontSize:12
            },
            headerStyle:{
               backgroundColor:"#01579b",
               color:"white"
            }
          }}
        />

        </div>
        </div>
        </div>
        </>
  )
}












