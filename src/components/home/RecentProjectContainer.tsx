import {
  projectItemType,
  projects,
} from "../../assets/staticData/projectsData";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

const RecentProjectContainer = () => {
  return (
    <Container title="Recent Projects" withBg={false}>
      <div className="w-[70%] max-lg:w-full">
        <div className="flex gap-8 max-xs:flex-col">
          {projects.map((item: projectItemType) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecentProjectContainer;
