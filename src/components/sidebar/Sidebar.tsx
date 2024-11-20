import { useState } from "react";
import DownloadResumeBtn from "./DownloadResumeBtn";
import ImageNameContainer from "./ImageNameContainer";
import NavList from "./NavList";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div
      className={`bg-primaryWhite ${
        isOpen ? "w-[250px] h-screen" : "w-0 h-0"
      }  z-10 sticky top-0 flex flex-col justify-between`}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      <button className="hidden" onClick={() => setOpen(false)}></button>
      {/* {isOpen === false && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="px-8 py-4"
        >
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            className="text-primaryPink"
          />
        </button>
      )} */}
      {/* {isOpen && (
        <> */}
      <ImageNameContainer />
      <NavList />
      <DownloadResumeBtn />
      {/* </>
      )} */}
    </div>
  );
};

export default Sidebar;
