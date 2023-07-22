import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { PersonOutline } from "@mui/icons-material";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { Badge, Button } from "@mui/material";
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
      <nav
        className={`navbar navbar-expend-lg bg-body-tertiary ${classes.nav1}`}
      >
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
              <div className={`w-100 ${classes.nav1Search}`}>
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
                <span className={classes.seller}>Become a Seller</span>
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
                <div className={classes.signInName}>
                  <span style={{ fontSize: "12px" }}>
                    {state.user ? "sign Out" : "Sign In"}
                  </span>
                </div>
              </button>
              <div onClick={cartClickHandelr}>
                <span>
                  <Badge badgeContent={state.cartItems?.length} className={classes.Badge} color="primary">
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
      <nav className={classes.nav2}>
        <div>
          <div className="container-fluid">
            <div className="d-flex justify-content-between pt-3 pb-2">
              <Button
                variant="contained"
                color="primary"
                sx={{ backgroundColor: "#2954e4", width: "40%", height: "6%" }}
              >
                <span>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk_header_mobile_logo-bafb3a.svg"
                    alt=""
                  />
                </span>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ backgroundColor: "#f0f0f0", width: "40%", height: "6%" }}
              >
                <span>
                  <img
                    height="23px"
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk_header_grocery_mobile_logo-d5879f.svg"
                    alt=""
                  />
                </span>
              </Button>
            </div>
            <div className="w-100 pb-2">
              <form
                className={`w-100  d-flex border p-1 mt-2 rounded-1 ${classes.searchFrom}`}
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
        </div>
      </nav>
    </header>
  );
}
