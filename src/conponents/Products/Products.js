import React from "react";
import classes from "./product.module.css";
import IndianCurrencyFormatter from "../IndianCurrencyFormatter/IndianCurrencyFormatter";
import { Link } from "react-router-dom";
import {useStateValue} from "../../context/Context";


export default function Products() {
  const porducts = [
    {
      id: (Math.random() * 1000000000).toFixed(),
      name: "Iphone 14/14plus",
      offer: "incl of Offers",
      image:
        "https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=80",
      price: 23231,
    },
    {
      id: (Math.random() * 1000000000).toFixed(),
      name: "Samsung s21 FE",
      offer: "incl of Offers",
      image:
        "https://rukminim1.flixcart.com/image/210/210/kzpw2vk0/mobile/u/o/q/galaxy-s21-fe-5g-lavender-8gb-128gb-storage-sm-g990elviinu-original-imagbnbdaj3tygup.jpeg?q=80",
      price: 2332,
    },
    {
      id: (Math.random() * 1000000000).toFixed(),
      name: "Tempered Galss",
      offer: "incl of Offers",
      image:
        "https://rukminim1.flixcart.com/image/210/210/xif0q/screen-guard/edge-to-edge-tempered-glass/5/t/b/gsaug02-gorilla-cases-original-imaghkdfngmybbsg.jpeg?q=80",
      price: 89,
    },
    {
      id: (Math.random() * 1000000000).toFixed(),
      name: "Moto g73",
      offer: "incl of Offers",
      image:
        "https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/r/k/h/g73-5g-paux0023in-motorola-original-imagngjh7epkhqdg.jpeg?q=80",
      price: 30000,
    },
    {
      id: (Math.random() * 1000000000).toFixed(),
      name: "Insta camera",
      offer: "incl of Offers",
      image:
        "https://rukminim1.flixcart.com/image/210/210/j6zcwi80/instant-camera/5/q/n/ice-blue-with-brown-case-40-shots-mini-9-ice-blue-with-brown-original-imaex6nzgyqqzhfk.jpeg?q=80",
      price: 50000,
    },
  ];

 const [state,dispatch]= useStateValue()
  return (
    <section className="mx-3">
      <div className="d-flex">
        <div className={`card my-3 ${classes.products_ch1}`}>
          <h3 className="ms-3 fs-4 mt-3">Top Offers</h3>
          <div>
            <div>
              <div className="card-body d-flex justify-content-around">
                {porducts.map((element) => (
                  <Link key={element.id} className="text-decoration-none" onClick={()=>dispatch({type: element.name})} to="/productShow">
                  <div
                    key={element.id}
                    className="card"
                    style={{ width: "235px" }}
                  >
                    <div className=" text-center">
                      <div style={{ height: "150px" }}>
                        <img
                          className={`img-rounder mt-5 m-3 w-50`}
                          src={element.image}
                          alt="procuct"
                        />
                      </div>
                      <p className="lead m-0 mt-5 text-body-secondary">
                        {element.name}
                      </p>
                      <p className="font-weight-bold fs-6 m-0">
                        from <IndianCurrencyFormatter amount={element.price} />
                      </p>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`my-3 mx-2 ${classes.products_ch2} `}>
          <img className="rounded"
            src="https://rukminim1.flixcart.com/www/270/410/promos/28/06/2023/a1558b63-9717-4f16-acd7-9c26aafd31b7.jpg?q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
