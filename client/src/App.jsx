import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MyFooter from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>

      <MyFooter />
    </div>
  );
}

export default App;
