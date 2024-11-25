import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import DownloadResumeBtn from "./DownloadResumeBtn";
import ImageNameContainer from "./ImageNameContainer";
import NavList from "./NavList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/themeSlice";
import useResponsiveSidebar from "../../utils/hooks/useResponsiveSidebar";
type props = {
  sidebar: 0 | 1 | 2;
};
const Sidebar: React.FC<props> = ({ sidebar }) => {
  const dispatch = useDispatch();

  useResponsiveSidebar(sidebar);
  return (
    <div
      className={`bg-primaryWhite ${
        sidebar
          ? `min-w-[250px] h-screen ${
              sidebar === 1 ? "fixed" : "sticky"
            } top-0 left-0`
          : "hidden"
      }  z-20 flex flex-col justify-between overflow-y-auto`}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      <button
        className="bg-primaryPink p-2 absolute top-10 right-0 z-10 rounded-s-xl md:hidden"
        onClick={() => dispatch(toggleSidebar(sidebar))}
      >
        <FontAwesomeIcon
          icon={faCaretLeft}
          size="xl"
          className="text-primaryWhite"
        />
      </button>

      <ImageNameContainer />
      <NavList />
      <DownloadResumeBtn />
    </div>
  );
};

export default Sidebar;
