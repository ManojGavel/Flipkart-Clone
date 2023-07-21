import React from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../fireBase/Firebase";

const Backdrop = (props) => {
  return <div className={classes.modal} onClick={props.onConfirm} />;
};

const Overlay = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState(null);

  const setWarning = (type, message) => {
    setMessage({ type, message });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const formSubmitHandler = (e) => {
    return e.preventDefault();
  };

  const signUpHandler = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        if (userCredential) {
          alert("User Created");
        }
      })
      .catch((error) => {
        setWarning("danger", error.message);
      });
  };

  const signInHandler = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        if (userCredential) {
          props.onConfirm();
        }
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };
  return (
    <div className={`card ${classes.form}`}>
      <img
        src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
        height="50px"
        alt=""
      />
      <div className={classes.warning}>
        {/* warning section */}
        {message && (
          <div
            className={`alert alert-${message.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{message.type}</strong>{" "}
            {<message className="message"></message>}
            fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </div>
      <form onSubmit={formSubmitHandler} className="card-body">
        <div>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button onClick={signInHandler} className="btn btn-primary">
          Sign In
        </button>
        <div>
          <p>
            <input type="checkbox" /> I read and <b>Accept</b> all the rules and
            policies for <b> Flipkart Clone</b>. I declare that i have all the
            responsiblity of all this Account
          </p>
          <button
            onClick={signUpHandler}
            className="btn btn-outline-secondary "
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
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
        <Overlay onConfirm={clickHandler} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
