import ImageNameContainer from "./ImageNameContainer";
import NavList from "./NavList";

const Sidebar = () => {
  return (
    <div
      className="bg-primaryWhite w-[250px] h-screen z-10 sticky top-0"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      <ImageNameContainer />
      <NavList />
    </div>
  );
};

export default Sidebar;
