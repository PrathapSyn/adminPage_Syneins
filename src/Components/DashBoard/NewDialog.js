import React, { useState, useEffect } from "react";
//material-ui components
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { getManualdata } from "../../Actions";
import { useDispatch } from "react-redux";
import { InputChange } from "../../Actions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    padding: "0"
  },
  subtitleRight: {
    margin: "20px 0 10px 0",
    backgroundColor: "blue",
    padding: "10px 30px 10px 40px",
    borderRadius: "0 30px 30px 0",
    color: "white",
    position: "relative",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    marginLeft: "inherit",
    width: "fit-content"
  },
  field: {
    // height: '50vh',
    width: "fit-content",
    // borderRadius: ({isMobile}) => isMobile ? "inherit" : '20px',
    margin: "10px 20px",
    "& .MuiOutlinedInput-input": {
      padding: "18.5px 27px"
    }
  },
  fieldDate: {
    // height: '50vh',
    width: "fit-content",
    // borderRadius: ({isMobile}) => isMobile ? "inherit" : '20px',
    margin: "10px 20px",
    "& .MuiOutlinedInput-input": {
      padding: "18.5px 5px"
    }
  }
});

function NewDialog({
  open,
  handleOpenDialog,
  handleCloseDialog,
  columns,
  row,
  active
}) {
  // debugger;
  const classes = useStyles();
//   const [values, setValues] = useState({
//     id: row.length > 0 ? row[0].id : "", //disabled
//     age: row.length > 0 ? row[0].age : "", //disabled
//     displayName: row.length > 0 ? row[0].displayName : ""
//   });

//   useEffect(() => {
//     if (active === "customer") {
//       setValues({
//         id: row.length > 0 ? row[0].id : "", //disabled
//         age: row.length > 0 ? row[0].age : "", //disabled
//         displayName: row.length > 0 ? row[0].displayName : ""
//       });
//     } else {
//       setValues({
//         id: row.length > 0 ? row[0].id : "", //disabled
//         price: row.length > 0 ? row[0].price : "", //disabled
//         displayName: row.length > 0 ? row[0].displayName : ""
//       });
//     }
//   }, [row[0]]);

  const handleClickOpen = () => {
    handleOpenDialog();
    // handleOpenDialog(true)
    // setOpen(true);
  };

  const handleClose = () => {
    // if (active === "customer") {
    //   setValues({ id: "", age: "", displayName: "" });
    // } else {
    //   setValues({ id: "", price: "", displayName: "" });
    // }
    handleCloseDialog();
  };

  const handleUpdateDetails = (name) => (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    // setValues({ ...values, [name]: event.target.value });
  };

  const saveUpdatedDetails = () => {
    // alert('you updated details!')
    handleClose();
  };

  const dispatch = useDispatch();
  const AdminPageReducers = useSelector((state) => state.AdminPageReducers);
  const handleGetManual = () => {
    dispatch(getManualdata(AdminPageReducers));
    handleClose();
  }

  return (
    // <div>
    // Button variant="outlined" color="primary" onClick={handleClickOpen}>
    //   Slide in alert dialog
    // </Button>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-slide-title" style={{ padding: "0",backgroundColor:"whitesmoke"}}>
        <Grid container justify={"space-between"}>
          <Grid item xs={10}>
            <div className={classes.subtitleRight}>
              <Typography variant={"h5"} align={"left"}>
               Manual Apply
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            container
            justify={"center"}
            alignItems={"center"}
            direction={"column"}
            xs={2}
          >
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>

      <DialogContent dividers  style={{backgroundColor:"#D8FAFA"}}>
        {/* maybe to do smart form that detect what he get from the props (column & row)  */}
        <form noValidate autoComplete="off">
          {" "}
          {/*onSubmit={handleSubmit} className={classes.form} */}
          <Grid
            container
            justify={"center"}
            alignItems={"center"}
            direction={"column"}
          >
            {/* <TextField
              disabled
              // color={'secondary'}
              className={classes.field}
              variant={"outlined"}
              name="id"
              type={"text"}
             label={columns[0].label}
              value={row.length > 0 ? row[0].id : ''}
              defaultValue={row.length > 0 ? row[0].id : ''}
             value={values.id}
            /> */}
            {/* <TextField
              disabled
              // color={'secondary'}
              className={classes.field}
              variant={"outlined"}
            //  name={active === "customer" ? "age" : "price"}
              type={"text"}
            //  label={columns[1].label}
              // value={invoiceName}
              // value={row.length > 0 ? row[0].invoiceName : ''}
            //  value={active === "customer" ? values.age : values.price}
            //   onChange={handleUpdateDetails(
            //     active === "customer" ? "age" : "price"
            //   )}
            /> */}
            {/* <TextField
              // required
              // color={'secondary'}
              className={classes.field}
              variant={"outlined"}
              name="displayName"
              type={"text"}
            //   label={columns[2].label}
            //   // defaultValue={displayName}
            //   value={values.displayName}
            //   onChange={handleUpdateDetails("displayName")}
            /> */}
{AdminPageReducers.travelDeskDisplay && AdminPageReducers.travelDeskDisplay.map((item) => (

AdminPageReducers.TravelDeskId == item.Id && (
    <div
    
    variant={"outlined"}>
<div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                <div className="row">
                  <div className="ml-5 col-md-3">
                    <label for="inputPassword2">ID</label>
                  </div>
                  <div className="col-md-5">
                    {/* {AdminPageReducers.displayTravelStatus.RollNo} */}
                    {item.rollNo}

                  </div>
                </div>
              </div>
              <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                <div className="row">
                  <div className="ml-5 col-md-3">
                    <label for="inputPassword2">Name</label>
                  </div>
                  <div className="col-md-5">

                    {/* {AdminPageReducers.displayTravelStatus.studentName} */}
                    {item.Name}

                  </div>

                </div>
              </div>
              <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                <div className="row">
                  <div className="ml-5 col-md-3">
                    <label for="inputPassword2">Command </label>
                  </div>
                  <div className="col-md-5">

                    <select className="custom-select d-block w-100"
                      onChange={(val) => {
                        dispatch(
                          InputChange({
                            props: "gatePassMode",
                            value: val.target.value,
                            error: "gatePassModeError",
                          })
                        );
                      }}

                    >
                      <option value="0">choose</option>
                      {
                        item.tripStatus == "-"
                        && (

                          <option value="1">Gate Pass</option>
                        )}
                         {
                        item.tripStatus == "0"
                        && (

                          <option value="1">Gate Pass</option>
                        )}
                         {
                        item.tripStatus == "3"
                        && (

                          <option value="1">Gate Pass</option>
                        )}
                          {
                       item.tripStatus == "4"
                        && (

                          <option value="1">Gate Pass</option>
                        )}



                      {item.tripStatus == "1"
                        && (

                          <option value="2">Manual Exit</option>)}
                      {item.tripStatus == "2"
                        && (
                          <option value="3">Manual Entry</option>)}
                      {item.tripStatus == "1"
                        && (
                          <option value="4">Cancel Trip</option>)}
                  


                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                <div className="row">
                  <div className="ml-5 col-md-3">
                    <label for="inputPassword2">Travel by</label>
                  </div>
                  <div className="col-md-5">
                    <select className="custom-select d-block w-100"
                      onChange={(val) => {
                        dispatch(
                          InputChange({
                            props: "travelBy",
                            value: val.target.value,
                            error: "travelByError",
                          })
                        );
                      }}
                      disabled={
                        item.tripStatus == "-" ||  item.tripStatus == "3" ||  item.tripStatus == "4" 
                      }

                    >
                      <option value="1">OWN</option>
                      <option value="2">By Bus</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group mx-sm-3 mb-2 ml-5">
                <div className="row">
                  <div className="ml-5 col-md-3">
                    <label for="inputPassword2">Remarks</label>
                  </div>
                  <div className="col-md-5">
                    <textarea
                      type="text"
                      className="form-control"
                      id="Remarks"
                      placeholder="Remarks"
                      values="description"
                      rows="4"
                      cols="50"

                    ></textarea>
                  </div>
                </div>
              </div>
              <Link to= { item.tripStatus == "-" && ( "/PrintGatePass") ||
              item.tripStatus == "3" && ( "/PrintGatePass") ||
              item.tripStatus == "4" && ( "/PrintGatePass")
      }> <Button
                  className="mr-4 ml-1 mt-4 pt-2 px-2 "
                  size={"large"}
                  variant={"contained"}
                  color="secondary"
                  style={{
                      float:"right",
                    backgroundColor: "#1D91EF",
                    color: "black",
                    borderRadius: "10px",
                  }}
                  onClick={handleGetManual}
                >
                  Apply
                </Button>
                </Link>
            
              </div>
                   )))}
          </Grid>
        </form>
      </DialogContent>
      {/* {AdminPageReducers.travelDeskDisplay && AdminPageReducers.travelDeskDisplay.map((item) => (

AdminPageReducers.TravelDeskId == item.Id && (
      <DialogActions  style={{backgroundColor:"#D8FAFA"}}>
        <Button
          type={"submit"}
          size={"large"}
          variant={"contained"}
          color="secondary"
          // color="primary"
          // className={classes.button}
          // endIcon={<CreateGroupIcon color={'#ffffff'}/>}
        //   onClick={saveUpdatedDetails}
        >
          save details
        </Button>

        <Link to= { item.tripStatus == "-" ||  item.tripStatus == "3" ||  item.tripStatus == "4" ||   item.tripStatus == "0" && ( "/PrintGatePass")
      }> <Button
                  className="mr-4 ml-1 mt-4 pt-2 px-2 "
                  size={"large"}
                  variant={"contained"}
                  color="secondary"
                  style={{
                      
                    backgroundColor: "#1D91EF",
                    color: "black",
                    borderRadius: "10px",
                  }}
                  onClick={handleGetManual}
                >
                  Apply
                </Button>
                </Link>
      </DialogActions>
)))} */}
    </Dialog>
    // </div>
  );
}

export default NewDialog;
