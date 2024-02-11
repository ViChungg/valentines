import { useNavigate } from "react-router-dom";
import React from "react";

export default function SuperRejected() {
  const navigate = useNavigate();

  return (
    <div className="col-lg-3 m-auto text-center card p-2">
      <img src={require("../assets/images/superrejected.jpg")} className="rounded mx-auto d-block img-fluid mb-2" alt="valentine"/>
      <p className="fs-3">Better watch your backヽ༼ ಠ益ಠ ༽ﾉ</p>
      <div className="d-inline-flex justify-content-around w-100">
        <button className="btn btn-danger" onClick={() => navigate("/")}>Try again?</button>
      </div>
    </div>
  );
}