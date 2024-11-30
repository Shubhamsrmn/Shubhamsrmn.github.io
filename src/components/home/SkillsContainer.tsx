import { skills, skillItemType } from "../../assets/staticData/skillsData";
import { rgbToRgba } from "../../utils/functions/rgbToRgba";
import Container from "./Container";

const SkillsContainer = () => {
  return (
    <Container title="Skills" withBg={false}>
      <div className="flex items-center justify-start flex-wrap gap-x-8 gap-y-12 max-lg:grid-cols-3 max-md:grid-cols-2">
        {skills.map((skill: skillItemType) => (
          <SkillsElement key={skill.title} {...skill} />
        ))}
      </div>
    </Container>
  );
};
export default SkillsContainer;
const SkillsElement: React.FC<skillItemType> = ({
  title,
  image,
  color,
  percent,
}) => {
  const adjustedPercent = Math.max(0, Math.min(percent, 100));

  return (
    <div
      className="flex-1 px-12 h-[14rem] rounded-xl hover:shadow-2xl transition-[shadow,transform] duration-300 ease-in relative hover:scale-110"
      style={{
        backgroundColor: rgbToRgba(color, 0.1),
      }}
    >
      <div
        className="w-1 absolute bottom-0 left-0 rounded-full"
        style={{
          backgroundColor: color,
          height: adjustedPercent >= 25 ? "100%" : `${adjustedPercent * 4}%`,
        }}
      ></div>
      <div
        className="h-1 absolute top-0 left-0 rounded-3xl"
        style={{
          backgroundColor: color,
          width:
            adjustedPercent >= 50 ? "100%" : `${(adjustedPercent - 25) * 4}%`,
        }}
      ></div>
      <div
        className="w-1 absolute top-0 right-0 rounded-3xl"
        style={{
          backgroundColor: color,
          height:
            adjustedPercent >= 75 ? "100%" : `${(adjustedPercent - 50) * 4}%`,
        }}
      ></div>
      <div
        className="h-1 absolute bottom-0 right-0 rounded-3xl"
        style={{
          backgroundColor: color,
          width:
            adjustedPercent >= 100 ? "100%" : `${(adjustedPercent - 75) * 4}%`,
        }}
      ></div>

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
