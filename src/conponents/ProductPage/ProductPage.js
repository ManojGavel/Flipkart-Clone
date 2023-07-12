import React from "react";
import classes from "./proudctPage.module.css";
import StarIcon from "@mui/icons-material/Star";
import IndianCurrencyFormatter from "../IndianCurrencyFormatter/IndianCurrencyFormatter";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ProductPage() {
  return (
    <section className={classes.main}>
      <div className="d-flex justify-content-around">
        <div className="d-flex mx-2 border rounded-1 p-2 justify-content-center text-center">
          <div>
            <div className={classes.hoverImg}>
              <img
                src="https://rukminim2.flixcart.com/image/128/128/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70"
                alt=""
              />
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
              height="416px"
              src="https://rukminim2.flixcart.com/image/416/416/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70"
              alt=""
            />
          </div>
        </div>
        <div className="mx-2">
          <h3 className="fs-5">
            Lenovo 23.8 inch Full HD VA Panel 3-Side Near Edgeless with TUV Eye
            Care Monitor (D24-20) (Response Time: 4 ms, 75 Hz Refresh Rate)
          </h3>
          <div>
            <p>
              {" "}
              <span
                className={`text-bg-success text-light small px-1 rounded-1 ${classes.rating}`}
              >
                &nbsp;4.4 <StarIcon />
              </span>{" "}
              &nbsp;{" "}
              <span className="text-black-50">2,035 Ratings & 260 Reviews</span>{" "}
              &nbsp;&nbsp;{" "}
              <figure className="d-inline">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  height="20px"
                  alt=""
                />
              </figure>
            </p>
            <p className="small text-success m-0">Spical Price</p>
            <div className="">
              <span className="fw-bold fs-3">
                <IndianCurrencyFormatter amount={99999} />{" "}
              </span>
              <span className="text-black-50 text-decoration-line-through">
                <IndianCurrencyFormatter amount={99999} />
              </span>
              <span className="text-success fw-bold">&nbsp;&nbsp; 99% off</span>
            </div>
            <div>
              <p className="fw-bold mb-0 mt-1">Available offers</p>
              <ul className={`list-unstyled small mb-1 ${classes.offers}`}>
                <li className="">
                  <LocalOfferIcon /> &nbsp;
                  <span>
                    {" "}
                    <span className="fw-bold">Bank Offer</span> 10% off on Axis
                    Bank Credit Card and EMI Transactions, up to ₹1500, on
                    orders of ₹5,000 and above
                  </span>{" "}
                  <span className="text-primary fw-semibold">T&C</span>{" "}
                </li>
                <li className="">
                  <LocalOfferIcon /> &nbsp;
                  <span>
                    {" "}
                    <span className="fw-bold">Bank Offer</span> Flat ₹1,250 Off
                    on HDFC Bank Credit Card EMI Trxns on orders priced between
                    ₹15,000 to ₹39,999
                  </span>{" "}
                  <span className="text-primary fw-semibold">T&C</span>{" "}
                </li>
                <li className="">
                  <LocalOfferIcon /> &nbsp;
                  <span>
                    {" "}
                    <span className="fw-bold">Bank Offer</span> 5% off on
                    Flipkart Axis Bank Credit Card and EMI Trxns, up to ₹750, on
                    orders of ₹5,000 and above
                  </span>{" "}
                  <span className="text-primary fw-semibold ">T&C</span>{" "}
                </li>
                <li className="">
                  <LocalOfferIcon /> &nbsp;
                  <span>
                    {" "}
                    <span className="fw-bold">Bank Offer</span> Sign-up for
                    Flipkart Pay Later & get free Times Prime Benefits worth
                    ₹10,000*
                  </span>{" "}
                  <span className="text-primary fw-semibold">Know More</span>{" "}
                </li>
              </ul>
              <p className="text-primary fw-semibold">View 7 more offers</p>
            </div>
            <div className={`d-flex `}>
              <div className={classes.moreInfo}>
                <span className="text-black-50">Delivery</span>
              </div>
              <div className={classes.moreInfo}>
                <div className=" border-primary  d-flex">
                    <span><LocationOnIcon/></span>
                  <input
                    type="text"
                    className="border-0 w-100"
                    placeholder="Enter Delivery Pincode"
                  />
                  <button className="btn btn-link text-decoration-none fw-semibold">Check</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
