import {
  faAddressBook,
  faAddressCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import NavElement from "./NavElement";
import { useSearchParams } from "react-router-dom";

const NavList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get("section");
  const navigateFun = (link: string) => {
    setSearchParams(`section=${link}`);
  };
  return (
    <div className="px-6 py-12 divide-y-[1px] divide-gray-300">
      <NavElement
        title="About Me"
        icon={faUser}
        isActive={section === "about-us" || !section}
        onClickHandler={() => navigateFun("about-us")}
      />
      <NavElement
        title="Experience"
        icon={faAddressCard}
        isActive={section === "experience"}
        onClickHandler={() => navigateFun("experience")}
      />
      <NavElement
        title="Contact"
        icon={faAddressBook}
        isActive={section === "contact"}
        onClickHandler={() => navigateFun("contact")}
      />
    </div>
  );
};

export default NavList;
