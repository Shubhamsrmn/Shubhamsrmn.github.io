import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/sidebar/Navbar";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="font-urbanist tracking-wide text-primaryTextBlack flex justify-between">
      <Sidebar isOpen={sidebar} setIsOpen={setSidebar} />
      <div className="flex-1 bg-primaryLightPink flex flex-col justify-between">
        <Navbar setIsOpen={setSidebar} />
        <div className="px-16 py-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
