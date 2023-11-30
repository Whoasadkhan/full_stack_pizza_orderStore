import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "../menu/SectionHeader";

const HomeMenu = () => {
  return (
    <section className="text-center">
      <SectionHeader subHeading={"Check out"} mainHeading={"Menu"} />
      <div className="grid grid-cols-3 mt-4 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenu;
