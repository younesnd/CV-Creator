import clsx from 'clsx'
const Skills = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 px-4">
        <div className="flex justify-between align-middle items-center mb-1">
          <div className="flex items-center align-bottom ">
            <img
              src={require("../../assets/gears.png")}
              className="h-8 w-8"
              alt="imgschool"
            />
            <h2 className="text-[24px] font-Osland p-2 text-left">
              Skills & Technologies
            </h2>
          </div>
        </div>
      </div>
      <div className="flex px-5 space-y-2 place-items-center items-center  justify-between mb-2">
        <input
          type="text"
          id="first_name"
          className="bg-zinc-900  text-white text-sm rounded-lg h-10 w-[88%] p-4 mt-1.5 "
          placeholder="Company"
          required
        />
        <button
              className=" bg-zinc-900 relative items-center text-white text-xs h-10 w-10 rounded-lg p-2.5 "
            >
              <img
                src={require("../../assets/trash.png")}
                className="h-5 w-5"
                alt="trash"
              />
            </button>
      </div>
    </>
  );
};

export default Skills;
