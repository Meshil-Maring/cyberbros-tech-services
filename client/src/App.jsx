import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Process from "./pages/process/Process";
import Service from "./pages/Service/Service";

import Work from "./pages/work/Work";

function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
}

export default App;
