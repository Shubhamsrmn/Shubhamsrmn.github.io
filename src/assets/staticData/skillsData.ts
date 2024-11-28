import htmlIcon from "../images/skills/icons8-html.svg";
import cssIcon from "../images/skills/icons8-css.svg";
import jsIcon from "../images/skills/icons8-javascript.svg";
import nextIcon from "../images/skills/icons8-nextjs.svg";
import tsIcon from "../images/skills/icons8-typescript.svg";
import reactIcon from "../images/skills/icons8-react-native.svg";
import reduxIcon from "../images/skills/icons8-redux.svg";
import tailwindIcon from "../images/skills/icons8-tailwind-css.svg";
import gitIcon from "../images/skills/icons8-git.svg";
import expoIcon from "../images/skills/icons8-expo.svg";
import awsIcon from "../images/skills/icons8-aws.svg";
import androidStudioIcon from "../images/skills/icons8-android-studio.svg";
import googlePlayIcon from "../images/skills/icons8-google-play.svg";
import appStoreIcon from "../images/skills/icons8-app-store.svg";
import nodeIcon from "../images/skills/icons8-nodejs.svg";
import figmaIcon from "../images/skills/icons8-figma.svg";
import sassIcon from "../images/skills/icons8-sass.svg";
import expressIcon from "../images/skills/icons8-express-js.svg";

export type skillItemType = {
  title: string;
  color: string;
  image: string;
  percent: number;
};
export const skills: skillItemType[] = [
  {
    title: "React",
    color: "rgb(97, 218, 251)", // React logo blue
    image: reactIcon,
    percent: 90,
  },

  {
    title: "Next.js",
    color: "rgb(33, 33, 33)", // Charcoal grey
    image: nextIcon,
    percent: 85,
  },
  {
    title: "JavaScript",
    color: "rgb(247, 223, 138)", // Pale yellow
    image: jsIcon,
    percent: 90,
  },
  {
    title: "TypeScript",
    color: "rgb(49, 120, 198)", // Muted blue
    image: tsIcon,
    percent: 80,
  },
  {
    title: "React Native",
    color: "rgb(0, 122, 255)", // iOS blue
    image: reactIcon,
    percent: 80,
  },

  {
    title: "Node.js",
    color: "rgb(139, 195, 74)", // Light green
    image: nodeIcon,
    percent: 60,
  },
  {
    title: "Express.js",
    color: "rgb(99, 99, 99)", // Dark grey
    image: expressIcon,
    percent: 50,
  },
  {
    title: "HTML",
    color: "rgb(247, 141, 167)", // Soft pink
    image: htmlIcon,
    percent: 90,
  },
  {
    title: "CSS",
    color: "rgb(126, 201, 242)", // Light blue
    image: cssIcon,
    percent: 85,
  },

  {
    title: "Redux",
    color: "rgb(118, 74, 188)", // Soft purple
    image: reduxIcon,
    percent: 80,
  },
  {
    title: "Tailwind CSS",
    color: "rgb(56, 178, 172)", // Teal
    image: tailwindIcon,
    percent: 90,
  },

  {
    title: "Sass",
    color: "rgb(204, 102, 153)", // Light magenta
    image: sassIcon,
    percent: 50,
  },
];
export const tools: skillItemType[] = [
  {
    title: "Git/GitHub",
    color: "rgb(240, 80, 50)", // Muted coral
    image: gitIcon,
    percent: 70,
  },
  {
    title: "AWS",
    color: "rgb(255, 153, 51)", // AWS Orange
    image: awsIcon,
    percent: 50,
  },
  {
    title: "Expo",
    color: "rgb(33, 33, 33)", // Same as Next.js color
    image: expoIcon,
    percent: 90,
  },
  {
    title: "Figma",
    color: "rgb(162, 89, 255)", // Lavender purple
    image: figmaIcon,
    percent: 40,
  },
  {
    title: "Google Play Store",
    color: "rgb(66, 133, 244)", // Google Play Blue
    image: googlePlayIcon,
    percent: 90,
  },
  {
    title: "App Store",
    color: "rgb(0, 122, 255)", // Apple Blue
    image: appStoreIcon,
    percent: 80,
  },
  {
    title: "Android Studio",
    color: "rgb(0, 122, 51)", // Android Green
    image: androidStudioIcon,
    percent: 70,
  },
];

// {
//   title: "Docker",
//   color: "rgb(36, 150, 237)", // Muted blue
//   image: dockerIcon, // Replace with the actual variable for the Docker icon
// },
// {
//   title: "MongoDB",
//   color: "rgb(71, 162, 72)", // Muted green
//   image: mongodbIcon, // Replace with the actual variable for the MongoDB icon
// },
// {
//   title: "SQL",
//   color: "rgb(255, 107, 0)", // SQL Orange
//   image: sqlIcon, // Replace with the actual variable for the SQL icon
// },
