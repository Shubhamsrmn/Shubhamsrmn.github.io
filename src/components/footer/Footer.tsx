import {
  socialMedia,
  socialMediaType,
} from "../../assets/staticData/socialMedia";
import MainHeading from "../common/MainHeading";
import LetTalkContainer from "./LetTalkContainer";

const Footer = () => {
  return (
    <div className="">
      <MainHeading title="Follow Me" />
      <div className="my-12">
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
      </div>
    </div>
  );
};

export default Footer;
