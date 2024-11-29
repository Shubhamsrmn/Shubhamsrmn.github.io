import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import PrimaryBtn from "../common/PrimaryBtn";

const DownloadResumeBtn = () => {
  return (
    <div className="p-6">
      <a
        href="/Shubham Nanaware Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <PrimaryBtn
          title="Download Resume"
          icon={faCloudArrowDown}
          animation="beat"
        />
      </a>
    </div>
  );
};

export default DownloadResumeBtn;
