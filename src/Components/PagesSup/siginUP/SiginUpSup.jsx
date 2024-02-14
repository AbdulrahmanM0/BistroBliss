import { Formik, Form } from "formik";
import React from "react";
import { Col, Row } from "reactstrap";

export default function siginUpSup() {
  const intialState = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };
  const handelSubmit = (values) => console.log(values);
  return (
    <section className="login-body">
      <div>
        <div className="formik">
          <Formik initialValues={intialState} onSubmit={handelSubmit}>
            {(props) => (
              <Form>
                <h1>Sigin Up</h1>
                <Row>
                  <Col lg={6} md={6} sm={12}>
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
                      <i className="bi bi-person-fill"></i>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div className="input-box">
                      {console.log(props)}
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => {
                          props.handleChange(e);
                        }}
                      />
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <div className="input-box">
                      {console.log(props)}
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        minLength={10}
                        required
                        onChange={(e) => {
                          props.handleChange(e);
                        }}
                      />
                      <i className="bi bi-lock-fill"></i>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div className="input-box">
                      {console.log(props)}
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        minLength={10}
                        required
                        onChange={(e) => {
                          props.handleChange(e);
                        }}
                      />
                      <i className="bi bi-lock-fill"></i>
                    </div>
                  </Col>
                </Row>

                <div className="input-box">
                  {console.log(props)}
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    maxLength="14"
                    name="phoneNumber"
                    placeholder="xxx-xxx-xxxx"
                    onChange={(e) => {
                      props.handleChange(e);
                    }}
                  />
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <button type="submit" className="btn-login">
                  Sigin Up
                </button>
                <div className="regester-link">
                  <p>
                    Do you have an account?
                    <a href="/signin">Sigin In</a>
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
