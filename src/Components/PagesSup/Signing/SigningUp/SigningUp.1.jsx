import { Formik, Form } from "formik";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import loginImg from "../../../../assets/Images/auth/Signin-banner.jpg";

export default function SigningUp() {
  const intialState = {
    userName: "",
    password: "",
  };
  const handelSubmit = (values) => console.log(values);
  return (
    <section>
      <Container>
        <Row>
          <Col sm={11}>
            <Formik initialValues={intialState} onSubmit={handelSubmit}>
              {(props) => (
                <Form>
                  <h1>Login</h1>
                  <label>User Name</label>
                  {console.log(props)}
                  <input
                    type="text"
                    name="userName"
                    onChange={(e) => {
                      props.handleChange(e);
                    }}
                  />
                  <label>Password</label>
                  {console.log(props)}
                  <input
                    type="number"
                    name="password"
                    onChange={(e) => {
                      props.handleChange(e);
                    }}
                  />
                  <button type="submit">submit</button>
                </Form>
              )}
            </Formik>
          </Col>
          <Col lg={0} md={0} sm={0}>
            <img src={loginImg} className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
