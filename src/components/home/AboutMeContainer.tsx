import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";
import PrimaryBtn from "../common/PrimaryBtn";

const AboutMeContainer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container title="About Me">
        <h4 className="font-semibold text-[2.6rem] leading-[3.2rem] mb-8 text-pretty">
          The Solo Dev Powerhouse: From Concept to Deployment 🚀
        </h4>
        <p className="mb-4">
          I'm Shubham Nanaware, a Frontend Developer passionate about creating
          seamless digital experiences. With over two years of experience, I
          specialize in building high-performance web and mobile applications
          using modern technologies like Next.js and React Native. I thrive on
          crafting intuitive UIs, optimizing performance, and delivering secure,
          user-focused solutions. Currently diving into backend development with
          Node.js, I'm committed to expanding my skill set to offer end-to-end
          solutions. Let's collaborate and bring your ideas to life!
        </p>
      </Container>
      <div className="flex justify-center gap-12 max-md:flex-col">
        <Container title="Experience">
          <h4 className="font-semibold text-[2.2rem] leading-[3.2rem] mb-2 text-pretty flex items-center justify-between">
            Frontend Developer
            <span className="text-[1.4rem] text-primaryTextGray font-medium">
              Dec 2022 - Nov 2024
            </span>
          </h4>
          <Link
            to={"https://markytics.com"}
            target="_blank"
            className="border-primaryTextBlack w-max font-semibold text-[1.7rem] text-pretty leading-[0rem] hover:border-b-2 pb-1"
          >
            Markytics
          </Link>

          <p className="mt-6">
            As a Frontend Developer at Markytics, I migrated Django templates to
            Next.js and built a React Native app, deploying it on both Google
            Play and Apple App Store.
          </p>
          <PrimaryBtn
            title="Show Me"
            bg="no"
            onPressHandler={() => navigate("/experiences")}
            containerStyle="w-max mt-8 ml-auto"
          />
        </Container>

        <Container title="Education">
          <h4 className="font-semibold text-[2.2rem] leading-[3.2rem] mb-2 text-pretty flex items-center justify-between">
            Bachelor of Engineering
            <span className="text-[1.4rem] text-primaryTextGray font-medium">
              Aug 2018 - Jul 2022
            </span>
          </h4>
          <Link
            to={"https://mescoe.mespune.org"}
            target="_blank"
            className="border-primaryTextBlack w-max font-semibold text-[1.7rem] text-pretty leading-[0rem] hover:border-b-2 pb-1"
          >
            Modern Education Society’s Wadia College of Engineering, Pune
            University
          </Link>
          <p className="mt-6">
            Graduated with First Class Distinction CGPA: 7.93.
          </p>
          <PrimaryBtn
            title="Show Me"
            bg="no"
            onPressHandler={() => navigate("/education")}
            containerStyle="w-max mt-8 ml-auto"
          />
        </Container>
      </div>
    </>
  );
};

export default AboutMeContainer;
