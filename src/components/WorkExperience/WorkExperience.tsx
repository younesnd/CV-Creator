import clsx from "clsx";
import { useState } from "react";
import { WorkExperienceProps } from "@/types/types";
const WorkExperience = (props: WorkExperienceProps) => {
  const { onInputchange, company, position, occupation, startDate, endDate } =
    props;

  const [numWkExp, setNumWkExp] = useState(1);
  const handleAdd = () => {
    setNumWkExp(numWkExp + 1);
  };
  const handleRemove = () => {
    if (numWkExp > 1) {
      setNumWkExp(numWkExp - 1);
    }
  };
  return (
    <>
      <div>
        <div className="flex flex-col space-y-2 px-4">
          <div className="flex  items-center justify-between">
            <div className="flex align-middle items-center">
              <img
                src={require("../../assets/exp.png")}
                className="h-8 w-8"
                alt="imgschool"
              />
              <h2 className="text-[24px] font-Osland p-3 text-left">
                Work Experience #1
              </h2>
            </div>
            <button
              className={clsx({
                "bg-zinc-900  text-white text-xs h-9 w-9 rounded-lg p-2":
                  numWkExp > 1,
                hidden: numWkExp === 1,
              })}
              onClick={handleRemove}
            >
              <img
                src={require("../../assets/trash.png")}
                className="h-5 w-5"
                alt="trash"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col px-5 space-y-2">
          <input
            type="text"
            name="company"
            className="bg-zinc-900  text-white text-sm rounded-lg h-8 w-full p-2.5 "
            placeholder="Company"
            value={company}
            onChange={onInputchange}
          />

          <input
            type="text"
            name="position"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
            placeholder="Your Position"
            value={position}
            onChange={onInputchange}
          />
          <input
            type="text"
            name="occupation"
            className="bg-zinc-900  text-white text-sm rounded-lg h-20 p-2.5 placeholder:text-start  "
            placeholder="Your Main Occupation"
            value={occupation}
            onChange={onInputchange}
          />
          <input
            type="text"
            name="startDate"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
            placeholder="Start Date"
            value={startDate}
            onChange={onInputchange}
          />
          <input
            type="text"
            name="endDate"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
            placeholder="End Date"
            value={endDate}
            onChange={onInputchange}
          />
        </div>
      </div>

      <div className={clsx({ hidden: numWkExp === 1 })}>
        <div className="flex flex-col space-y-2 px-4">
          <div className="flex  items-center justify-between">
            <div className="flex align-middle items-center">
              <img
                src={require("../../assets/exp.png")}
                className="h-8 w-8"
                alt="imgschool"
              />
              <h2 className="text-[24px] font-Osland p-3 text-left">
                Work Experience #2
              </h2>
            </div>
            <button
              className="bg-zinc-900  text-white text-xs h-9 w-9 rounded-lg p-2"
              onClick={handleRemove}
            >
              <img
                src={require("../../assets/trash.png")}
                className="h-5 w-5"
                alt="trash"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col px-5 space-y-2">
          <input
            type="text"
            name="company_2"
            className="bg-zinc-900  text-white text-sm rounded-lg h-8 w-full p-2.5 "
            placeholder="Company"
            value={company}
            onChange={onInputchange}
          />

          <input
            type="text"
            name="position_2"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
            placeholder="Your Position"
            value={position}
            onChange={onInputchange}
          />
          <input
            type="text"
            name="occupation_2"
            className="bg-zinc-900  text-white text-sm rounded-lg h-20 p-2.5 placeholder:text-start  "
            placeholder="Your Main Occupation"
            value={occupation}
            onChange={onInputchange}
          />
          <input
            type="text"
            name="startDate_2"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
            placeholder="Start Date"
            value={startDate}
            onChange={onInputchange}
          />
          <input
            type="text"
            name="endDate_2"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
            placeholder="End Date"
            value={endDate}
            onChange={onInputchange}
          />
        </div>
      </div>
      <div className={clsx({ hidden: numWkExp !== 3 })}>
        <div className="flex flex-col space-y-2 px-4">
          <div className="flex  items-center justify-between">
            <div className="flex align-middle items-center">
              <img
                src={require("../../assets/exp.png")}
                className="h-8 w-8"
                alt="imgschool"
              />
              <h2 className="text-[24px] font-Osland p-3 text-left">
                Work Experience #3
              </h2>
            </div>
            <button
              className="bg-zinc-900  text-white text-xs h-9 w-9 rounded-lg p-2"
              onClick={handleRemove}
            >
              <img
                src={require("../../assets/trash.png")}
                className="h-5 w-5"
                alt="trash"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col px-5 space-y-2">
          <input
            type="text"
            name="company"
            className="bg-zinc-900  text-white text-sm rounded-lg h-8 w-full p-2.5 "
            placeholder="Company"
            value={company}
            onChange={onInputchange}
          />

          <input
            type="text"
            name="position"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
            placeholder="Your Position"
            value={position}
            onChange={onInputchange}
          />
          <input
            type="text"
            name="occupation"
            className="bg-zinc-900  text-white text-sm rounded-lg h-20 p-2.5 placeholder:text-start  "
            placeholder="Your Main Occupation"
            value={occupation}
            onChange={onInputchange}
          />
          <input
            type="text"
            name="startDate"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
            placeholder="Start Date"
            value={startDate}
            onChange={onInputchange}
          />
          <input
            type="text"
            name="endDate"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8 p-2"
            placeholder="End Date"
            value={endDate}
            onChange={onInputchange}
          />
        </div>
      </div>
      <div className="self-start px-6 mb-2">
        <button
          className={clsx({
            " bg-zinc-700 rounded-lg text-sm h-8 w-24 font-Osland text-zinc-400 mt-2":
              numWkExp !== 3,
            hidden: numWkExp === 3,
          })}
          onClick={handleAdd}
        >
          +New
        </button>
      </div>
    </>
  );
};

export default WorkExperience;
