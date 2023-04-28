import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";

const Tabs = () => {
  const [tab, setTab] = useState("form1");
  const form1 = JSON.parse(localStorage.getItem("form1"));
  const form2 = JSON.parse(localStorage.getItem("form2"));
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  tab === "form1"
                    ? "nav-link active bg-warning text-white"
                    : "nav-link"
                }
                onClick={() => setTab("form1")}
              >
                Form 1
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link
                to="/"
                className={
                  tab === "form2"
                    ? "nav-link active bg-warning text-white"
                    : "nav-link"
                }
                onClick={() => form1 && setTab("form2")}
              >
                Form 2
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link
                to="/"
                className={
                  tab === "form3"
                    ? "nav-link active bg-warning text-white"
                    : "nav-link"
                }
                onClick={() => form2 && setTab("form3")}
              >
                Form 3
              </Link>
            </li>
          </ul>
          <div className="col-md-6 mt-5 mx-auto">
            {tab === "form1" ? (
              <Form1 setTab={setTab} />
            ) : tab === "form2" ? (
              <Form2 setTab={setTab} />
            ) : (
              <Form3 setTab={setTab} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
