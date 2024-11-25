import { ReactNode } from "react";

type props = {
  children: ReactNode;
};
const WhiteContainer: React.FC<props> = ({ children }) => {
  return (
    <div
      className="bg-primaryWhite rounded-xl shadow-sm p-2"
      //   style={{
      //     boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      //   }}
    >
      {children}
    </div>
  );
};

export default WhiteContainer;
