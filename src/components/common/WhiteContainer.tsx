import { ReactNode } from "react";

type props = {
  children: ReactNode;
};
const WhiteContainer: React.FC<props> = ({ children }) => {
  return (
    <div
      className="bg-primaryWhite rounded-xl p-2"
      style={{
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.03)",
      }}
    >
      {children}
    </div>
  );
};

export default WhiteContainer;
