import Valentine from "./pages/Valentine";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./pages/Success";
import Layout from "./Layout";
import Rejected from "./pages/Rejected";
import SuperRejected from "./pages/SuperRejected";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Valentine />} />
            <Route path="success" element={<Success />} />
            <Route path="rejected" element={<Rejected />} />
            <Route path="superrejected" element={<SuperRejected />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
