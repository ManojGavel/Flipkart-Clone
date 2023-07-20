import React from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Backdrop = (props) => {
  return( <div className={classes.modal} onClick={props.onConfirm} />)
};

const Overlay = () => {
  return( <form className={`card ${classes.form}`}>
    <img
      src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
      height="50px"
      alt=""
    />
    <form className="card-body">
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
        <input type="password" class="form-control" id="password" />
      </div>
      <button className="btn btn-primary">Sign In</button>
      <div>
        <p>
          <input type="checkbox" /> I read and <b>Accept</b> all the rules and
          policies for <b> Flipkart Clone</b>. I declare that i have all the
          responsiblity of all this Account
        </p>
        <button className="btn btn-outline-secondary ">Sign up</button>
      </div>
    </form>
  </form>)
};
export default function Modal(props) {
  const clickHandler = () => props.setModalIsVisible((preVlaue) => !preVlaue);

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={clickHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
