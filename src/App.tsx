import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div className="font-urbanist tracking-wide text-primaryTextBlack flex justify-between min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-primaryLightPink px-16 py-8 flex flex-col justify-between">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
