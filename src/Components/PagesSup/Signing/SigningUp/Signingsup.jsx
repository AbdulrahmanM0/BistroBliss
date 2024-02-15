import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignInAction } from "../../../../Store/SignIn/signInSlice";

export default function Signingsup() {
  const state = useSelector(state => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const intialState = {
    userName: "",
    password: "",
  };
  const handelSubmit = async (values) => { 
    await dispatch(SignInAction(values.userName))
    navigate('/')
    console.log(state)
    console.log(values)};
    console.log(state)
    return (
    <section className="login-body">
      <div>
        <div className="formik">
          <Formik initialValues={intialState} onSubmit={handelSubmit}>
            {(props) => (
              <Form>
                <Link to="/"><h1>Login</h1></Link>
                <div className="input-box">
                  <input
                    type="text"
                    name="userName"
                    value='Hazem'
                    placeholder="User Name"
                    onChange={(e) => {
                      props.handleChange(e);
                    }}
                  />
                  <i className="bi bi-person-fill"></i>
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      props.handleChange(e);
                    }}
                  />
                  <i className="bi bi-lock-fill"></i>
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
                    <Link to="/SignUp">Regester</Link>
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
