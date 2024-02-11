import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Success() {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState<boolean>(false);

  return (
    <>
      <Confetti width={width || 0} height={height || 0} />
      <div className="col-lg-3 m-auto text-center card p-2">
        {showAlert &&
          <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
            Unfortunately, we are not accepting refunds at this time. If you have any questions or concerns, please contact our
            system administrator at <a href="vickychungg@gmail.com">vickychungg@gmail.com</a>
            <br/>Happy Valentine's Day!<br/>
            <button className="btn btn-danger" onClick={() => navigate("/")}>Home</button>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}></button>
          </div>
        }
        <div className="">
          <img src={require("../assets/images/success.jpg")} className="rounded mx-auto d-block img-fluid mb-2" alt="valentine"/>
          <p className="fs-3">Tricked ya! We come as a package deal hehe! No take-backs, though!</p>
          <button className="btn btn-danger" onClick={() => setShowAlert(true)}>Can I get a refund please?</button>
        </div>
      </div>
    </>
  );
}