import React, { Fragment } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default function ErrorElement() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template row vh-100" style={{placeContent:"center"}}  align="center">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home">Return To Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
