import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faSquareWhatsapp,
  faSquareXTwitter,
  faTelegram,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export type socialMediaType = {
  text?: string;
  name:
    | "Whatsapp"
    | "Instagram"
    | "Facebook"
    | "Twitter"
    | "Github"
    | "Telegram";
  link: string;
  icon: IconDefinition;
  iconColor: "#25D366" | "#1877F2" | "#DD2A7B" | "#000000" | "#0088CC";
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
    name: "Instagram",
    link: "https://www.instagram.com/shubhamsrmn/profilecard/?igsh=YnQ5NGx1M3BxNWFr",
    icon: faSquareInstagram,
    iconColor: "#DD2A7B",
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
