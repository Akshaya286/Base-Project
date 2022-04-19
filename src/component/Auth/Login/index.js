import { history } from "helpers";
import React, { useState } from "react";
import "component/Auth/Login/style.scss";
import InputBox from "component/common/InputBox/InputBox";
import { useForm } from "react-hook-form";
import FormErrorMessage from "component/common/ErrorMessage";
import NormalButton from "component/common/NormalButton/NormalButton";
import logo from "assets/images/logo.png";

const LoginComp = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [mailId, setmainId] = useState("");
  const [password, setpassword] = useState("");

  const onSubmit = (inputs) => {
    try {
      history.push("/admin/dashboard");
    } catch (err) {}
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutter bg-image ">
          {/* <div className="d-none d-md-flex col-md-4 col-lg-6 "></div> */}
          <div className="col-md-4  col-lg-6">
            <div className="login d-flex bg-color align-items-center py-5  ">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <img src={logo} className="logo-align"/>
                    <h3 className="login-heading d-flex align-items-center justify-content-center">Login</h3>
                    <p className="mb-4">
                      <small className="text-muted mb-4 d-flex align-items-center justify-content-center">
                      Provide your valid credentials to proceed
                      </small>
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mt-5">
                        <InputBox
                          errors={errors}
                          type={"text"}
                          value={mailId}
                          placeholder="username"
                          name="mailId"
                          register={register({
                            required: true,
                            pattern: /\S+@\S+\.\S+/,
                          })}
                        />
                        <FormErrorMessage
                          error={errors.mailId}
                          messages={{
                            required: "Mail ID is required",
                            pattern: "Invalid Mail ID",
                          }}
                        />
                      </div>
                      <div className="mt-4">
                        <InputBox
                          errors={errors}
                          value={password}
                          placeholder="Password"
                          type="password"
                          name="password"
                          register={register({
                            required: true,
                          })}
                        />
                        <FormErrorMessage
                          error={errors.password}
                          messages={{
                            required: "Password is required",
                          }}
                        />
                      </div>
                      <div className="text-right">
                        <span className="small" href="#">
                          Forgot password?
                        </span>
                      </div>
                      <div className="mt-5">
                        <NormalButton loginButton label="login" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
