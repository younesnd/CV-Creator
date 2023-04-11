import clsx from "clsx"
import styles from './PersonalExperience.module.css'
import React, {  useState } from "react";
import WorkExperience from "../WorkExperience/WorkExperience";
const PersonalExperience = () => {
  const [expNum, setExpNum] = useState(1);
  const handleAdd = (e:React.MouseEvent<HTMLButtonElement>) => {
    if (expNum < 3) {
        setExpNum(expNum+1)
    }
  }
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (expNum > 1) {
        setExpNum(expNum-1)
    }
  }

  return (
    <div className="flex flex-col conatiner bg-[#262626] text-white rounded-lg w-[90%]">
        <h1 className="self-start text-3xl font-Osland p-4">
          Practical Experience
        </h1>
      {Array.from(Array(expNum)).map((c, index) => {
        return (<div className="flex flex-col "><WorkExperience expNumber={index+1} />
       < button className={clsx({
        [styles.button] : expNum >1 ,
        "hidden" : expNum === 1
       })} 
       onClick={handleRemove}>
            <img
              src={require("../../assets/trash.png")}
              className="h-5 w-5"
              alt="trash"
            />
          </button></div>);
      })}
      <div className="self-start px-8 mb-2">
        <button
          className=" bg-zinc-700 rounded-lg text-sm h-8 w-24 font-Osland text-zinc-400 "
          onClick={handleAdd}
        >
          {" "}
          +New{" "}
        </button>
      </div>
    </div>
  );
};

export default PersonalExperience;
