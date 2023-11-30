const MenuItem = () => {
  return (
    <div
      className=" bg-gray-200 p-4 rounded-lg text-center
    hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25
    "
    >
      <div className="text-center  ">

      <img className="max-h-24 max-w-auto block mx-auto" src={"/pngwing.com.png"} alt={"pizza"} />
      </div>
      <h4 className="font-semibold text-xl my-3">pepperoni pizza</h4>
      <p className="text-gray-500 text-sm">
        Qui duis incididunt laborum nulla elit.
      </p>
      <button className="bg-primary rounded-full text-white mt-4 py-2 px-8">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
