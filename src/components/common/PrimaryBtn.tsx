import { ReactNode } from "react";

type props = {
  title?: string;
  onPressHandler?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children?: ReactNode;
};
const PrimaryBtn: React.FC<props> = ({
  title,
  onPressHandler,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onPressHandler}
      className={`w-full py-4 px-8 rounded-lg flex items-center justify-center gap-4 bg-primaryPink text-primaryWhite
    }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children ? children : <p className="text-[1.6rem] font-bold">{title}</p>}
    </button>
  );
};

export default PrimaryBtn;
