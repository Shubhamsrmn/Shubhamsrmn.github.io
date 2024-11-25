import {
  socialMedia,
  socialMediaType,
} from "../../assets/staticData/socialMedia";
import MainHeading from "../common/MainHeading";
import LetTalkContainer from "./LetTalkContainer";

const Footer = () => {
  return (
    <div className="px-16 py-8">
      <MainHeading title="Follow Me" />
      <div className="grid grid-cols-3 gap-x-16">
        {socialMedia.map((social: socialMediaType) => (
          <LetTalkContainer
            key={social.name}
            text={social.text}
            name={social.name}
            link={social.link}
            icon={social.icon}
            iconColor={social.iconColor}
          />
        ))}
      </div>
      <p className="text-primaryTextBlack font-semibold text-center text-[1.4rem] mt-16">
        © {new Date().getFullYear()} Shubham Nanaware. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
