import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import DownloadResumeBtn from "./DownloadResumeBtn";
import ImageNameContainer from "./ImageNameContainer";
import NavList from "./NavList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Sidebar: React.FC<props> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`bg-primaryWhite ${
        isOpen ? "min-w-[250px] h-screen" : "hidden"
      }  z-20 sticky top-0 flex flex-col justify-between overflow-y-auto`}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      <button
        className="bg-primaryPink p-2 absolute top-10 right-0 z-10 rounded-s-xl sm:hidden"
        onClick={() => setIsOpen(false)}
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
