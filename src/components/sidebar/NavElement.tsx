import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  title: string;
  isActive: boolean;
  icon: IconDefinition;
  onClickHandler: () => void | Promise<void>;
};
const NavElement: React.FC<props> = ({
  title,
  isActive,
  icon,
  onClickHandler,
}) => {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={`w-full py-4 px-8 rounded-lg flex items-center gap-4 ${
        isActive ? "bg-primaryPink" : ""
      }`}
    >
      <FontAwesomeIcon icon={icon} />
      <p className="text-[1.6rem] font-semibold">{title}</p>
    </button>
  );
};

export default NavElement;
