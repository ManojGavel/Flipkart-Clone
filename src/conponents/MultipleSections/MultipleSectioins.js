import React from "react";
import IndianCurrencyFormatter from "../IndianCurrencyFormatter/IndianCurrencyFormatter";
import classes from "./multipleSections.module.css";
export default function MultipleSectioins() {
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
      name: "Iphone 14/14plus",
      offer: "incl of Offers",
      image:
        "https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/r/k/h/g73-5g-paux0023in-motorola-original-imagngjh7epkhqdg.jpeg?q=80",
      price: 30000,
    },
    
  ];
  return (
    <div className="d-flex">
      
      <section className="ms-3 me-1" >
        <div className="">
          <div className={`card ${classes.products_ch1}`}>
            <h3 className="ms-3 fs-4 mt-3">Top Offers</h3>
            <div>
              <div>
                <div className="card-body d-flex flex-wrap justify-content-around">
                  {porducts.map((element) => (
                    <div
                      key={element.id}
                      className="card my-2"
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
                          from{" "}
                          <IndianCurrencyFormatter amount={element.price} />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-1">
        <div className="">
          <div className={`card ${classes.products_ch1}`}>
            <h3 className="ms-3 fs-4 mt-3">Top Offers</h3>
            <div>
              <div>
                <div className="card-body d-flex flex-wrap justify-content-around">
                  {porducts.map((element) => (
                    <div
                      key={element.id}
                      className="card my-2"
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
                          from{" "}
                          <IndianCurrencyFormatter amount={element.price} />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="me-3 ms-1">
        <img height="625px"  src="https://rukminim1.flixcart.com/www/530/750/promos/22/05/2023/44d98c6b-16de-4759-a3c4-9d6412ad8bfa.jpg?q=80" alt="" />
      </section>
    </div>
  );
}
