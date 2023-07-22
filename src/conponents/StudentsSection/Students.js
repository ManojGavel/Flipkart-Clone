import React from "react";
import IndianCurrencyFormatter from "../IndianCurrencyFormatter/IndianCurrencyFormatter";
import classes from "./students.module.css";
export default function Students() {
  const dataArr = [
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/6/w/g/mnwa3hn-a-laptop-apple-original-imagmfhehcvgub84.jpeg?q=70",
      price: 69999,
      name: "Mac Offer's",
    },
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/image/612/612/kebpqq80/diary-notebook/r/z/r/classmate-02105010-original-imafvfcheknzyq47.jpeg?q=70",
      price: 59,
      name: "Note Book's",
    },
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/image/210/210/l1pc3gw0/smartwatch/z/n/6/-original-imagd7d7hxrcguhv.jpeg?q=80",
      price: 69999,
      name: "Smart Watches Offer's",
    },
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/image/210/210/kwpam4w0/cases-covers/back-cover/j/d/r/enfl-3d-relif-ip-13-mixlilies-enflamo-original-imag9bg9humexnp9.jpeg?q=80",
      price: 69999,
      name: "Back Cover",
    },
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/image/210/210/k687wy80/office-study-table/y/h/f/particle-board-vi-ct-ph-ost-wb-13-flipkart-perfect-homes-studio-original-imafzkwv94yn5bhg.jpeg?q=80",
      price: 9999,
      name: "Study Tables",
    },
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/image/210/210/kuof5ow0/trimmer/7/z/f/0-5-10-mm-bt3101-15-stainless-steel-cordless-philips-original-imag7r4r7ztgnuyk.jpeg?q=80",
      price: 699,
      name: "Grooming Kits",
    },
  ];
  return (
    <div>
      <div className="card m-3">
        <div className="m-2">
          <h3>Students Essentilas</h3>
          <div className="d-flex flex-wrap justify-content-around">
            {dataArr.map((e) => {
              return (
                <div
                  key={e.id}
                  className={`card align-items-center ${classes.card}`}
                >
                  <img
                    className={`mt-5 ${classes.img}`}
                    width="150px"
                    src={e.img}
                    alt="products"
                  />
                  <p className="m-0 mt-4 fs-5">{e.name}</p>
                  <h3 className=" fs-6">
                    from <IndianCurrencyFormatter amount={e.price} />
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
