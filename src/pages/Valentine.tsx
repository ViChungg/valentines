import { useNavigate } from "react-router-dom";
import "./valentine.css";


export default function Valentine() {
  const navigate = useNavigate();

  return (
    <div className="col-lg-4 m-auto text-center card p-2">
      <h2>Hello,  Mr. Andrew Ouyang.</h2>
      <img src={require("../assets/images/valentine.PNG")} className="rounded mx-auto d-block img-fluid mb-2" alt="valentine"/>
      <p className="fs-3">Will you be my Valentine?</p>
      <div className="d-inline-flex justify-content-around w-100">
        <button className="btn btn-danger w-25" onClick={() => navigate("/success")}>Yes</button>
        <button className="btn btn-secondary w-25" onClick={() => navigate("/rejected")}>No</button>
      </div>
    </div>
  );
}