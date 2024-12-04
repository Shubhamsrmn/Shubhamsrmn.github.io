import {
  faMediumM,
  faSquareFacebook,
  faSquareGithub,
  faSquareWhatsapp,
  faSquareXTwitter,
  faTelegram,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export type socialMediaType = {
  text?: string;
  name: "Whatsapp" | "Medium" | "Facebook" | "Twitter" | "Github" | "Telegram";
  link: string;
  icon: IconDefinition;
  iconColor: "#25D366" | "#1877F2" | "#000000" | "#0088CC";
};
export const socialMedia: socialMediaType[] = [
  {
    text: "Let's talk",
    name: "Whatsapp",
    link: "https://wa.me/9762664487",
    icon: faSquareWhatsapp,
    iconColor: "#25D366",
  },
  {
    name: "Medium",
    link: "https://medium.com/@shubhamsrmn",
    icon: faMediumM,
    iconColor: "#000000",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/shubhamsrmn",
    icon: faSquareFacebook,
    iconColor: "#1877F2",
  },
  {
    name: "Twitter",
    link: "https://x.com/shubhamsrmn",
    icon: faSquareXTwitter,
    iconColor: "#000000",
  },
  {
    name: "Github",
    link: "https://github.com/Shubhamsrmn",
    icon: faSquareGithub,
    iconColor: "#000000",
  },
  {
    name: "Telegram",
    link: "https://t.me/shubhamsrmn",
    icon: faTelegram,
    iconColor: "#0088CC",
  },
];
