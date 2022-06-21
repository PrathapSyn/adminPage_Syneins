import React from 'react';
import ClgImage from "../../../../../Assets/clgImage.jpg";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { InputChange } from '../../../../../Actions';
import {forgotPassword} from "../../../../../Actions"

export default function Trip() {

  const handlereset =()=>{
          dispatch(forgotPassword(Password));
  }
  const dispatch = useDispatch();
  const Password = useSelector(state => state.AdminPageReducers);
    return (
        <div class="content">
        <div className="ml-3" style={{ marginTop: "90px" }}>
        <Card
            className=" pr-4 pt-4 mt-4"
            style={{ backgroundColor: "#D6DBDF" }}
          >
        <div
      className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="login-content">
        <div className="login-header">
          <Link className="app-logo" to="/" title="Jambo">
          <img src={ClgImage}   width={300} height={200} alt="hostel" title="hostel"/>
          </Link>
        </div>

        <div className="mb-4">
          <h4 style={{backgroundColor:"#AEB6BF" ,fontFamily:"fantasy"}}>Change password</h4>
        </div>

        <div className="login-form">
          <form method="post" action="/">
            <div className="form-group mb-3">
              <label>Old Password</label>
              <input type="text" placeholder="Your old password" className="form-control form-control-lg"
               value={Password.oldPassword}
               onChange={(val) => {
                dispatch(InputChange({
                   props: "oldPassword",
                   value: val.target.value,
                   error: "oldPasswordError",
                 }));
               }}
              />
            </div>

            <div className="form-group mt-3 mb-3">
              <label>New Password</label>
              <input type="text" placeholder="Your New password" className="form-control form-control-lg"
               value={Password.newPassword}
               onChange={(val) => {
                dispatch(InputChange({
                   props: "newPassword",
                   value: val.target.value,
                   error: "newPasswordError",
                 }));
               }}
              />
            </div>
            <p>
             more information&nbsp;
              <span className="small jr-link" style={{color:"blue"}}>
               Contact Us
              </span>
            </p>

            <div className="">
              <Link to="/Component/Admin/Forgot" onClick={handlereset}
              className="btn btn-primary jr-btn-rounded">RESET</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Card>
    </div>
    </div>
  );
}
