import AboutMeText from "./AboutMeText";
import SkillsContainer from "./SkillsContainer";
const AboutMe = () => {
  return (
    <div className="mb-4">
      <div className="flex justify-center gap-12 max-md:flex-col">
        <AboutMeText />
        <SkillsContainer />
      </div>
    </div>
  );
};

export default AboutMe;
