
const SectionHeader = ({subHeading, mainHeading}) => {
  return (
    <>
    <h3 className="uppercase text-gray-400 font-semibold leading-4">
        {subHeading}
    </h3>
    <h2 className="text-4xl text-primary font-bold italic ">
        {mainHeading}
    </h2>
    </>
  );
};

export default SectionHeader