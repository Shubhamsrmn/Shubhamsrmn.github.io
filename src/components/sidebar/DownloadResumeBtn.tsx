import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import PrimaryBtn from "../common/PrimaryBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const DownloadResumeBtn = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div className="p-6">
      <a
        href="/Shubham Nanaware Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <PrimaryBtn
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <p className="text-[1.6rem] font-bold line-clamp-1">
            Download Resume{" "}
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              className="ml-2"
              beat={isHovered}
            />
          </p>
        </PrimaryBtn>
      </a>
    </div>
  );
};

export default DownloadResumeBtn;
