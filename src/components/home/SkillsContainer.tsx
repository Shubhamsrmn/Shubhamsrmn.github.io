import { skillArr, skillItemType } from "../../assets/staticData/skillsData";
import { rgbToRgba } from "../../utils/functions/rgbToRgba";
import MainHeading from "../common/MainHeading";
import WhiteContainer from "../common/WhiteContainer";

const SkillsContainer = () => {
  return (
    <div className="basis-[50%]">
      <MainHeading title="Skills" />
      <WhiteContainer>
        <div className="p-8 grid grid-cols-2 gap-y-16 gap-x-4 h-[60vh] overflow-y-auto">
          {skillArr.map((skill: skillItemType) => (
            <SkillsElement
              key={skill.title}
              title={skill.title}
              image={skill.image}
              color={skill.color}
            />
          ))}
        </div>
      </WhiteContainer>
    </div>
  );
};

export default SkillsContainer;
type prop = {
  title: string;
  image: string;
  color: string;
};
const SkillsElement: React.FC<prop> = ({ title, image, color }) => {
  return (
    <div
      className="rounded-full border-2 flex items-center justify-evenly gap-6 py-3 px-6"
      style={{ borderColor: color, backgroundColor: rgbToRgba(color) }}
    >
      <img src={image} width={48} />
      <div>
        <span className="block text-[2.4rem] font-bold">94%</span>
        <span className="font-semibold line-clamp-1">{title}</span>
      </div>
    </div>
  );
};
