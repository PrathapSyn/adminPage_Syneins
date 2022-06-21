import React from 'react';
import { Card } from 'react-bootstrap';
import WardenImage from "../../../../../Assets/warden.jpg";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function WardenAddUpdate() {
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
              src={WardenImage}
              alt="Admin"
              width={50}
              style={{ paddingRight: "10px" }}
            />
          Warden
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
                Adding/Update Warden
              </p>

              <Form>
                <div class="form-group mx-sm-3 mb-2 ml-5 mr-5">
                  <div className="row">
                  <div className="ml-4 col-md-3">
                      <label for="inputPassword2">Warden Name<span style={{color:"red"}}>*</span></label>
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
                      <label for="inputPassword2">Hostel Name<span style={{color:"red"}}>*</span></label>
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
                <div class="form-group mx-sm-3 mb-3 ml-5 mt-3">
                  <div className="row">
                    <div className="ml-4 col-md-3">
                      <label for="inputPassword2">Contact Number</label>
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
                <div class="form-group mx-sm-3 mb-3 ml-5">
                  <div className="row">
                  <div className="ml-4 col-md-3">
                      <label for="inputPassword2">Birth Date<span style={{color:"red"}}>*</span></label>
                    </div>
                    <div className='col-md-5'>
                    <div class="input-group date" data-provide="datepicker">
                    <input type="date" class="form-control"/>
   
                  </div>
                    </div>
                  </div>
                </div>

                <div class="form-group mx-sm-3 mb-3 ml-5">
                  <div className="row">
                  <div className="ml-4 col-md-3 mt-4">
                      <label for="inputPassword2">Contact Address<span style={{color:"red"}}>*</span></label>
                    </div>
                    <div className='col-md-5'>
                    <textarea
                        class="form-control "
                        id="exampleFormControlTextarea1"
                        rows="3"
                        cols="30"
                        
                      ></textarea>
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

                <div style={{float:"right"}}>
                <Button
                className="mr-4 ml-4 mt-4 pb-2 pt-2 px-1 "
                style={{ backgroundColor: "#1D91EF",color:"black",borderRadius:"10px"}}
              >
                {" "}
                Update
              </Button>
             <Link to="/Component/Admin/Warden"><Button
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
          {/* <hr className="mt-4"
            style={{
              margin: "auto 20px",
              border: " 3px solid rgb(150, 150, 150)",
            }}
          ></hr> */}
        </div>
      </div>
    )
}
