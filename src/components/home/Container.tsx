import { ReactNode } from "react";
import MainHeading from "../common/MainHeading";
import WhiteContainer from "../common/WhiteContainer";
type props = {
  title: string;
  children: ReactNode;
};
const Container: React.FC<props> = ({ title, children }) => {
  return (
    <div className="flex-1 my-8">
      <MainHeading title={title} />
      <WhiteContainer>
        <div className="p-4">{children}</div>
      </WhiteContainer>
    </div>
  );
};

export default Container;
