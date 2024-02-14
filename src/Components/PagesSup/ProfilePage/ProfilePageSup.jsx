import { Formik } from "formik";
import React from "react";
import { Col, Container, Form, Row } from "reactstrap";

export default function ProfilePageSup() {
  const intialState = {
    userName: "",
    phone: "",
    email: "",
    password: "",
  };
  const handelSubmit = (values) => console.log(values);

  return (
    <section className="profile-body">
      <div className="profile-container">
        <Formik initialValues={intialState} onSubmit={handelSubmit}>
          {(props) => (
            <Form>
              <h1>User Data</h1>
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
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                      maxLength="12"
                      name="phone"
                      placeholder="xxx-xxx-xxxx"
                      onChange={(e) => {
                        props.handleChange(e);
                      }}
                    />
                    <i className="bi bi-lock-fill"></i>
                  </div>
                </Col>
              </Row>

              <Row>
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
                    <i className="bi bi-person-fill"></i>
                  </div>
                </Col>
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
              </Row>

              <Row>
                <Col>
                  <button type="submit" className="btn-login">
                    Update
                  </button>
                </Col>
                <Col>
                  {/* <button type="submit" className="btn-login">
                    Submit
                  </button> */}
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
