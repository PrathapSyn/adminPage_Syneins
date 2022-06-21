import React,{Component} from 'react'
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class SetManual extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="content">
            <div className="" style={{ marginTop: "90px" }}>
                <Card className=" pb-4  " style={{ backgroundColor: "#D6DBDF" }}>
                  <p  className="pb-2 pt-2" style={{fontFamily: "cursive", backgroundColor: "#38476C",color:"whitesmoke"}}>
                    Edit Manual Mode
                  </p>
                  <Form>
                    <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                      <div className="row">
                      <div className="ml-5 col-md-3">
                          <label for="inputPassword2">ID</label>
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
                        <div className="ml-5 col-md-3">
                          <label for="inputPassword2">Name</label>
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
                        <div className="ml-5 col-md-3">
                          <label for="inputPassword2">Command </label>
                        </div>
                        <div className='col-md-5'>
                        <select className="custom-select d-block w-100"> 
                            <option>Choose Here...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="form-group mx-sm-3 mb-2 ml-5 mt-3">
                      <div className="row">
                        <div className="ml-5 col-md-3">
                          <label for="inputPassword2">Travel by</label>
                        </div>
                        <div className='col-md-5'>
                          <select className="custom-select d-block w-100"> 
                            <option>Choose Here...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                <div class="form-group mx-sm-3 mb-2 ml-5">
                      <div className="row">
                      <div className="ml-5 col-md-3">
                          <label for="inputPassword2">Remarks</label>
                        </div>
                        <div className='col-md-5'>
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
                    <div style={{marginLeft:"380px"}}>
                    <Button
                    className="mr-4 ml-1 mt-4 pt-2 px-1 "
                    style={{ backgroundColor: "#1D91EF",color:"black",borderRadius:"10px"}}
                  >
                    {" "}
                    Apply
                  </Button>
                 <Link to="/Component/DashBoard/Traveldesk"><Button
                    className="mr-4 mt-4 pt-2 px-1 "
                    style={{ backgroundColor: "#ED2E22", color:"black",borderRadius:"10px" }}
                  >
                    {" "}
                    Cancel
                  </Button></Link>
                  </div>
                  </Form>
                </Card>
              </div>
            </div>
        )
    }
}
export default SetManual;