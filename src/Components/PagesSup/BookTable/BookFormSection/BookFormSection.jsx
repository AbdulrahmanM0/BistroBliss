import React from 'react'
import {Formik , Form} from 'formik'
import * as Yup from 'yup'
import { Col, Row } from 'reactstrap';

export default function BookFormSection() {

  
  const validationSchema = Yup.object().shape({
    date: Yup.date().default(() => new Date()),
  });
  
  const initialValues = {
    date:''
  }

  const handleSubmit = (values) => {

    console.log(values)
  }

  return (
    <section className='book-form-section'>
        <div>
          <div className='form-card box-shadow' data-aos="fade-left" data-aos-duration="1500">
            <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
            {(props) => (
              <Form>
                <Row>
                  <Col sm={6} md={6} lg={6}>
                    <div>
                      <label htmlFor='date'>
                        Date:
                      </label>
                    </div>
                    <input onChange={props.handleChange} name='date' type='date' />
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <div>
                      <label htmlFor='date'>
                        Time:
                      </label>
                    </div>
                    <input onChange={props.handleChange} name='time' type='time' />
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <div>
                      <label htmlFor='date'>
                        Name:
                      </label>
                    </div>
                    <input onChange={props.handleChange} name='name' type='text' />
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <div>
                      <label htmlFor='date'>
                        Phone:
                      </label>
                    </div>
                    <input onChange={props.handleChange} name='phone' type='number' />
                  </Col>
                  <Col sm={12} md={12} lg={12}>
                    <div>
                      <label htmlFor='date'>
                        Total Person:
                      </label>
                    </div>
                    <input onChange={props.handleChange} name='person' type='number' />
                  </Col>
                  <Col sm={12}>
                    <button className='custom-button w-100' type='submit'>Submit</button>
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
