import React,{useState} from "react";
import User from "../../../../../Assets/User.png";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputChange } from "../../../../../Actions";
import {UpdateTheRights} from "../../../../../Actions";
export default function UserRights() {

 

 const handleonChange = () =>{
    setIsChecked(!isChecked);
    dispatch(InputChange({
      props: "studentsGroup",
      value: !isChecked,
      error: "studentsGroupError",
    }));
 }

  const dispatch= useDispatch();
  const userList = useSelector(state => state.AdminPageReducers);
  // {data = userList.userList && userList.userList.map((item) => ({
  //   studentGroup: item.studentsGroup
  //  }))}
  const [isChecked, setIsChecked] = useState( userList.userList && userList.userList.map((item) => (
    item.studentsGroup == "0" && true
  )));


  const handleRightsUpdate=()=>{
    dispatch(UpdateTheRights(userList))
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

        <Card
          className=" pb-4  ml-4 mr-4 mt-4"
          style={{ backgroundColor: "#D6DBDF" }}
        >
          <p
            className="pb-2 pt-2 pl-2"
            style={{
              fontFamily: "cursive",
              backgroundColor: "#38476C",
              color: "whitesmoke",
            }}
          >
            User Rights Setting
          </p>
          
          <Card
            className="pb-4 mt-4 pr-4 mr-4 ml-4"
            style={{ backgroundColor: "#D6DBDF" }}
          >
            {" "}
            <p style={{ fontFamily: "times New Roman", fontWeight: "bolder" }}>
              <u> Select Student Group </u>
            </p>
            
            <div
              class="form-group mx-sm-3 mb-2 ml-5"
              Style={{ textAlign: "center" }}
            >
              
              <div className="row">
            
                <div className="ml-4 col-md-3">
                  <label
                    for="inputPassword2"
                    style={{ fontFamily: "times New Roman" }}
                    
                  >
                    {userList.userList && userList.userList.map((item)=>(
                      <option>{item.studentsGroup =="0" && "Ground_Floor"}</option>
                    ))}
                 
                  </label>
                </div>
                <div className="col-md-5">
                {userList.userList && userList.userList.map((item)=>(
                     
                  
                  <input
                    class="form-check-input ml-2"
                    style={{ width: "20px", height: "20px" }}
                    type="checkbox"
                    checked={isChecked}
                 //   check = { userList.studentsGroup == "0" && true ||false}
               //     unchecked ={ item.studentsGroup == "0" && false}
                //   value= {item.studentsGroup == "0" && "1" || "0" }
                    id="flexCheckChecked"
                    onChange={(val) => {
                      handleonChange();
                     
                     }}
                  />
                  ))}
                </div>
              </div>
              
            </div>
            <div>
              <Link to="/Component/Admin/UserSetting">
                <Button
                  className="mr-4 mt-4 pb-2 pt-2 px-1 "
                  style={{
                    backgroundColor: "#ED2E22",
                    color: "black",
                    borderRadius: "10px",
                    float: "right",
                  }}
                >
                  {" "}
                  Cancel
                </Button>
              </Link>
              <Button
                className="mr-4 ml-4 mt-4 pb-2 pt-2 px-1 "
                style={{
                  backgroundColor: "#1D91EF",
                  color: "black",
                  borderRadius: "10px",
                  float: "right",
                }}
                onClick={handleRightsUpdate}
              >
                {" "}
                Rights Update
              </Button>
            </div>
          </Card>
        </Card>
      </div>
    </div>
  );
}
