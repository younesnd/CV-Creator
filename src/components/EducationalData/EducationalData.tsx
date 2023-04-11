const EducationalData = () => {
  return (
    <div className="flex flex-col conatiner bg-[#262626] text-white rounded-lg w-[90%] p-2">
      <h2 className="text-3xl font-Osland p-3 text-left">Educational Data</h2>

      <form className="px-3">
        <div className="flex flex-col space-y-2 ">
          <div className="flex align-middle items-center">
            <img
              src={require("../../assets/icons8-graduation-cap-48.png")}
              className="h-8 w-8"
              alt="imgschool"
            />
            <h2 className="text-xl font-Osland p-3 text-left">University</h2>
          </div>
          <input
            type="text"
            id="first_name"
            className="bg-zinc-900  text-white text-sm rounded-lg h-8 w-full p-2.5 "
            placeholder="Your University"
            required
          />

          <input
            type="text"
            id="last_name"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
            placeholder="Your Degree"
            required
          />
          <input
            type="text"
            id="first_name"
            className="bg-zinc-900  text-white text-sm rounded-lg h-8  p-2.5 "
            placeholder="Timeframe"
            required
          />
        </div>
        <div className="flex flex-col space-y-2 mb-5 ">
          <div className="flex align-middle items-center">
            <img
              src={require("../../assets/icons8-school-48.png")}
              className="h-8 w-8"
              alt="imgschool"
            />
            <h2 className="text-[24px] font-Osland p-3 text-left">School</h2>
          </div>
          <input
            type="text"
            id="first_name"
            className="bg-zinc-900  text-white text-sm rounded-lg h-8 w-full p-2.5 "
            placeholder="Your School"
            required
          />

          <input
            type="text"
            id="last_name"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8   p-2"
            placeholder="Your Degree"
            required
          />
          <input
            type="text"
            id="first_name"
            className="bg-zinc-900  text-white text-sm rounded-lg h-8 p-2.5  "
            placeholder="Timeframe"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default EducationalData;
