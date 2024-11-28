import AboutMeContainer from "../components/home/AboutMeContainer";
import IntroWithImage from "../components/home/IntroWithImage";
import SkillsContainer from "../components/home/SkillsContainer";
export const Home = () => {
  return (
    <div className="">
      <IntroWithImage />
      <AboutMeContainer />
      <SkillsContainer />
    </div>
  );
};

export default Home;
