import { useRef } from "react";
import clsx from "clsx";
import PreviewHeader from "../PreviewHeader/PreviewHeader";
import PreviewContact from "../PreviewContact/PreviewContact";
import PreviewEducation from "../PreviewEducation/PreviewEducation";
import PreviewSkills from "../PreviewSkills/PreviewSkills";
import { PreviewCvProps } from "@/types/types";

const PreviewCv = (Info: PreviewCvProps) => {
  const printRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={printRef}
      className=" bg-white h-[800px] left-[614px] w-[615px] rounded-lg flex flex-col"
    >
      <div className="grid grid-rows-[auto,0.75fr]">
        <PreviewHeader firstName={Info.firstName} position={Info.position} />
        <div className="grid grid-cols-[0.3fr,0.7fr] ">
          <div className="bg-[#262626] text-white min-h-screen rounded-b-lg ">
            <div className="py-[35px] px-[28px]  text-left flex flex-col gap-y-[30px]">
              <PreviewContact
                website={Info.website}
                email={Info.email}
                address={Info.address}
                number={Info.number}
              />
              <PreviewEducation
                university={Info.university}
                degree={Info.degree}
                timeframe={Info.timeframe}
                school={Info.school}
                schoolDegree={Info.schoolDegree}
                schoolTimeframe={Info.schoolTimeframe}
              />
              <PreviewSkills />
            </div>
          </div>

          <div className="flex flex-col">
            <h3
              className=" block self-start text-left p-4 text-[13px] tracking-[4px] font-normal h-[2px] after:content-['']
            mb-5 after:bg-gray-500 after:rounded-t-[1px] after:rounded-b-[1px] after:block after:w-[50px] after:h-[2px] after:mt-[10px]"
            >
              PROFILE
            </h3>
            <p className="font-Work text-[11px] p-2 tracking-normal leading-[16.5px] text-left ml-2 text-[#2e2e2e]">
              {Info.desc}
            </p>
            <div id="workExperience" className="mb-2">
              <h3
                className=" block self-start text-left p-4 text-[13px]  tracking-[4px] font-normal h-[2px] after:content-['']
            mb-5 after:bg-gray-500 after:rounded-t-[1px] after:rounded-b-[1px] after:block after:w-[50px] after:h-[2px] after:mt-[10px]"
              >
                WORK EXPERIENCE
              </h3>
              <div
                className={clsx("mb-2", {
                  hidden:
                    Info.company.length === 0 &&
                    Info.position.length === 0 &&
                    Info.occupation.length === 0 &&
                    Info.startDate.length === 0 &&
                    Info.endDate.length === 0,
                })}
              >
                <h4 className="text-left font-Work text-[12px] font-semibold tracking-[1.5px] ml-5">
                  {Info.position}
                </h4>
                <h5 className=" text-left text-[11px] font-Work font-normal text-[#2e2e2e] ml-5">
                  <span>{Info.company}</span> | <span>{Info.startDate}</span> -{" "}
                  <span>{Info.endDate}</span>
                </h5>
                <p className="text-[11px] font-Work font-normal text-[#2e2e2e] text-left ml-5 tracking-normal">
                  {Info.occupation}
                </p>
              </div>
            </div>
            <div
              id="experience_2"
              className={clsx("mb-2", {
                hidden:
                  Info.company_2.length === 0 &&
                  Info.position_2.length === 0 &&
                  Info.occupation_2.length === 0 &&
                  Info.startDate_2.length === 0 &&
                  Info.endDate_2.length === 0,
              })}
            >
              <h4 className="text-left font-Work text-[12px] font-semibold tracking-[1.5px] ml-5">
                {Info.position_2}
              </h4>
              <h5 className=" text-left text-[11px] font-Work font-normal text-[#2e2e2e] ml-5">
                <span>{Info.company_2}</span> | <span>{Info.startDate_2}</span>{" "}
                -<span>{Info.endDate_2}</span>
              </h5>
              <p className="text-[11px] font-Work font-normal text-[#2e2e2e] text-left ml-5 tracking-normal">
                {Info.occupation_2}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCv;
