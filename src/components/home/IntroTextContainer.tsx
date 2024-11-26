const IntroTextContainer = () => {
  return (
    <div className="flex-[1.5] max-md:flex-1">
      <h1 className="text-[4.2rem] font-normal">
        Hey, I'm{" "}
        <strong className="font-medium text-primaryPink">Shubham 👋</strong>
      </h1>

      <strong className="relative font-semibold text-primaryPink text-[4.6rem] inline-block w-0 whitespace-nowrap max-xs:text-[3.8rem] overflow-hidden typewriter-text">
        <span className="sr-only">Frontend and Mobile Developer</span>
      </strong>
      <p className="font-normal my-6 text-[1.8rem] leading-[2.8rem]">
        with 2+ years of experience building high-performance web and mobile
        applications using{" "}
        <strong className=" font-semibold">
          React, React Native, Next.js, and TypeScript.
        </strong>
      </p>
    </div>
  );
};

export default IntroTextContainer;
