import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeader from "../components/menu/SectionHeader";
const Home = () => {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeading={"Our story"} mainHeading={"About us"} />
        <div className="max-w-md mx-auto mt-4 text-gray-500 flex gap-4 flex-col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            voluptas fugit ut nostrum error asperiores atque sed deleniti iusto.
            Esse, blanditiis repellat? Magnam veniam dolorum odio ad ipsum enim
            et.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            voluptas fugit ut nostrum error asperiores atque sed deleniti iusto.
            Esse, blanditiis repellat? Magnam veniam dolorum odio ad ipsum enim
            et.
          </p>
        </div>
      </section>

      <section className="text-center my-8" id="contact">
        <SectionHeader
          subHeading={"Don't hesitate"}
          mainHeading={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +91 9928355298
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
