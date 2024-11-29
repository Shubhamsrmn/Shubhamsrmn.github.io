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
        sidebar ? "w-[25rem] translate-x-0" : "w-0 -translate-x-full"
      } ${
        sidebar === 1 ? "fixed" : "sticky"
      } h-[100dvh] top-0 left-0 z-20 flex flex-col justify-between overflow-hidden transition-[width,transform] duration-300 ease-out overflow-y-auto`}
      style={{
        boxShadow: sidebar ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" : "none",
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
