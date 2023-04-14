import clsx from "clsx";
import { useState } from "react";
const Skills = () => {
  const [expNum, setExpNum] = useState(3);
  const handleRemove = () => {
    if (expNum !== 1) {
      setExpNum(expNum - 1);
    }
  };
  const handleAdd = () => {
    if (expNum < 8) {
      setExpNum(expNum + 1);
    }
  };
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
      <div>
        {Array.from(Array(expNum)).map((c, index) => {
          return (
            <div className="flex px-5 items-center justify-between mb-2 space-x-2.5">
              <input
                type="text"
                id="first_name"
                className="bg-zinc-900  text-white text-sm rounded-lg h-10 w-full p-4 mt-1.5"
                placeholder="Company"
                required
              />
              <button
                className={clsx({"bg-zinc-900  text-white text-xs h-9 w-9 rounded-lg p-2 mt-1.5 hover:bg-zinc-800" : expNum!==1,
                'hidden' : expNum===1})}
                onClick={handleRemove}
              >
                <img
                  src={require("../../assets/trash.png")}
                  className="h-5 w-5"
                  alt="trash"
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="self-start flex px-6 mb-2">
        <button
          className={clsx({" bg-zinc-700 rounded-lg text-sm h-8 w-24 font-Osland text-zinc-400" : expNum <8 ,
          "hidden" : expNum === 8 })}
          onClick={handleAdd}
        >
          +New
        </button>
      </div>
    </>
  );
};

export default Skills;
