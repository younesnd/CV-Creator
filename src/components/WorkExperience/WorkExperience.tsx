type WorkExpType = {
  expNumber: number;
};
const WorkExperience = (props: WorkExpType) => {
  let { expNumber } = props;
  
  return (
    <>
      <div className="flex flex-col space-y-2 px-4">
        <div className="flex justify-between align-middle items-center mb-2">
          <div className="flex align-middle items-center ">
            <img
              src={require("../../assets/exp.png")}
              className="h-8 w-8"
              alt="imgschool"
            />
            <h2 className="text-[24px] font-Osland p-3 text-left">
              Work Experience #{expNumber}
            </h2>
          </div>
          
        </div>
      </div>
      <div className="flex flex-col px-5 space-y-2 mb-2">
        <input
          type="text"
          id="first_name"
          className="bg-zinc-900  text-white text-sm rounded-lg h-8 w-full p-2.5 "
          placeholder="Company"
          required
        />

        <input
          type="text"
          id="last_name"
          className="bg-zinc-900 text-white  text-sm rounded-lg h-8   p-2"
          placeholder="Your Position"
          required
        />
        <input
          type="text"
          id="first_name"
          className="bg-zinc-900  text-white text-sm rounded-lg h-20 p-2.5 placeholder:text-start  "
          placeholder="Your Main Occupation"
          required
        />
        <input
          type="text"
          id="last_name"
          className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
          placeholder="Start Date"
          required
        />
        <input
          type="text"
          id="last_name"
          className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
          placeholder="End Date"
          required
        />
      </div>
    </>
  );
};

export default WorkExperience;
