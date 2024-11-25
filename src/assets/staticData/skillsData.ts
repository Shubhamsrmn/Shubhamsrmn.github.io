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
};
export const skillArr: skillItemType[] = [
  {
    title: "HTML",
    color: "rgb(247, 141, 167)", // Soft pink
    image: htmlIcon, // Replace with the actual variable for the HTML icon
  },
  {
    title: "CSS",
    color: "rgb(126, 201, 242)", // Light blue
    image: cssIcon, // Replace with the actual variable for the CSS icon
  },
  {
    title: "JavaScript",
    color: "rgb(247, 223, 138)", // Pale yellow
    image: jsIcon, // Replace with the actual variable for the JavaScript icon
  },
  {
    title: "React",
    color: "rgb(97, 218, 251)", // React logo blue
    image: reactIcon, // Replace with the actual variable for the React icon
  },
  {
    title: "TypeScript",
    color: "rgb(49, 120, 198)", // Muted blue
    image: tsIcon, // Replace with the actual variable for the TypeScript icon
  },

  {
    title: "Next.js",
    color: "rgb(33, 33, 33)", // Charcoal grey
    image: nextIcon, // Replace with the actual variable for the Next.js icon
  },
  {
    title: "Redux",
    color: "rgb(118, 74, 188)", // Soft purple
    image: reduxIcon, // Replace with the actual variable for the Redux icon
  },
  {
    title: "Tailwind CSS",
    color: "rgb(56, 178, 172)", // Teal
    image: tailwindIcon, // Replace with the actual variable for the Tailwind CSS icon
  },
  {
    title: "Git/GitHub",
    color: "rgb(240, 80, 50)", // Muted coral
    image: gitIcon, // Replace with the actual variable for the Git/GitHub icon
  },
  {
    title: "React Native",
    color: "rgb(0, 122, 255)", // iOS blue
    image: reactIcon, // Replace with the actual variable for the React Native icon
  },
  {
    title: "Expo",
    color: "rgb(33, 33, 33)",
    image: expoIcon, // Replace with the actual variable for the Expo icon
  },
  {
    title: "Android Studio",
    color: "rgb(0, 122, 51)", // Android Green
    image: androidStudioIcon, // Replace with the actual variable for the Android Studio icon
  },
  {
    title: "AWS",
    color: "rgb(255, 153, 51)", // AWS Orange
    image: awsIcon, // Replace with the actual variable for the AWS icon
  },
  {
    title: "Google Play Store",
    color: "rgb(66, 133, 244)", // Google Play Blue
    image: googlePlayIcon, // Replace with the actual variable for the Google Play Store icon
  },
  {
    title: "App Store",
    color: "rgb(0, 122, 255)", // Apple Blue (similar to React Native blue)
    image: appStoreIcon, // Replace with the actual variable for the App Store icon
  },
  // {
  //   title: "SQL",
  //   color: "rgb(255, 107, 0)", // SQL Orange
  //   image: sqlIcon, // Replace with the actual variable for the SQL icon
  // },
  {
    title: "Node.js",
    color: "rgb(139, 195, 74)", // Light green
    image: nodeIcon, // Replace with the actual variable for the Node.js icon
  },
  {
    title: "Figma",
    color: "rgb(162, 89, 255)", // Lavender purple
    image: figmaIcon, // Replace with the actual variable for the Figma icon
  },
  {
    title: "Sass",
    color: "rgb(204, 102, 153)", // Light magenta
    image: sassIcon, // Replace with the actual variable for the Sass icon
  },
  {
    title: "Express.js",
    color: "rgb(99, 99, 99)", // Dark grey
    image: expressIcon, // Replace with the actual variable for the Express.js icon
  },
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
];
