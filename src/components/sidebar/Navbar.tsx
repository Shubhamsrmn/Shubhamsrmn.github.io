import PrimaryBtn from "../common/PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleTheme } from "../../store/themeSlice";
import {
  faCloudMoon,
  faCloudSun,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/SnLogo.svg";
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
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          className="md:hidden flex flex-col items-center justify-center"
          onClick={() => dispatch(toggleSidebar(0))}
        >
          <FontAwesomeIcon
            icon={faEllipsisH}
            size="2xl"
            className="text-primaryPink"
          />
          <FontAwesomeIcon
            icon={faEllipsisH}
            size="2xl"
            className="-mt-8 text-primaryPink"
          />
          <FontAwesomeIcon
            icon={faEllipsisH}
            size="2xl"
            className="-mt-8 text-primaryPink"
          />
        </button>
        <img
          src={logo}
          alt="logo of text SN"
          width={120}
          className="w-[12rem]"
        />
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

        <PrimaryBtn title="Hire Me" />
      </div>
    </div>
  );
};

export default Navbar;
