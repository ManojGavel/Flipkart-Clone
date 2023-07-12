import React, { useEffect } from "react";
import { useStateValue } from "../../context/Context";
import IndianCurrencyFormatter from "../IndianCurrencyFormatter/IndianCurrencyFormatter";
import classes from "./showProduct.module.css";
import StarIcon from "@mui/icons-material/Star";

export default function ShowProduct() {
  const [status, dispatch] = useStateValue();
  console.log(status);
  return (
    <>
      {status.showProduct.map((element) => {
        return (
          <div className="d-flex border m-2 bg-light p-3 align-items-center">
            <img
              className={classes.img}
              height="160px"
              src={element.img}
              alt={element.name}
            />
            <div className={classes.info}>
              <h3 className="fs-4">{element.name} </h3>
              <p className="fs-6 text-black-50">
                <span className="text-bg-success rounded text-light small px-1">
                  {element.rating}&nbsp;
                  <span className={classes.star}>
                    <StarIcon />
                  </span>
                </span>{" "}
                &nbsp;
                {element.review}
              </p>

              <ul className={classes.ul}>
                {element.spacefication.map((element) => {
                  return <li>{element}</li>;
                })}
              </ul>
            </div>
            <div className={classes.price}>
              <h3>
                <IndianCurrencyFormatter amount={element.price} /> &nbsp;&nbsp;{" "}
                <img
                  height="20px"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt="f-assurend"
                />
              </h3>
              <p className="m-0">
                <span className="text-decoration-line-through text-black-50">
                  <IndianCurrencyFormatter amount={element.offer.price} />
                </span>
                <span className="text-success"> {element.offer.off}%</span>
              </p>
              <p className="m-0">
                Free Delivery by <span>Tody</span>
              </p>
              <p className="text-success m-0">Daily saver</p>
              <p>
                upto{" "}
                <span className="fw-bold">
                  <IndianCurrencyFormatter amount={35999} />{" "}
                </span>
                off on exchange
              </p>
            </div>
          </div>
        );
      })}
      <div className="d-flex border m-2 bg-light p-3 align-items-center">
        <img
          className={classes.img}
          height="160px"
          src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70"
          alt="iPhone 14"
        />
        <div className={classes.info}>
          <h3 className="fs-4">Apple iPhone 14 (Purple, 128 GB) </h3>
          <p className="fs-6 text-black-50">
            <span className="text-bg-success rounded text-light small px-1">
              4.6{" "}
              <span className={classes.star}>
                <StarIcon />
              </span>
            </span>{" "}
            39,999 Rating & 1,530 Reviews
          </p>

          <ul className={classes.ul}>
            <li className="">128 GB ROM </li>
            <li>15.49cm(6.1) super Retina XDR Display </li>
            <li>12MP + 12MP | 12MP Front Camera </li>
            <li>A15 Bionic Chip, 6 Core Processor</li>
            <li>1 Year warranty for Phone and 6 month for Box-Accessories</li>
          </ul>
        </div>
        <div className={classes.price}>
          <h3 className="">
            <IndianCurrencyFormatter amount={71099} /> &nbsp;&nbsp;{" "}
            <img
              height="20px"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              alt="f-assurend"
            />
          </h3>
          <p className="m-0">
            <span className="text-decoration-line-through text-black-50">
              <IndianCurrencyFormatter amount={79099} />
            </span>
            <span className="text-success"> 11% off</span>
          </p>
          <p className="m-0">
            Free Delivery by <span>Tody</span>
          </p>
          <p className="text-success m-0">Daily saver</p>
          <p>
            upto{" "}
            <span className="fw-bold">
              <IndianCurrencyFormatter amount={35999} />{" "}
            </span>
            off on exchange
          </p>
        </div>
      </div>
    </>
  );
}
