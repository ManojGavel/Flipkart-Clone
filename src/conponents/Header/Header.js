import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  PersonOutline,
} from "@mui/icons-material";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
export default function Header(props) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const signInMouseEnterHandle = () => {
    console.log(mouseEnter);
    setMouseEnter(true);
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
              <button
                className={`${classes.signin} btn btn-light`}
                onMouseOut={() => {
                  setMouseEnter(false);
                }}
                onMouseEnter={signInMouseEnterHandle}
              >
                <span
                  onMouseOut={() => {
                    setMouseEnter(false);
                  }}
                  onMouseEnter={signInMouseEnterHandle}
                >
                  <PersonOutline />
                </span>
                <span
                  onMouseOut={() => {
                    setMouseEnter(false);
                  }}
                  onClick={() =>
                    props.setModalIsVisible((preValue) => !preValue)
                  }
                  onMouseEnter={signInMouseEnterHandle}
                >
                  Sign in{" "}
                  {!mouseEnter ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                </span>
              </button>
              <div>
                <span>
                  <Badge badgeContent={0} color="primary">
                    <ShoppingCartOutlinedIcon/>
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
