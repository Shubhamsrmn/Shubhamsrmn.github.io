import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/sidebar/Navbar";
import { useSelector } from "react-redux";
import OverlayComponent from "./components/common/OverlayComponent";

function App() {
  const sidebar = useSelector((state) => state.themeState.sidebar);
  return (
    <div className="font-urbanist tracking-wide text-primaryTextBlack flex justify-between">
      <Sidebar sidebar={sidebar} />
      <div
        className={`flex-1 bg-primaryLightPink flex flex-col justify-between`}
      >
        {sidebar === 1 && <OverlayComponent />}
        <Navbar />
        <div className="px-16 py-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;