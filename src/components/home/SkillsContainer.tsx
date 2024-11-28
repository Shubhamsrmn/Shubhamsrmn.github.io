import { skills, skillItemType } from "../../assets/staticData/skillsData";
import { rgbToRgba } from "../../utils/functions/rgbToRgba";
import Container from "./Container";

const SkillsContainer = () => {
  return (
    <Container title="Skills">
      <div className="p-4 grid grid-cols-2 gap-y-16 gap-x-8">
        {skills.map((skill: skillItemType) => (
          <SkillsElement
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

export default SkillsContainer;

const SkillsElement: React.FC<skillItemType> = ({
  title,
  image,
  color,
  percent,
}) => {
  return (
    <div
      className="rounded-2xl border flex items-center justify-evenly gap-6 py-3 px-6 hover:shadow-2xl transition-shadow duration-500 ease-in"
      style={{
        borderColor: color,
        backgroundColor: rgbToRgba(color),
      }}
    >
      <img src={image} width={48} className="w-[4.8rem]" />
      <div>
        <span className="block text-[2.4rem] font-bold">{percent}%</span>
        <span className="font-semibold line-clamp-1">{title}</span>
      </div>
    </div>
  );
};
