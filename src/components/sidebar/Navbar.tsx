import PrimaryBtn from "../common/PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleTheme } from "../../store/themeSlice";
import {
  faCloudMoon,
  faCloudSun,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/SNLogo.svg";
import menuIcon from "../../assets/icons/menu-navigation-grid-1529-svgrepo-com.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const themeState = useSelector(
    (store: { themeState: { theme: "day" | "night" } }) =>
      store.themeState.theme
  );

  return (
    <div
      className="sticky top-0 bg-primaryWhite p-6 mb-16 flex justify-between z-10"
      style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
    >
      <div className="flex items-center justify-center gap-6">
        <button
          type="button"
          className="md:hidden flex flex-col items-center justify-center"
          onClick={() => dispatch(toggleSidebar(0))}
        >
          <img
            src={menuIcon}
            width={60}
            about="menu icon"
            className="w-[4.2rem]"
          />
        </button>
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo of text SN"
            width={60}
            className="w-[4.4rem]"
          />
        </Link>
      </div>
      <div className="w-max flex items-center gap-8">
        <button type="button" onClick={() => dispatch(toggleTheme(themeState))}>
          <FontAwesomeIcon
            key={themeState}
            icon={themeState === "day" ? faCloudSun : faCloudMoon}
            className="text-primaryPink"
            style={{
              animationIterationCount: 1,
            }}
            size="2xl"
            beatFade
          />
        </button>

        <a href="mailto:shubhamnanaware0294@gmail.com" target="_blank">
          <PrimaryBtn title="Hire Me" icon={faUserTie} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
