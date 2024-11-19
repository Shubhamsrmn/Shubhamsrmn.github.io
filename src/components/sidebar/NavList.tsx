import {
  faAddressBook,
  faAddressCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import NavElement from "./NavElement";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

const NavList = () => {
  return (
    <div className="px-6 divide-y-[1px] divide-gray-300">
      <NavElement title="About Me" icon={faUser} link="/" />
      <NavElement title="Experience" icon={faAddressCard} link="/experiences" />
      <NavElement title="Projects" icon={faDiagramProject} link="/projects" />
      <NavElement title="Contact" icon={faAddressBook} link="/contact-me" />
    </div>
  );
};

export default NavList;
