import React from "react";
import classes from "./cart.module.css";
import { useStateValue } from "../../context/Context";
import IndianCurrencyFormatter from "../IndianCurrencyFormatter/IndianCurrencyFormatter";

export default function Cart() {
  const [state, dispatch] = useStateValue();
  return (
    <div className={classes.cart}>
      <div className={classes.items}>
        <div className="d-flex my-3 justify-content-evenly ">
          <div>
            <h3 className="fs-5">
              FlipKart{" "}
              {state.cartItems.length > 0 && `(${state.cartItems.length})`}
            </h3>
          </div>
          <div>
            <h3 className="fs-5">Grocery</h3>
          </div>
        </div>
        <div className={classes.item}>
          <div>
            <img
              src="https://rukminim2.flixcart.com/image/224/224/l3rmzrk0/spin-press-launch-toy/f/o/b/dynamite-battle-layer-system-db-launcher-ancientkart-original-imagetp92myf4cuw.jpeg?q=90"
              alt=""
            />
          </div>
          <div>
            <h3 className="fs-6 fw-semibold m-0">
              AncientKart Dynamite Battle Layer System DB Launcher
            </h3>
            <p className="text-black-50 mb-1">Multicolor</p>
            <div>
              <span className="text-black-50 fs-6">Seller:SpeechlessArts</span>
              &nbsp;
              <img
                height="20px"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt="f-assured"
              />
            </div>
            <div>
              <span className="text-decoration-line-through text-balck-50 small">
                <IndianCurrencyFormatter amount={999} />
              </span>
              <span className="fs-6 fw-semibold">
                &nbsp; <IndianCurrencyFormatter amount={9999} />
              </span>
              <span className="text-success">&nbsp; 99% off</span>
              <span className="text-success">&nbsp;&nbsp; 4 offer applied</span>
            </div>
          </div>
          <div> date time</div>
        </div>
      </div>
      <div className={classes.priceing}>this is flex 2</div>
    </div>
  );
}
