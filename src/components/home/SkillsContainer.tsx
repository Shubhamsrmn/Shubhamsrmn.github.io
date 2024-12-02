import { skills, skillItemType } from "../../assets/staticData/skillsData";
import { rgbToRgba } from "../../utils/functions/rgbToRgba";
import Container from "./Container";

const SkillsContainer = () => {
  return (
    <Container title="Skills" withBg={false}>
      <div>
        <div
          className="relative h-[14rem] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
          }}
        >
          {skills.map((skill: skillItemType, index: number) => (
            <SkillsElement key={skill.title} index={index + 1} {...skill} />
          ))}
        </div>
      </div>
    </Container>
  );
};
export default SkillsContainer;
const SkillsElement: React.FC<skillItemType & { index: number }> = ({
  title,
  image,
  color,
  percent,
  index,
}) => {
  return (
    <div
      className={`w-[20rem] h-full rounded-xl absolute top-0 skillElements`}
      style={{
        backgroundColor: rgbToRgba(color, 0.1),
        animationDelay: `calc(30s / 12 * (12 - ${index}) * -1)`,
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-1">
        <img src={image} alt={title} width={48} className="w-[4.8rem]" />
        <span className="font-bold line-clamp-1">{percent}%</span>
        <span className="font-semibold line-clamp-1 text-[1.8rem]">
          {title}
        </span>
      </div>
    </div>
  );
};
