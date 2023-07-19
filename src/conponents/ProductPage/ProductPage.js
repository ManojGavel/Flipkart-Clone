import React, { useEffect, useState } from "react";
import classes from "./proudctPage.module.css";
import StarIcon from "@mui/icons-material/Star";
import IndianCurrencyFormatter from "../IndianCurrencyFormatter/IndianCurrencyFormatter";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useStateValue } from "../../context/Context";
import { useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const navigate = useNavigate();
  const [pincode, setPincode] = useState("");
  const isOpen = pincode.length > 5 ? false : true;
  const [status, dispatch] = useStateValue();
  const [productRender, setProductRender] = useState([]);
  const [smallImg, setSmallImg] = useState("");
  const [bigImg, setBigImg] = useState("");
  useEffect(() => {
    setProductRender(status.showProduct);
    let productImg = status.showProduct[0].img;
    // console.log(productImg);
    let SmallImg = productImg.replace("312/312", "128/128");
    setSmallImg(SmallImg);
    let BigImg = productImg.replace("312/312", "416/416");
    setBigImg(BigImg);
  }, []);
  useEffect(() => {
    // console.log(status.cartItems);
  }, [status]);
  
  return (
    <>
      {productRender.map((element) => {
        return (
          <section className={classes.main}>
            <div className="d-flex justify-content-around">
              <div className="d-flex mx-2 p-2 justify-content-center text-center">
                <div>
                  <div className={classes.hoverImg}>
                    <img src={smallImg} alt="" />
                  </div>
                  <div className={classes.hoverImg}>
                    <img
                      src="https://rukminim2.flixcart.com/image/128/128/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70"
                      alt=""
                    />
                  </div>
                  /
                  <div className={classes.hoverImg}>
                    <img
                      src="https://rukminim2.flixcart.com/image/128/128/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <img
                    className={`${classes.bigImg} border rounded-1 p-2`}
                    height="416px"
                    width="416px"
                    src={bigImg}
                    alt=""
                  />
                  <div className="flex mt-3">
                    <ul className="d-flex list-unstyled justify-content-between">
                      <li>
                        <Button
                          onClick={() => {
                            dispatch({
                              type: "addToCart",
                              item: {
                                id: element.id,
                                img: element.img,
                                name: element.name,
                                offer: element.offer,
                                price: element.price,
                                rating: element.rating,
                                review: element.review,
                                spacefication: element.spacefication,
                                quantity: 1,
                              },
                            });
                          }}
                          sx={{
                            padding: "1rem 3rem",
                            backgroundColor: "#ff9f00",
                            "&:hover": {
                              backgroundColor: "#ecb150", // Change to your desired hover color
                            },
                          }}
                          variant="contained"
                          startIcon={<AddShoppingCartOutlined />}
                        >
                          Add to Cart
                        </Button>
                      </li>
                      <li>
                        <Button
                          onClick={() => {
                            navigate("/cart");
                            dispatch({
                              type: "addToCart",
                              item: {
                                id: element.id,
                                img: element.img,
                                name: element.name,
                                offer: element.offer,
                                price: element.price,
                                rating: element.rating,
                                review: element.review,
                                spacefication: element.spacefication,
                                quantity: 1,
                              },
                            })}}
                          sx={{
                            padding: "1rem 3rem",
                          }}
                          variant="contained"
                          color="warning"
                          startIcon={<FlashOnIcon />}
                        >
                          Buy Now
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mx-2">
                <h3 className="fs-5">{element.name}</h3>
                <div>
                  <div>
                    {" "}
                    <span
                      className={`text-bg-success text-light small px-1 rounded-1 ${classes.rating}`}
                    >
                      &nbsp;{element.rating} <StarIcon />
                    </span>{" "}
                    &nbsp;{" "}
                    <span className="text-black-50">{element.review}</span>{" "}
                    &nbsp;&nbsp;{" "}
                    <figure className="d-inline">
                      <img
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                        height="20px"
                        alt=""
                      />
                    </figure>
                  </div>
                  <p className="small text-success m-0">Spical Price</p>
                  <div className="">
                    <span className="fw-bold fs-3">
                      <IndianCurrencyFormatter amount={element.price} />{" "}
                    </span>
                    <span className="text-black-50 text-decoration-line-through">
                      <IndianCurrencyFormatter amount={element.offer.price} />
                    </span>
                    <span className="text-success fw-bold">
                      &nbsp;&nbsp; {element.offer.off}% off
                    </span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0 mt-1">Available offers</p>
                    <ul
                      className={`list-unstyled small mb-1 ${classes.offers}`}
                    >
                      <li className="">
                        <LocalOfferIcon /> &nbsp;
                        <span>
                          {" "}
                          <span className="fw-bold">Bank Offer</span> 10% off on
                          Axis Bank Credit Card and EMI Transactions, up to
                          ₹1500, on orders of ₹5,000 and above
                        </span>{" "}
                        <span className="text-primary fw-semibold">T&C</span>{" "}
                      </li>
                      <li className="">
                        <LocalOfferIcon /> &nbsp;
                        <span>
                          {" "}
                          <span className="fw-bold">Bank Offer</span> Flat
                          ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on
                          orders priced between ₹15,000 to ₹39,999
                        </span>{" "}
                        <span className="text-primary fw-semibold">T&C</span>{" "}
                      </li>
                      <li className="">
                        <LocalOfferIcon /> &nbsp;
                        <span>
                          {" "}
                          <span className="fw-bold">Bank Offer</span> 5% off on
                          Flipkart Axis Bank Credit Card and EMI Trxns, up to
                          ₹750, on orders of ₹5,000 and above
                        </span>{" "}
                        <span className="text-primary fw-semibold ">T&C</span>{" "}
                      </li>
                      <li className="">
                        <LocalOfferIcon /> &nbsp;
                        <span>
                          {" "}
                          <span className="fw-bold">Bank Offer</span> Sign-up
                          for Flipkart Pay Later & get free Times Prime Benefits
                          worth ₹10,000*
                        </span>{" "}
                        <span className="text-primary fw-semibold">
                          Know More
                        </span>{" "}
                      </li>
                    </ul>
                    <p className="text-primary fw-semibold">
                      View 7 more offers
                    </p>
                  </div>
                  <div className={`d-flex `}>
                    <div className={classes.moreInfo}>
                      <span className="text-black-50">Delivery</span>
                    </div>
                    <div className={classes.moreInfo}>
                      <Tooltip
                        open={isOpen}
                        arrow
                        placement="right"
                        title="Enter Pincode"
                      >
                        <div className=" border-primary  d-flex">
                          <span>
                            <LocationOnIcon />
                          </span>
                          <input
                            onChange={(e) => {
                              setPincode(e.target.value);
                            }}
                            type="text"
                            className="border-0 w-100"
                            placeholder="Enter Delivery Pincode"
                          />
                          <button className="btn btn-link text-decoration-none fw-semibold">
                            Check
                          </button>
                        </div>
                      </Tooltip>
                      <div className={classes.deliveryTime}>
                        <span className="fw-semibold border-0 border-bottom-0">
                          Delivery by20 Jul, Thursday
                        </span>{" "}
                        <span className="text-body-tertiary">
                          &nbsp;|&nbsp;
                        </span>
                        <span className="text-success">Free&nbsp;</span>
                        <span className="text-black-50 text-decoration-line-through">
                          <IndianCurrencyFormatter amount={40} />
                        </span>{" "}
                        <IconButton>
                          <InfoIcon />
                        </IconButton>
                        <p className="small text-black-50">
                          if ordered before 5:34 PM
                        </p>
                        <button className="btn  p-0 btn-light text-primary text-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Hignlight section*/}
                  <div className={classes.highlights}>
                    <div className="d-flex">
                      <div className={classes.moreInfo}>
                        <span className="text-black-50">HighLights</span>
                      </div>
                      <div className={classes.moreInfo}>
                        <ul className={classes.ul}>
                          {element.spacefication.map((element, index) => {
                            return <li key={index}>{element}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className={classes.moreInfo}>
                        <span className="text-black-50">Services</span>
                      </div>
                      <div className={classes.moreInfo}>
                        <ul className={classes.ul}>
                          <li>No cost EMI starting from ₹1,395/month</li>
                          <li>Cash on Delivery</li>
                          <li>Net banking & Credit/ Debit/ ATM card</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
