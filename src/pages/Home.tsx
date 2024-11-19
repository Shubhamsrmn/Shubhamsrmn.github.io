import IntroTextContainer from "../components/home/IntroTextContainer";
import heroImage from "../assets/images/Designer(1).png";
export const Home = () => {
  return (
    <div className="flex justify-center items-center gap-16">
      <IntroTextContainer />
      <img src={heroImage} width={340} className="animate-morph" />
    </div>
  );
};

export default Home;
