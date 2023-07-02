import React from "react";
import classes from "./modal.module.css";

export default function Modal(props) {
    
  return (
    <div className={classes.modal} onClick={()=>props.setModalIsVisible(preVlaue=>!preVlaue)}>
      <form className="card">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
          height="50px"
          alt=""
        />
        <div className="card-body">
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div class="mb-3">
            <label htmlFor="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
            />
          </div>
          <button className="btn btn-primary">Sign In</button>
          <div>
            <p><input type="checkbox" /> I read and <b>Accept</b> all the rules and policies for <b> Flipkart Clone</b>. I declare that i have all the responsiblity of all this Account</p>
            <button className="btn btn-outline-secondary ">Sign up</button>
          </div>
        </div>
      </form>
    </div>
  );
}
