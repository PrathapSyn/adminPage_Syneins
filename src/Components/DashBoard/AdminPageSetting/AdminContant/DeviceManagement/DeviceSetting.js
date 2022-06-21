import { Card } from "@mui/material";
import React, { useEffect } from "react";
import Setting from "../../../../../Assets/Setting.png";
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { InputChange } from "../../../../../Actions";
import { useSelector } from "react-redux";
import {postDeviceSetting} from "../../../../../Actions";
import {getDeviceSetting} from "../../../../../Actions";
import { useState } from "react";

export default function DeviceSetting() {

const dispatch = useDispatch();

// useEffect(() => {dispatch(getDeviceSetting());
// },[dispatch]);
const DeviceData = useSelector((state) => state.AdminPageReducers);


const [isChecked, setIsChecked] = useState(DeviceData.DisplayDeviceSetting &&  (
  DeviceData.DisplayDeviceSetting.isDebug == "1" && true
));
//second check box sms enabled
const [isCheckedsms, setIsCheckedsms] = useState(DeviceData.DisplayDeviceSetting &&  (
  DeviceData.DisplayDeviceSetting.status == "1" && true
));


const deviceSetting= DeviceData.DisplayDeviceSetting;
console.log("devicesetting view getdata",deviceSetting );

const handleSubmit=(event)=>{
 console.log("working")
      dispatch(postDeviceSetting(DeviceData));

  }
 // console.log("deviceSetting view",deviceSetting);
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
            src={Setting}
            alt="Admin"
            width={50}
            style={{ paddingRight: "10px" }}
          />
          Device Setting
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
            <p
              className="pb-2 pt-2"
              style={{ fontFamily: "cursive", backgroundColor: "gray" }}
            >
              System Setting
            </p>
          
            <Card
              className="pb-4  pr-4 mr-4 ml-4"
              style={{ backgroundColor: "#D6DBDF" }}
            >
              <p
                style={{ fontFamily: "times New Roman", fontWeight: "bolder" }}
              >
                DEBUG Setting
              </p>
              <button
                className="mr-4 ml-4"
                style={{ backgroundColor: "lightblue" }}
                value="1"

                onClick={(val) => {
                  dispatch(
                    InputChange({
                      props: "setting",
                      value: val.target.value,
                      error: "settingError",
                    })
                  );
                }}
              >
                {" "}
                Start
              </button>
              <button
                className="mr-4 "
                style={{ backgroundColor: "lightblue" }}
                value="2"
                onClick={(val) => {
                  dispatch(
                    InputChange({
                      props: "setting",
                      value: val.target.value,
                      error: "settingError",
                    })
                  );
                }}
              >
                {" "}
                Balance
              </button>
              <button
                className="mr-4 "
                style={{ backgroundColor: "lightblue" }}
                value="3"
                onClick={(val) => {
                  dispatch(
                    InputChange({
                      props: "setting",
                      value: val.target.value,
                      error: "settingError",
                    })
                  );
                }}
              >
                {" "}
                Stop
              </button>
              <Form>
                  <>
                <div className="form-check mt-4 ml-1">
                  <label class="form-check-label" for="flexCheckChecked">
                    SMS TestMode Enabled
                  </label>
                  <input
                    class="form-check-input ml-4"
                    style={{ Size: "50px", width: "20px", height: "20px" }}
                    type="checkbox"
                    id="flexCheckChecked"
                    value="1"
                    onChange={(val) => {
                      dispatch(
                        InputChange({
                          props: "SMSTestMode",
                          value: val.target.value,
                          error: "SMSTestModeError",
                        })
                      );
                    }}
                  />
                </div>
                {deviceSetting && (
                <div className="form-check mt-4 ml-1">
                  <label
                    class="form-check-label"
                    for="flexCheckChecked"
                    style={{ marginRight: "42px" }}
                  >
                    Servlet Debug ON
                  </label>
                  <input
                    class="form-check-input ml-4"
                    style={{ width: "20px", height: "20px" }}
                    type="checkbox"
                    id="flexCheckChecked"
                    checked={isChecked}
                    onChange={() => {
                      setIsChecked(!isChecked);
                      dispatch(
                        InputChange({
                          props: "DebugOn",
                          value: !isChecked,
                          error: "DebugOnError",
                        })
                      );
                    }}
                  />
                </div>
                )}
                </>
              </Form>
            </Card>
          
            <Card
              className="pb-4 mt-4 pr-4 mr-4 ml-4"
              style={{ backgroundColor: "#D6DBDF" }}
            >
              <p
                style={{ fontFamily: "times New Roman", fontWeight: "bolder" }}
              >
                SMS Settings
              </p>
              <Form>
              {deviceSetting && (
                <div class="form-group ">
                  <div className="row">
                    <div className="mt-4 ml-5">
                      <label for="exampleFormControlTextarea1">
                        SMS URL Message
                      </label>
                    </div>
                    <div>
                      <textarea
                        class="form-control "
                        id="exampleFormControlTextarea1"
                        rows="3"
                        style={{ marginLeft: "45px" }}
                       // value={DeviceData.DisplayDeviceSetting.smsUrl}
                        onChange={(val) => {
                          dispatch(
                            InputChange({
                              props: "SMSErrorMessage",
                              value: val.target.value,
                              error: "SMSErrorMessageError",
                            })
                          );
                        }}
                      >
                        {deviceSetting.smsUrl}
                      </textarea>
                    </div>
                  </div>
                </div>
              )}
                <div class="form-group mx-sm-3 mb-2 ml-5">
                  <div className="row">
                    <div className="ml-4">
                      <label for="inputPassword2">SMS Url Password</label>
                    </div>
                    <div>
                      <textarea
                        type="password"
                        class="form-control"
                        id="inputPassword2"
                        style={{ marginLeft: "55px" }}
                        onChange={(val) => {
                          dispatch(
                            InputChange({
                              props: "SMSUrlPassword",
                              value: val.target.value,
                              error: "SMSUrlPasswordError",
                            })
                          );
                        }}
                      >
                      {deviceSetting.password}
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="form-check mt-4 ml-1">
                  <label
                    class="form-check-label"
                    for="flexCheckChecked"
                    style={{ marginRight: "30px" }}
                  >
                    SMS Enabled
                  </label>
                  <input
                    class="form-check-input "
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "63px",
                    }}
                    type="checkbox"
                    id="flexCheckChecked"
                    checked={isCheckedsms}
                    onChange={() => {
                      setIsCheckedsms(!isCheckedsms);
                      dispatch(
                        InputChange({
                          props: "smsenabled",
                          value: !isCheckedsms,
                          error: "SMSEnabledError",
                        })
                      );
                    }}
                  />
                </div>

                <div style={{ float: "right" }}>
                  <Button
                    className="mr-4 ml-4 mt-4 pb-2 pt-2 px-1 "
                    style={{
                      backgroundColor: "#1D91EF",
                      color: "black",
                      borderRadius: "10px",
                     
                    }}
                    onClick={handleSubmit}
                  >
                    {" "}
                    Update
                  </Button>
                  <Link to="/Component/AdminSetting">
                    <Button
                      className="mr-4 mt-4 pb-2 pt-2 px-1 "
                      style={{
                        backgroundColor: "#ED2E22",
                        color: "black",
                        borderRadius: "10px",
                      }}
                    >
                      {" "}
                      Cancel
                    </Button>
                  </Link>
                </div>
              </Form>
            </Card>
          </Card>
        </div>
        <hr
          className="mt-4"
          style={{
            margin: "auto 20px",
            border: " 3px solid rgb(150, 150, 150)",
          }}
        ></hr>
      </div>
    </div>
  );
}
