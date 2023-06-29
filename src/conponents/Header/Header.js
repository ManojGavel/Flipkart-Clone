import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AddShoppingCart, KeyboardArrowDown, KeyboardArrowUp, PersonOutline, ShoppingCart } from "@mui/icons-material";
import classes from "./header.module.css";
export default function Header() {
    const[mouseEnter,setMouseEnter]=useState(false);
const signInMouseEnterHandle=()=>{
    console.log(mouseEnter)
    setMouseEnter(true)
}
  return (
    <header>
      <nav className="navbar navbar-expend-lg bg-body-tertiary">
        <div >
          <div className="contaienr-fluid d-flex w-100 justify-content-between">
            <div className="left w-50 d-flex">
              <a href="/" className="text-decoration-none">
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
              </a>
              <div className="w-100">
                <form className={`w-100 ms-3 d-flex border p-1 mt-2 rounded-1 ${classes.searchFrom}`}>
                  <SearchIcon  />
                  <input
                    type="text"
                    className="w-100 border-0"
                    placeholder="Search Items..."
                  />
                </form>
              </div>
            </div>
            <div className={` mt-2 d-flex justify-content-between ${classes.right}`}>
              <div>
                <span>
                  <StorefrontIcon />
                </span>
                <span>Become a Seller</span>
              </div>
              <div className={classes.signin} onMouseOut={()=>{setMouseEnter(false)}} onMouseEnter={signInMouseEnterHandle}>
                <span>
                  <PersonOutline />
                </span>
                <span>Sign in {!mouseEnter?<KeyboardArrowDown/>:<KeyboardArrowUp/>}</span>
              </div>
              <div>
                <span>
                  <AddShoppingCart />
                </span>
                <span>Cart</span>
              </div><div>
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
