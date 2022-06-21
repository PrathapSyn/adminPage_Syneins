import React,{useEffect} from 'react';
import { Card } from 'react-bootstrap';
import ClgImage from "../../Assets/clgImage.jpg";
import PdfImage from "../../Assets/pdf.png";
import { useDispatch, useSelector } from 'react-redux';
import {getManualdata} from "../../Actions"

import Pdf from "react-to-pdf";
const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [10.5,14]
};

export default function PrintOut() {


 const dispatch = useDispatch();
//  useEffect(() => {dispatch(getManualdata(AdminPageReducers));
//  },[dispatch]);
 const AdminPageReducers = useSelector((state) => state.AdminPageReducers);
    return (
      
        <div class="content">
        <div className="ml-2" style={{ marginTop: "90px" }}>
        <div
            className="row ml-4 mt-4"
            style={{
              color: "#CB7C24",
              fontWeight: "revert",
              fontFamily: "fantasy",
              fontSize: "20px",
            }}
          >
            Gate pass Print
      <div className="row ml-3 mt-2 mr-5 pb-3">
      <Pdf targetRef={ref} filename="GatePass.pdf" options={options} x={.5} y={.2} scale={1.2}>
        {({ toPdf }) => <img onClick={toPdf} src={PdfImage} alt="reader" width={40} height={40} />}
      </Pdf>
        </div>
          </div> 
          <hr
            style={{
              margin: "auto 20px",
              border: " 3px solid rgb(150, 150, 150)",
            }}
          ></hr>
          <div
            className="col-md-9 center mt-4"
            style={{ alignItems: "center", marginLeft: "30px" }}
          >
        </div>
        <div ref={ref}>
        <Card className="col-md-6 pb-4 ml-5" style={{borderColor:"black",backgroundColor:"#F2F4F4"}} >
            <div className='row'>
        <img
              src={ClgImage}
              alt="Admin"
              width={60}
              height={60}
              className='ml-5 mr-4'
              style={{ marginTop:"10px",borderRadius:"10px"}}
            />
              <p  className=" pt-2" style={{fontFamily: "timesNewRoman",color:"black",textAlign:"center",float:"right"}}>
               <strong>Hostel GatePass</strong>
               <div><span> ----<span style={{backgroundColor:"black",color:"whitesmoke",borderRadius:"5px"}}>Office Use </span>----</span></div>
              
              </p>
             
              </div>
              {/* <hr style={{borderColor:"black",borderWidth:"4px"}}></hr> */}
              {AdminPageReducers.displayManual && AdminPageReducers.displayManual.map((item)=> (

AdminPageReducers.TravelDeskId == item.Id && (
              <Card className=" pb-5" style={{borderColor:"black"}} >
                  <p style={{textAlign:"right",fontFamily:"timesNewRoman"}}>
                      Trip-Id : {item.course_id}
                  </p>
                  <div>
                  <div className='ml-3' style={{fontFamily:"timesNewRoman"}}>
                  <p>Name:- {item.Name} <br></br>
                     College :- {item.institution_name}<br></br>
                     Course :- {item.course_name}<br></br>
                     Hostel :- {AdminPageReducers.displayManual.hostel_name}<br></br>
                     StudentId :- {item.rollNo} <br></br>
                     Date & Time :- {AdminPageReducers.displayManual.gatepassRequest} <br></br>
                     Destination :- {item.destination} <br></br>
                     Parent's PhNo :- {item.parent_phno}  </p>
                  </div>
                  <div className='row ml-3' style={{fontFamily:"timesNewRoman", fontWeight:"bolder"}}>
                      <p className='ml-3'>Student's Sign</p>
                      <p className='ml-5'>Teacher's Sign</p>
                      <p className='ml-5'>Parent's Sign</p>
                  </div>
                  </div>
              </Card>
)
              ))}
              </Card>
              </div>
        </div>
        </div>
    )
}
