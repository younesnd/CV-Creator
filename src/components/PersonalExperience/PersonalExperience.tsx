import clsx from "clsx";
import styles from "./PersonalExperience.module.css";
import React, { useState } from "react";
import WorkExperience from "../WorkExperience/WorkExperience";
import Skills from "../SkillsTechnologies/Skills";
import { WorkExperienceProps } from "../WorkExperience/WorkExperience";

const PersonalExperience = (props: WorkExperienceProps) => {
  const [expNum, setExpNum] = useState(1);

  const handleAdd = () => {
    if (expNum < 3) {
      setExpNum(expNum + 1);
    }
  };
  const handleRemove = () => {
    if (expNum > 1) {
      setExpNum(expNum - 1);
    }
  };

  return (
    <div className="flex flex-col conatiner bg-[#262626] text-white rounded-lg w-[90%]">
      <h1 className="self-start text-3xl font-Osland p-4">
        Practical Experience
      </h1>
      {Array.from(Array(expNum)).map((c, index) => {
        return (
          <div className="flex flex-col ">
            <WorkExperience
              onInputchange={props.onInputchange}
              company={props.company}
              position={props.position}
              occupation={props.occupation}
              startDate={props.startDate}
              endDate={props.endDate}
            />
          </div>
        );
      })}

      <Skills />
    </div>
  );
};

export default PersonalExperience;
