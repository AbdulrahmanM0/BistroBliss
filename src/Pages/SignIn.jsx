import React from 'react'
import {Formik , Form} from 'formik'
import { Col, Row } from 'reactstrap'

export default function SignIn() {


  return (
    <section className='form-section-card signin'>
        <div>
          <div className='form-card box-shadow' data-aos="fade-left" data-aos-duration="1500">
            <Formik>
                {(props)=>(
                    <Form>
                        <Row>
                            <Col sm={6} md={6} lg={6}>
                                <div>
                                    {/* <label htmlFor='date'>
                                        Date:
                                    </label> */}
                                    <input placeholder='First Name' name='fname' type='text' />
                                </div>
                            </Col>
                            <Col sm={6} md={6} lg={6}>
                                <div>
                                    {/* <label htmlFor='date'>
                                        Date:
                                    </label> */}
                                    <input placeholder='Last Name' name='lname' type='text' />
                                </div>
                            </Col>
                            <Col sm={6} md={6} lg={6}>
                                <div>
                                    {/* <label htmlFor='date'>
                                        Date:
                                    </label> */}
                                    <input placeholder='Email' name='email' type='email' />
                                </div>
                            </Col>
                            <Col sm={6} md={6} lg={6}>
                                <div>
                                    {/* <label htmlFor='date'>
                                        Date:
                                    </label> */}
                                    <input placeholder='Phone Number' name='phone' type='number' />
                                </div>
                            </Col>
                            <Col sm={6} md={6} lg={6}>
                                <div>
                                    {/* <label htmlFor='date'>
                                        Date:
                                    </label> */}
                                    <input placeholder='Birthday' name='bday' type='date' />
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className='text-center'><button className='custom-button w-30' type='submit'>Sign In</button></div>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
          </div>
        </div>
    </section>
  )
}
