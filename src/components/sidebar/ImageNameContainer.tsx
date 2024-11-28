import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../../../public/Rectangle 8-2.png";
import SocialLinkElement from "./SocialLinkElement";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const ImageNameContainer = () => {
  return (
    <div className="relative">
      <div
        className="w-full h-[12rem] bg-primaryPink absolute top-0 left-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 10%, 0 100%)",
        }}
      ></div>

      <div className="mt-8 mb-4">
        <img
          src={profilePic}
          width={120}
          className="rounded-full mx-auto relative aspect-square"
        />
      </div>
      <div className="text-center">
        <h5 className="text-[2rem] font-semibold">Shubham Nanaware</h5>
        <p className="font-medium opacity-75">Frontend Developer</p>
      </div>
      <div className="flex items-center justify-center gap-4 py-6">
        <SocialLinkElement
          link="https://www.linkedin.com/in/shubham-nanaware-4b0b23211/"
          icon={faLinkedin}
        />
        <SocialLinkElement
          link="https://github.com/Shubhamsrmn"
          icon={faGithub}
        />
        <SocialLinkElement
          link="mailto:shubhamnanaware0294@gmail.com"
          icon={faEnvelope}
        />
      </div>
    </div>
  );
};

export default ImageNameContainer;
