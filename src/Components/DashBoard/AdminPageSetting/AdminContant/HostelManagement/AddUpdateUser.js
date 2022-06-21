import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import User from "../../../../../Assets/User.png";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {InputChange} from "../../../../../Actions/AdminPageAction";

export default function AddUpdateUser() {

  const dispatch = useDispatch();
  const Hostel = useSelector(state => state.AdminPageReducers)

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
          <div
            className="col-md-8 center mt-4"
            style={{ alignItems: "center"}}
          >
            <Card className=" pb-4  " style={{ backgroundColor: "#D6DBDF" }}>
              <p  className="pb-2 pt-2" style={{fontFamily: "cursive", backgroundColor: "#38476C",color:"whitesmoke"}}>
                Adding/Update User
              </p>

              <Form>
                <div class="form-group mx-sm-3 mb-2 ml-5">
                  <div className="row">
                  <div className="ml-4 col-md-3">
                      <label for="inputPassword2">Hostel ID<span style={{color:"red"}}>*</span></label>
                    </div>
                    <div className='col-md-5'>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                        value={Hostel.hostelId}
                        onChange={(val) => {
                         dispatch(InputChange({
                            props: "hostelId",
                            value: val.target.value,
                            error: "hostelIdError",
                          }));
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                  <div className="row">
                    <div className="ml-4 col-md-3">
                      <label for="inputPassword2">User ID <span style={{color:"red"}}>*</span></label>
                    </div>
                    <div className='col-md-5'>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                        value={Hostel.userId}
                        onChange={(val) => {
                         dispatch(InputChange({
                            props: "userId",
                            value: val.target.value,
                            error: "userIdError",
                          }));
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                  <div className="row">
                    <div className="ml-4 col-md-3">
                      <label for="inputPassword2">Password </label>
                    </div>
                    <div className='col-md-5'>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                       
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                  <div className="row">
                    <div className="ml-4 col-md-3">
                      <label for="inputPassword2">User Role <span style={{color:"red"}}>*</span></label>
                    </div>
                    <div className='col-md-5'>
                      <select className="custom-select d-block w-100"> 
                        <option>Choose Here...</option>
                          <option>Warden</option>
                          <option>Sub-Warden</option>
                          <option>Admin</option>
                          <option>SuperAdmin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                  <div className="row">
                    <div className="ml-4 col-md-3">
                      <label for="inputPassword2">Gender<span style={{color:"red"}}>*</span></label>
                    </div>
                    <div className='col-md-5'>
                      <select className="custom-select d-block w-100"> 
                      <option>Choose Here...</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                      
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group mx-sm-3 mb-2 ml-5">
                  <div className="row">
                  <div className="ml-4 col-md-3">
                      <label for="inputPassword2">Contact Name<span style={{color:"red"}}>*</span></label>
                    </div>
                    <div className='col-md-5'>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                       
                      />
                    </div>
                  </div>
                </div>
                
                <div class="form-group mx-sm-3 mb-2 ml-5">
                  <div className="row">
                  <div className="ml-4 col-md-3">
                      <label for="inputPassword2">Contact Number<span style={{color:"red"}}>*</span></label>
                    </div>
                    <div className='col-md-5'>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                       
                      />
                    </div>
                  </div>
                </div>
                
                <div class="form-group mx-sm-3 mb-2 ml-5">
                  <div className="row">
                  <div className="ml-4 col-md-3">
                      <label for="inputPassword2">Email Address</label>
                    </div>
                    <div className='col-md-5'>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                       
                      />
                    </div>
                  </div>
                </div>

                
                <div class="form-group mx-sm-3 mb-2 ml-5">
                  <div className="row">
                  <div className="ml-4 col-md-3">
                      <label for="inputPassword2">Is Active<span style={{color:"red"}}>*</span></label>
                    </div>
                    <div className='col-md-5'>
                      <input
                      class="form-check-input ml-2"
                      style={{ width: "20px", height: "20px" }}
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      />
                    </div>
                  </div>
                </div>

                <div style={{float:"right"}}>
                <Button
                className="mr-4 ml-4 mt-4 pb-2 pt-2 px-1 "
                style={{ backgroundColor: "#1D91EF",color:"black",borderRadius:"10px"}}
              >
                {" "}
                Update
              </Button>
             <Link to="/Component/Admin/UserSetting"><Button
                className="mr-4 mt-4 pb-2 pt-2 px-1 "
                style={{ backgroundColor: "#ED2E22", color:"black",borderRadius:"10px" }}
              >
                {" "}
                Cancel
              </Button></Link>
              </div>
              </Form>
            </Card>
        
          </div>
          <hr className="mt-4"
            style={{
              margin: "auto 20px",
              border: " 3px solid rgb(150, 150, 150)",
            }}
          ></hr>
        </div>
      </div>
    )
}
