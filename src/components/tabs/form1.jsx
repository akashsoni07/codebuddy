import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Form1 = ({ setTab }) => {
  const data = JSON.parse(localStorage.getItem("form1"));
  return (
    <Formik
      initialValues={{
        emailId: data?.emailId ? data?.emailId : "",
        password: data?.password ? data?.password : "",
      }}
      validationSchema={Yup.object().shape({
        emailId: Yup.string()
          .required("Email is required")
          .email("Please enter valid email"),
        password: Yup.string()
          .required("Password is required")
          .matches(
            /^(?=(?:\D*\d){2})(?=(?:[^a-z]*[a-z]){2})(?=[^A-Z]*[A-Z]{2})(?=(?:\w*\W){2})/,
            "Password must contain atleast 2 small letters, 2 upper letters, 2 numbers and 2 special characters."
          ),
      })}
      onSubmit={async (values) => {
        localStorage.setItem("form1", JSON.stringify(values));
        setTab("form2");
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="emailId">
                Email<span className="text-danger">*</span>
              </label>
              <Field
                name="emailId"
                id="emailId"
                type="text"
                placeholder="Enter your email"
                className={
                  "form-control" +
                  (errors.emailId && touched.emailId ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="emailId"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="emailId">
                Password<span className="text-danger">*</span>
              </label>
              <Field
                name="password"
                id="password"
                type="password"
                placeholder="Enter your password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-row">
            <button type="submit" className="btn btn-primary ml-auto">
              Save & Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Form1;
