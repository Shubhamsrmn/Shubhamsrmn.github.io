import starIcon from "../../assets/icons/stars.png";
type props = {
  title: string;
};
const MainHeading: React.FC<props> = ({ title }) => {
  return (
    <strong className="flex items-center  gap-2">
      <img
        src={starIcon}
        width={22}
        height={22}
        alt="star icon with pink as primary color"
      />
      <span className="text-[2rem] font-bold">{title}</span>
    </strong>
  );
};

export default MainHeading;
