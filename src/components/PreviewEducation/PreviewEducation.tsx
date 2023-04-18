import { PreviewEducationalProps } from "@/types/types"
const PreviewEducation = (props:Omit<PreviewEducationalProps,"onInputchange">) => {
    return (
        <div>
                <h3 className="text-white font-Work text-[13px] font-normal tracking-[3.5px] mb-[20px]">
                  EDUCATION
                </h3>
                <div className="mb-[22px]">
                  <h4 className="font-Work text-[12px] font-medium leading-[18px] mb-[2px] ">
                    {props.degree}
                  </h4>
                  <h5 className="font-Work text-[11px] font-normal leading-[16.5px] text-[#a6a6a6]">
                    {props.university}
                  </h5>
                  <p className="font-Work text-[10px] font-normal leading-[15px] text-[#a6a6a6] ">
                    {props.timeframe}
                  </p>
                </div>
                <div className="">
                  <h4 className="font-Work text-[12px] font-medium leading-[18px] mb-[2px] ">
                    {props.schoolDegree}
                  </h4>
                  <h5 className="font-Work text-[11px] font-normal leading-[16.5px] text-[#a6a6a6]">
                    {props.school}
                  </h5>
                  <p className="font-Work text-[10px] font-normal leading-[15px] text-[#a6a6a6] ">
                    {props.schoolTimeframe}
                  </p>
                </div>
              </div>
    )

}

export default PreviewEducation