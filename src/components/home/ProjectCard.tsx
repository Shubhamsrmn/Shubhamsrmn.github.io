import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectItemType } from "../../assets/staticData/projectsData";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleArrowRight,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn";

const ProjectCard: React.FC<projectItemType> = ({
  title,
  image,
  description,
  githubLink,
  previewLink,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex-1 bg-primaryWhite rounded-2xl relative group"
      style={{
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.03)",
      }}
    >
      <img
        src={image}
        alt={title}
        className="rounded-t-2xl h-[24rem] w-full aspect-video"
      />
      <div className="p-4">
        <h5 className="text-[1.8rem] font-semibold line-clamp-1 mb-4">
          {title}
        </h5>
        <p className="line-clamp-3">{description}</p>
      </div>
      <div className="absolute top-0 left-0 rounded-2xl w-full h-full transition-all duration-500 group-hover:backdrop-blur-xl"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full hidden group-hover:block">
        <PrimaryBtn
          title="Details"
          icon={faCircleArrowRight}
          onPressHandler={() => navigate("/projects")}
          containerStyle="w-max mx-auto"
        />
        <div className="flex justify-between p-4 mt-4">
          <Link to={previewLink} target="_blank">
            <FontAwesomeIcon
              icon={faSquareArrowUpRight}
              size="2xl"
              className="text-primaryPink cursor-pointer hover:animate-bounce"
            />
          </Link>
          <Link to={githubLink} target="_blank">
            <FontAwesomeIcon
              icon={faSquareGithub}
              size="2xl"
              className="text-primaryPink cursor-pointer hover:animate-bounce"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
