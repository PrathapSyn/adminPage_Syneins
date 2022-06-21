import React from "react";
import ClgImage from "../../Assets/clgImage.jpg";
import Quotes from "../../Assets/BestQuotes.jpg";
import { Link } from "react-router-dom";
import { InputChange } from "../../Actions";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signInProcess } from "../../Actions/AdminPageAction";
import { Button, Form } from "react-bootstrap";
import { changelink } from "../../Actions";

export default function SignIn() {
    const dispatch = useDispatch();
    const login = useSelector(state => state.AdminPageReducers)
    console.log("this is click gfor login",login);
    const handleClick=()=>{
   //   window.location.push("/Home");
       // console.log("this is click gfor login")
       dispatch(changelink())
     dispatch(signInProcess(login));
    }

  return (
    <div
      className="container row col-md-12"
      style={{ backgroundColor: "#D6EAF8" }}
    >
      <div className="col-md-6 order-md-1">
        <img
          src={Quotes}
          alt="CollegeName"
          width={600}
          height={400}
          className="responsive mt-6 ml-4 "
          style={{
            marginTop: "110px",
            marginBottom: "68px",
            borderRadius: "20%",
          }}
        ></img>
      </div>
      <div className="col-md-6 order-md-2 mt-6" style={{ marginTop: "100px" }}>
        <div className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
          <div className="login-content">
            <div className="login-header">
              <Link className="app-logo" to="/SignIn" title="Hostel">
                <img
                  src={ClgImage}
                  width={300}
                  height={200}
                  alt="hostel"
                  title="hostel"
                />
              </Link>
            </div>
            <div className="login-form pt-4">
              <Form  method="Post">
                <fieldset>
                  <div
                    className="form-group"
                    style={{ fontFamily: "times new Roman" }}
                  >
                    <input
                      name="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="User Name"
                      type="email"
                      value={login.userName}
                      onChange={(val) => {
                       dispatch(InputChange({
                          props: "userName",
                          value: val.target.value,
                          error: "userNameError",
                        }));
                      }}
                    />
                  </div>
                  <div
                    className="form-group"
                    style={{ fontFamily: "times new Roman" }}
                  >
                    <input
                      name="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      type="password"
                      value={login.password}
                      onChange={(val) => {
                       dispatch(InputChange({
                          props: "password",
                          value: val.target.value,
                          error: "passwordError",
                        }));
                      }}
                    />
                  </div>
                  <div className="form-group d-flex justify-content-between align-items-center float-right">
                    <div>
                      <Link
                        to="/app/app-module/forgot-password-1"
                        title="Reset Password"
                        style={{ fontFamily: "times new Roman" }}
                      >
                        forget password
                      </Link>
                    </div>
                  </div>
                
                      <Button to={login.changetheLink}
                    className="btn jr-btn-rounded btn-primary btn-rounded"
                    onClick={handleClick}
                  >
                    Sign In
                
                  </Button>

                </fieldset>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


