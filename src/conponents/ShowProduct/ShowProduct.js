import React, { useEffect } from "react";
import { useStateValue } from "../../context/Context";
import IndianCurrencyFormatter from "../IndianCurrencyFormatter/IndianCurrencyFormatter";
import classes from "./showProduct.module.css";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

export default function ShowProduct() {
  const [status, dispatch] = useStateValue();
  // console.log(status);
  return (
    <>
      {status.showProduct.map((element,index) => {
        return (
          <Link key={element.index} 
            onClick={() =>
              dispatch({
                type: "productPage",
                prodyct: {
                  id: element.id,
                  img: element.img,
                  name: element.name,
                  offer: element.offer,
                  price: element.price,
                  rating: element.rating,
                  review: element.review,
                  spacefication: element.spacefication,
                },
              })
            }
            className="text-decoration-none text-dark"
            to="/productPage"
          >
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
                  {element.spacefication.map((element,index) => {
                    return <li key={index}>{element}</li>;
                  })}
                </ul>
              </div>
              <div className={classes.price}>
                <h3>
                  <IndianCurrencyFormatter amount={element.price} />{" "}
                  &nbsp;&nbsp;{" "}
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
                  <span className="text-success">
                    {" "}
                    {element.offer.off}% off
                  </span>
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
          </Link>
        );
      })}
    </>
  );
}
