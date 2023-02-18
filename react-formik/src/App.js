import React from "react";
import { Formik, Form, Field, FieldArray } from 'formik';

function App() {
  return (
    <div className="container py-5">
      <div className="row">
          <div className="col-6 offset-3">
              <h1 className="text-center">Formik</h1>
              <Formik
                  initialValues={
                  {
                      name:"",
                      phone: "",
                      password: "",
                      gender: "",
                      dob: "",
                      income: 0,
                      about: "",
                      social: {
                          facebook: '',
                          twitter: ''
                      },
                      hobbies: [""]
                  }
                }
                  onSubmit={(values) => {
                    console.log(values);
                  }}
              >
                  {
                      ({values }) => (
                          <Form>
                          <div className="form-group">
                              <label className="form-label" htmlFor="name">Name: </label>
                              <Field name="name" id="name" type="text" className="form-control" />
                          </div>

                          <div className="form-group">
                              <label className="form-label" htmlFor="phone">Phone: </label>
                              <Field name="phone" type="tel" id="phone" className="form-control" />
                          </div>

                          <div className="form-group">
                              <label className="form-label" htmlFor="password">Password: </label>
                              <Field name="password" type="password" id="password" autoComplete="on" className="form-control" />
                          </div>

                          <div className="form-check">
                              <label className="form-label">Gender: </label> <br/>
                              <Field type="radio" name="gender" value="Male" id="male" />
                              <label className="form-check-label" htmlFor="male">Male</label>
                          </div>

                          <div className="form-check">
                              <Field type="radio" name="gender" value="Female" id="female" />
                              <label className="form-check-label" htmlFor="female">Female</label>
                          </div>

                          <div className="form-group">
                              <label className="form-label" htmlFor="dob">Date of Birth: </label>
                              <Field name="dob" type="date" id="dob" className="form-control" />
                          </div>

                          <div className="form-group">
                              <label className="form-label" htmlFor="income">Income</label>
                              <Field name="income" as="select" id="income" className="form-select">
                                  <option value="0">TK 0</option>
                                  <option value="1000">TK 1000</option>
                                  <option value="10000">TK 10000</option>
                              </Field>
                          </div>

                          <div className="form-group">
                              <label className="form-label" htmlFor="about">Income</label>
                              <Field name="about" as="textarea" id="about" className="form-control"/>
                          </div>

                          <div className="form-group"> {/* nested field */}
                              <label className="form-label" htmlFor="social">Social</label><br/>

                              <label className="form-label" htmlFor="social">Facebook</label>
                              <Field name="social.facebook" type="text"  className="form-control"/>

                              <label className="form-label" htmlFor="social">Twitter</label>
                              <Field name="social.twitter" type="text"  className="form-control"/>
                          </div>

                          <div className="form-group">
                              <label className="form-label" htmlFor="hobbies">Hobbies</label>
                              <FieldArray
                                  name="hobbies"
                                  render={
                                      arrayHelpers => (
                                          <>
                                              <div>
                                                  {
                                                      values.hobbies.map((hobby, index) => (
                                                          <div key={index}>
                                                              <Field name={`hobbies.${index}`} />
                                                              <button type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
                                                          </div>
                                                      ))
                                                  }
                                              </div>
                                              <button type="button" onClick={() => arrayHelpers.push('')}>Add Hobby</button>
                                          </>
                                      )
                                }
                              />
                          </div>

                          <div className="form-group mt-3 text-center">
                              <button type="submit" className="btn btn-success">
                                  Submit
                              </button>
                          </div>
                      </Form>
                      )}
              </Formik>
          </div>
      </div>
    </div>
  );
}
export default App;
