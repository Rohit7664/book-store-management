import "./App.css";
import Navbar from "./pages/Navbar";
import MyFooter from "./Components/MyFooter";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet/>
      </div>
      <MyFooter />
    </>
  );
}

export default App;
