import { Formik, Form } from "formik";
import React from "react";

export default function Signingsup() {
  const intialState = {
    userName: "",
    password: "",
  };
  const handelSubmit = (values) => console.log(values);
  return (
    <section className="login-body">
      <div>
        <div className="formik">
          <Formik initialValues={intialState} onSubmit={handelSubmit}>
            {(props) => (
              <Form>
                <h1>Login</h1>
                <div className="input-box">
                  {console.log(props)}
                  <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    onChange={(e) => {
                      props.handleChange(e);
                    }}
                  />
                  <i class="bi bi-person-fill"></i>
                </div>
                <div className="input-box">
                  {console.log(props)}
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      props.handleChange(e);
                    }}
                  />
                  <i class="bi bi-lock-fill"></i>
                </div>
                <div className="remember-forget">
                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="/Profle"> Forget password?</a>
                </div>
                <button type="submit" className="btn-login">
                  Login
                </button>
                <div className="regester-link">
                  <p>
                    Don`t have an account?
                    <a href="/SignUp">Regester</a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
