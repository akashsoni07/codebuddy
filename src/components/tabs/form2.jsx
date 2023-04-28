import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Form2 = ({ setTab }) => {
  const data = JSON.parse(localStorage.getItem("form2"));
  return (
    <Formik
      initialValues={{
        firstName: data?.firstName ? data?.firstName : "",
        lastName: data?.lastName ? data?.lastName : "",
        address: data?.address ? data?.address : "",
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .required("First name is required")
          .matches(
            /^[a-zA-Z]{2,50}$/,
            "Allow only alphabets. Minimum 2 character and maximum 50 characters"
          ),
        lastName: Yup.string().matches(
          /^[a-zA-Z]{0,}$/,
          "Allow only alphabets"
        ),
        address: Yup.string()
          .required("Address is required")
          .min(10, "Minimum length of address should be 10"),
      })}
      onSubmit={async (values) => {
        localStorage.setItem("form2", JSON.stringify(values));
        setTab("form3");
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="firstName">
                First Name<span className="text-danger">*</span>
              </label>
              <Field
                name="firstName"
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className={
                  "form-control" +
                  (errors.firstName && touched.firstName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="lastName">Last Name</label>
              <Field
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className={
                  "form-control" +
                  (errors.lastName && touched.lastName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="address">
                Address<span className="text-danger">*</span>
              </label>
              <Field
                name="address"
                id="address"
                type="text"
                placeholder="Enter your address"
                className={
                  "form-control" +
                  (errors.address && touched.address ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="address"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-row d-inline">
            <button
              type="button"
              className="btn btn-secondary ml-1"
              onClick={() => setTab("form1")}
            >
              Back
            </button>
          </div>
          <button type="submit" className="btn btn-primary float-right">
            Save & Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Form2;
