import { Outlet } from "react-router-dom";
import "./pages/valentine.css";

export default function Layout() {
  return (
    <div className="valentines-container p-2 m-auto">
      <Outlet />
    </div>
  );
}
