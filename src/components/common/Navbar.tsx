import logo from "../../assets/images/SNLogo.svg";
import PrimaryBtn from "./PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import { faCloudMoon, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((store) => store.themeState.theme);

  return (
    <div
      className="bg-primaryWhite p-6 rounded-2xl mb-16 flex justify-between"
      style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
    >
      <img src={logo} alt="logo of text SN" width={120} />
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
