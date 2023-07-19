import React from "react";
import classes from "./checkout.module.css";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Checkout() {
  return (
    <div className={classes.checkout}>
      <div>
        <div className={`mb-2 py-1 ${classes.id}`}>
          <p className=" mx-2 fw-semibold mb-1">
            {" "}
            <span className="bg-light mx-3 px-2 py-0 small rounded  text-primary">
              1
            </span>{" "}
            <span className="text-black-50">LOGIN</span>
            <span>
              &nbsp;
              <CheckIcon sx={{ fontSize: "18px", color: "blue" }} />
            </span>
          </p>
          <p className="mx-5 fw-semibold fs-6 small mb-1">+9109266387</p>
        </div>
        <div className={classes.address}>
          <div className={`bg-primary p-2 rounded-1 rounded-bottom-0`}>
            <p className="text-light m-0 fw-semibold">
              {" "}
              <span className="bg-light mx-3 px-2 py-0 small rounded  text-primary">
                2
              </span>{" "}
              DELIVERY ADDRESS
            </p>
          </div>
          <div className="d-flex mx-3 mt-2 pb-3 mb-3">
            <div>
              <input type="radio" checked />{" "}
            </div>
            <div className="mx-3">
              <p className="mb-1  fw-semibold">
                Manoj Gavel <span className={classes.homeAddress}>HOME</span>{" "}
                9109266387
              </p>
              <p className="small ">
                Krishna villa, Ganga nagar sec 2,mangla, Bilaspur, Chhattisgarh
              </p>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fb641b",
                  padding: "7px 25px",
                  "&:hover": {
                    backgroundColor: "#fb641b",
                  },
                }}
              >
                DELIVER HERE
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div>this is payment show </div> */}
    </div>
  );
}
