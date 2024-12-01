import waterSort from "../images/project/colorSortProject.webp";
import contactTask from "../images/project/ContactBasedTasksProject.jpeg";
export type projectItemType = {
  title: string;
  image: string;
  description: string;
  githubLink: string;
  previewLink: string;
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
