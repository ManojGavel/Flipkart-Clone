import React, { useEffect } from "react";
import classes from "./cart.module.css";
import { useStateValue } from "../../context/Context";
import IndianCurrencyFormatter from "../IndianCurrencyFormatter/IndianCurrencyFormatter";
import { Button } from "@mui/material";

export default function Cart() {
  const [state, dispatch] = useStateValue();
  const [price, setPrice] = React.useState();
  const[discount,setDiscount]=React.useState(0)
  const[priceWithoutDiscount,setPriceWithoutDiscount]=React.useState(0)
  useEffect(() => {
    let discountArr = state.cartItems?.map((element) => {
      return element.offer.price
    })
    let discountReducedArr1=discountArr.reduce((a,b)=>a+b,0)
    setPriceWithoutDiscount(discountReducedArr1)
    console.log(discountArr)
    console.log(discountReducedArr1)
    let priceArr = state.cartItems?.map((element) => {
      return element.price;
    });
    setPrice(priceArr.reduce((a, b) => a + b, 0));
    setDiscount(discountReducedArr1-price)
  }, []);
  console.log(state);
  console.log(state.cartItems);
  return (
    <div className={classes.cart}>
      <div className={classes.items}>
        <div className="d-flex mb-2 p-3 bg-light justify-content-evenly rounded-1 rounded-bottom-0">
          <div className="border-bottom border-3">
            <h3 className="fs-5 text-primary">
              FlipKart{" "}
              {state.cartItems.length > 0 && `(${state.cartItems.length})`}
            </h3>
          </div>
          <div>
            <h3 className="fs-5">Grocery</h3>
          </div>
        </div>

        {state.cartItems.map((element) => {
          return (
            <div className={`${classes.item} rounded-1 mt-1`}>
              <div>
                <img src={element.img} alt="" />
              </div>
              <div>
                <h3 className="fs-6 fw-semibold m-0">{element.name}</h3>
                <p className="text-black-50 mb-1">Multicolor</p>
                <div className="mb-3">
                  <span className="text-black-50 fs-6">
                    Seller:SpeechlessArts
                  </span>
                  &nbsp;&nbsp;
                  <img
                    height="17px"
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt="f-assured"
                  />
                </div>
                <div className="mb-3">
                  <span className="text-decoration-line-through text-black-50 small">
                    <IndianCurrencyFormatter amount={element.offer.price} />
                  </span>
                  <span className="fs-6 fw-semibold">
                    &nbsp; <IndianCurrencyFormatter amount={element.price} />
                  </span>
                  <span className="text-success">
                    &nbsp; {element.offer.off}% off
                  </span>
                  <span className="text-success">
                    &nbsp;&nbsp; 4 offer applied
                  </span>
                </div>
                <div className="d-flex mb-1">
                  <div>
                    <button
                      className={`btn btn-lg btn-light ${
                        classes[`custom-button`]
                      }`}
                    >
                      Save for later
                    </button>
                  </div>
                  <div>
                    <button
                      id={element.id}
                      className={`btn btn-lg btn-light ${classes["custom-button"]}`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="small">
                  <span>Delivery by Tue Jul 18 | </span>
                  <span className="text-success"> Free </span>
                  <span className="text-decoration-line-through text-black-50">
                    <IndianCurrencyFormatter amount={40} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        <div className={`${classes.item} rounded-1 mt-1`}>
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
            <div className="mb-3">
              <span className="text-black-50 fs-6">Seller:SpeechlessArts</span>
              &nbsp;&nbsp;
              <img
                height="17px"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt="f-assured"
              />
            </div>
            <div className="mb-3">
              <span className="text-decoration-line-through text-black-50 small">
                <IndianCurrencyFormatter amount={999} />
              </span>
              <span className="fs-6 fw-semibold">
                &nbsp; <IndianCurrencyFormatter amount={9999} />
              </span>
              <span className="text-success">&nbsp; 99% off</span>
              <span className="text-success">&nbsp;&nbsp; 4 offer applied</span>
            </div>
            <div className="d-flex mb-1">
              <div>
                <button
                  className={`btn btn-lg btn-light ${classes[`custom-button`]}`}
                >
                  Save for later
                </button>
              </div>
              <div>
                <button
                  className={`btn btn-lg btn-light ${classes["custom-button"]}`}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="small">
              <span>Delivery by Tue Jul 18 | </span>
              <span className="text-success"> Free </span>
              <span className="text-decoration-line-through text-black-50">
                <IndianCurrencyFormatter amount={40} />
              </span>
            </div>
          </div>
        </div>

        <div className={`${classes.orderPlaceSection} p-3 `}>
          <Button
            sx={{
              backgroundColor: "#fb641b",
              color: "white",
              padding: "10px 10%",
              borderRadius: "2px",
              "&:hoaver": { backgroundColor: "#ecb150" },
            }}
            size="lg"
            variant={"solid"}
          >
            Buy Now
          </Button>{" "}
        </div>
      </div>
      <div className={classes.priceing}>
        <div className="bg-light py-3 rounded-1">
          <div className="border-bottom pb-1">
            <h3 className="fs-6 fw-semibold text-black-50 px-2">
              PRICE DETAILS
            </h3>
          </div>
          <div className={`px-2 ${classes.priceingDetils} `}>
            <div className="d-flex justify-content-between my-4">
              <div>Price({state.cartItems.length} item)</div>
              <div>
                <IndianCurrencyFormatter amount={priceWithoutDiscount} />
              </div>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <div>Discount</div>
              <div className="text-success">
                -<IndianCurrencyFormatter amount={discount} />
              </div>
            </div>
            <div
              className={`d-flex justify-content-between mb-2 pb-3 border-bottom `}
            >
              <div>Delivery Chagres</div>
              <div className="text-success">Free</div>
            </div>
          </div>
          <div>
            <div className={`px-2  ${classes.priceingDetils} `}>
              <div
                className={`d-flex justify-content-between  border-bottom pb-2`}
              >
                <div className="fs-4">Total Amount</div>
                <div className="fs-4">
                  <IndianCurrencyFormatter amount={price || 0} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-success px-2 mt-3 mb-0">
              You will save ₹9,005 on this order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}