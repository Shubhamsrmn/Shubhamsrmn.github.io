import waterSort from "../images/project/colorSortProject.webp";
import contactTask from "../images/project/ContactBasedTasksProject.jpeg";
import monytics from "../images/project/457745572_953345786602752_5305327415557462440_n.jpg";
export type projectItemType = {
  title: string;
  image: string;
  description: string;
  githubLink: string;
  previewLink: string;
  playStoreLink?: string;
  appStoreLink?: string;
};
export const projects: projectItemType[] = [
  {
    title: "Water Sort Game",
    image: waterSort,
    description:
      "A logic-based puzzle game created with React and TypeScript, where players sort randomly filled containers into single-color groups using valid moves. It highlights my expertise in interactive UI design, responsive layouts, and efficient state management.",
    githubLink: "https://github.com/Shubhamsrmn/WaterSort",
    previewLink: "https://water-sort.vercel.app/",
  },

  {
    title: "Contact Based Tasks Management",
    image: contactTask,
    description:
      "Developed a local-first, contact-based task management app using React Native and Expo. Leveraged Expo Contacts API and Watermelon DB for offline data storage and synchronization. Implemented features for task creation, editing, and deletion, ensuring seamless offline access. Optimized data handling and state management for a smooth user experience.",
    githubLink: "https://github.com/Shubhamsrmn/ContactBasedTaskManagement",
    previewLink: "https://github.com/Shubhamsrmn/ContactBasedTaskManagement",
  },
];
export const profProject: projectItemType[] = [
  {
    title: "Monytics",
    image: monytics,
    description:
      "A fintech platform designed to provide seamless investment solutions. I developed the entire website frontend from scratch using Next.js and Tailwind CSS, implementing SWR for efficient data fetching and deploying it on AWS EC2 for reliable performance. Additionally, I created a cross-platform mobile app using React Native and Expo, integrating React Query for real-time data fetching. The app was successfully deployed on both the Google Play Store and Apple App Store, with all development, testing, and deployment handled independently. This project highlights my expertise in frontend and mobile app development, responsive design, and deploying production-grade applications for the fintech industry.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.investor.master.lendpartnerzapp",
    appStoreLink: "https://apps.apple.com/in/app/monytics/id6736978974",
    previewLink: "https://monytics.com/",
    githubLink: "",
  },
];
