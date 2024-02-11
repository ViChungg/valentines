import { useNavigate } from "react-router-dom";


export default function Rejected() {
  const navigate = useNavigate();

  return (
    <div className="col-lg-4 m-auto text-center card p-2">
      <img src={require("../assets/images/rejected.jpg")} className="rounded mx-auto d-block img-fluid mb-2" alt="valentine"/>
      <p className="fs-3">N-nani? You hate me?</p>
      <div className="d-inline-flex justify-content-around w-100">
        <button className="btn btn-danger" onClick={() => navigate("/")}>I'm sorry! Let me try again</button>
        <button className="btn btn-secondary" onClick={() => navigate("/superrejected")}>Hell yeah</button>
      </div>
    </div>
  );
}