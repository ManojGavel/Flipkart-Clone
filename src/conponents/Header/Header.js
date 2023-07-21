import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  PersonOutline,
} from "@mui/icons-material";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useStateValue } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../fireBase/Firebase";

export default function Header(props) {
  const [state, dispatch] = useStateValue();

  const userMail = state.user?.email.split("@");
  
  const navigate = useNavigate();
  const cartClickHandelr = () => {
    console.log("clicked to cart");
    navigate("/cart");
  };

  return (
    <header className={classes.header}>
      <nav className="navbar navbar-expend-lg bg-body-tertiary">
        <div>
          <div className="contaienr-fluid d-flex w-100 justify-content-between">
            <div className="left w-50 d-flex">
              <Link
                onClick={() => console.log("Clicked to product")}
                to="/"
                className="text-decoration-none"
              >
                <figure className={`m-0 ${classes.figure}`}>
                  <div className={classes.navLogo}></div>
                  <span>
                    <i className="text-secondary">Exploer</i>
                    <i className="text-warning">plus </i>
                    <img
                      src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg"
                      alt="plus+"
                    />
                  </span>
                </figure>
              </Link>
              <div className="w-100">
                <form
                  className={`w-100 ms-3 d-flex border p-1 mt-2 rounded-1 ${classes.searchFrom}`}
                >
                  <SearchIcon />
                  <input
                    type="text"
                    className="w-100 border-0"
                    placeholder="Search Items..."
                  />
                </form>
              </div>
            </div>
            <div
              className={` mt-2 d-flex justify-content-between ${classes.right}`}
            >
              <div>
                <span>
                  <StorefrontIcon />
                </span>
                <span>Become a Seller</span>
              </div>
              <button className={`${classes.signin} btn btn-light`}>
                <span
                  onClick={() => {
                    !state.user &&
                      props.setModalIsVisible((preValue) => !preValue);
                    state.user &&
                      signOut(auth)
                        .then(() => {
                          console.log("signout successfully");
                        })
                        .catch((error) => {
                          alert(error.message);
                        });
                  }}
                >
                  <PersonOutline
                    sx={{
                      fontSize: "20px",
                    }}
                  />
                  {state.user ? userMail[0] : "Guest"}{" "}
                </span>
                <div>
                  <span style={{ fontSize: "12px" }}>
                    {state.user ? "sign Out" : "Sign In"}
                  </span>
                </div>
              </button>
              <div onClick={cartClickHandelr}>
                <span>
                  <Badge badgeContent={state.cartItems?.length} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </span>
                <span>Cart</span>
              </div>
              <div>
                <span>
                  <MoreVertIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
