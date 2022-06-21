import React from 'react'
import SMSFormat1 from "../../../../../Assets/SMSFORMAT.jpg";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {smsInputChange} from '../../../../../Actions';
import { useDispatch } from 'react-redux';
import {UpdatingSMSFormat} from "../../../../../Actions";
import {messageSetting} from "../../../../../Actions";
import { useEffect } from 'react';

export default function SMSFormat() {
 const dispatch = useDispatch();
 
 useEffect(() => {dispatch(messageSetting());
 },[dispatch]);

  const MessageSetting = useSelector(state => state.AdminPageReducers);

  const SMSFormatting= MessageSetting.messageSetting
console.log("feffdcs",SMSFormatting)
const handleClickUpdate =()=>{
  dispatch(UpdatingSMSFormat(MessageSetting));
}

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
              src={SMSFormat1}
              alt="Admin"
              width={50}
              style={{ paddingRight: "10px" }}
            />
           SMS Format
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
              <p  className="pb-2 pt-2" style={{ fontFamily: "cursive", backgroundColor: "#38476C",color:"whitesmoke" }}>
                SMS Message Settings
              </p>
  
              <Card
                className="pb-4 mt-4 pr-4 mr-4 ml-4"
                style={{ backgroundColor: "#D6DBDF" }}
              > <p
              style={{ fontFamily: "times New Roman", fontWeight: "bolder" }}
            >
              Message Scripting
            </p>
               
            <div className='' style={{textAlign:"center"}}> 
                <p style={{fontFamily:"monospace" }}>
                    Hostel Name :-- {"{Syneins}"}
                </p>
            </div>
            <div className='' style={{textAlign:"center"}}> 
                <p style={{fontFamily:"monospace" }}>
                    Warden Name :-- {"{Warden}"}
                </p>
            </div>
            <div className='' style={{textAlign:"center"}}> 
                <p style={{fontFamily:"monospace" }}>
                    Student Name :-- {"{Student}"}
                </p>
            </div>
            <div className='' style={{textAlign:"center"}}> 
                <p style={{fontFamily:"monospace" }}>
                    Date Time :--  {"{DATE}"}
                </p>
            </div>
               
               </Card>
             


            
               <Card
                className="pb-4 mt-4 pr-4 mr-4 ml-4"
                style={{ backgroundColor: "#D6DBDF" }}
              > <p
              style={{ fontFamily: "times New Roman", fontWeight: "bolder" }}
            >
              Message Format
            </p>
          
            <div class="form-group ">
            {SMSFormatting && SMSFormatting.map((item)=>(
                  <div className="row">
                    <div className=" col-md-3 mt-4 ml-5" >
                      <label for="exampleFormControlTextarea1" >
                       {item.messageType == "1" &&  "Ticket-Raise" }
                       {item.messageType == "2" &&  "Ticket Cancel" }
                       {item.messageType == "3" &&  " Campus Exit" }
                       {item.messageType == "4" &&  " Campus Exit by College Bus" }
                       {item.messageType == "5" &&  " Campus Entry" }
                       {item.messageType == "6" &&  "Campus Entry by College Bus" }
                       {item.messageType == "7" &&  " Trip Not Return" }
                       {item.messageType == "8" &&  "  Alert Wrong Exit" }
                       {item.messageType == "9" &&  "Alert Wrong Exit" }
                       {item.messageType == "10" &&  "Birthday Wish" }
                      </label>
                    </div>
                                 <div className='col-md-7'>
                      <textarea
                        class="form-control pt-3 mb-3 ml-5"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        cols="30"
                        onChange={(val) => {
                          dispatch(smsInputChange({
                            props: "MessageId",
                            value: item.messageType,
                         
                          }));
                        dispatch(smsInputChange({
                             props: "smsInput",
                             value: val.target.value,
                             error: "smsInputError",
                           }));
                         }}
                      >
                        {item.message}
                      </textarea>
                    </div>
                  </div>
                  ))}
                </div>
            </Card>
         

            
<div style={{float:"left"}}>
<Link to="/Component/AdminSetting"><Button
                className="mr-4 mt-4"
                style={{ backgroundColor: "#ED2E22", color:"black",float:"right" }}
              >
                {" "}
                Cancel
              </Button></Link>
                <Button
                className="mr-4 ml-4 mt-4"
                style={{ backgroundColor: "#1D91EF",color:"black",float:"right"}}
                onClick={handleClickUpdate}
              >
                {" "}
                Update
              </Button>
           
              </div>
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
