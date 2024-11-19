import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  title: string;
};
const MainHeading: React.FC<props> = ({ title }) => {
  return (
    <strong className="flex items-center gap-2">
      <FontAwesomeIcon icon={faStar} className="text-primaryPink" size="sm" />
      <span className="text-[2rem] font-bold">{title}</span>
    </strong>
  );
};

export default MainHeading;
