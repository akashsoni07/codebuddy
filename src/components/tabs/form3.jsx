import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Form3 = ({ setTab }) => {
  const form1 = JSON.parse(localStorage.getItem("form1"));
  const form2 = JSON.parse(localStorage.getItem("form2"));
  return (
    <Formik
      initialValues={{
        countryCode: "",
        phoneNumber: "",
        acceptTermsAndCondition: false,
      }}
      validationSchema={Yup.object().shape({
        countryCode: Yup.string().required("Please select an option"),
        phoneNumber: Yup.string()
          .required("Phone number is required")
          .matches(/^[1-9]{1}[0-9]{9}$/, "Please enter valid phone number"),
        acceptTermsAndCondition: Yup.boolean().oneOf(
          [true],
          "You must accept the terms and conditions."
        ),
      })}
      onSubmit={async (values) => {
        const res = await axios.post("https://codebuddy.review/submit", {
          ...form1,
          ...form2,
          countryCode: values.countryCode,
          phoneNumber: values.phoneNumber,
        });
        if (res?.data) {
          localStorage.clear();
          <Navigate to="/posts" replace={true} />;
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="countryCode" className="input-label">
                Country Code<span className="text-danger">*</span>
              </label>
              <Field
                name="countryCode"
                as="select"
                id="countryCode"
                className={
                  "form-control input-label input-class" +
                  (errors.countryCode && touched.countryCode
                    ? " is-invalid"
                    : "")
                }
              >
                <option disabled value="">
                  Please select country code
                </option>
                <option value="+91">India(+91)</option>{" "}
                <option value="+9">America(+9)</option>{" "}
              </Field>
              <ErrorMessage
                name="countryCode"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="phoneNumber">
                Phone Number<span className="text-danger">*</span>
              </label>
              <Field
                name="phoneNumber"
                id="phoneNumber"
                type="text"
                placeholder="Enter your phone number"
                className={
                  "form-control" +
                  (errors.phoneNumber && touched.phoneNumber
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <fieldset className="form-row">
            <div className="form-group col-md-12">
              <div className="form-check">
                <Field
                  name="acceptTermsAndCondition"
                  type="checkbox"
                  className={
                    "form-check-input radio-class" +
                    (errors.acceptTermsAndCondition &&
                    touched.acceptTermsAndCondition
                      ? " is-invalid"
                      : "")
                  }
                />
                <label className="form-check-label input-label">
                  The Terms and Conditions checkbox must be selected.
                  <span className="text-danger">*</span>
                </label>
                <ErrorMessage
                  name="acceptTermsAndCondition"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
          </fieldset>
          <div className="form-row d-inline">
            <button
              type="button"
              className="btn btn-secondary ml-1"
              onClick={() => setTab("form2")}
            >
              Back
            </button>
          </div>
          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Form3;
