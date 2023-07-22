import React from "react";
import classes from "./offers.module.css";
export default function Offers() {
  const dataArr = [
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/a9bf98d71bc54e02.jpg?q=80",
    },
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/3e5193fce72ade87.jpg?q=80",
    },
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/f7ba6ac06a238483.jpg?q=80",
    },
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/20a2dfd4189d9894.jpg?q=80",
    },
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/ac07186f648f3c6b.jpg?q=80 ",
    },
    {
      id: (Math.random() * 1000000).toFixed(),
      img: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/00181c784f462f91.jpg?q=80",
    },
  ];
  return (
    <div className="d-flex flex-wrap m-3 justify-content-around">
      {dataArr.map((e) => {
        return<div key={e.id} className="my-2">
          <img  className={classes.img}   src={e.img} alt="offer" />
        </div>;
      })}
    </div>
  );
}
