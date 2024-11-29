import { skillItemType, tools } from "../../assets/staticData/skillsData";
import { rgbToRgba } from "../../utils/functions/rgbToRgba";
import Container from "./Container";

const ToolsContainer = () => {
  return (
    <Container title="Tools" withBg={false}>
      <div className="flex items-center justify-between flex-wrap gap-x-4 gap-y-12 max-lg:grid-cols-3 max-md:grid-cols-2">
        {tools.map((skill: skillItemType) => (
          <ToolsElement
            key={skill.title}
            title={skill.title}
            image={skill.image}
            color={skill.color}
            percent={skill.percent}
          />
        ))}
      </div>
    </Container>
  );
};

export default ToolsContainer;
const ToolsElement: React.FC<skillItemType> = ({ title, image, color }) => {
  return (
    <div
      className="w-[14rem] h-[14rem] rounded-full hover:shadow-2xl transition-[shadow,transform] duration-300 ease-in hover:scale-110 px-2"
      style={{
        backgroundColor: rgbToRgba(color, 0.1),
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-1">
        <img src={image} alt={title} width={48} className="w-[4.8rem]" />

        <span className="font-semibold line-clamp-1">{title}</span>
      </div>
    </div>
  );
};
