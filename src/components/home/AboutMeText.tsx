import MainHeading from "../common/MainHeading";
import WhiteContainer from "../common/WhiteContainer";

const AboutMeText = () => {
  return (
    <div className="basis-[40%] md:sticky md:top-0">
      <MainHeading title="About Me" />
      <WhiteContainer>
        <div className="p-4">
          <h4 className="font-semibold text-[2.6rem] leading-[3.2rem] mb-8 text-pretty">
            The Solo Dev Powerhouse: From Concept to Deployment 🚀
          </h4>
          <p className="text-[1.5rem] leading-[2.6rem] mb-4">
            Building and deploying web and mobile apps solo—from the Google Play
            Store to AWS EC2—no challenge is too big. Confidence, skill, and
            adaptability drive every project. Let’s create something amazing!
          </p>
        </div>
      </WhiteContainer>
    </div>
  );
};

export default AboutMeText;
