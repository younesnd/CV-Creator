const PreviewSkills = () => {
    return (
        <div>
                <h3 className="text-white font-Work text-[13px] font-normal tracking-[3.5px] mb-[20px]">
                  SKILLS
                </h3>
                <div className="flex flex-col space-y-2">
                <div className="flex space-x-2">
                  <img
                    src={require("../../assets/flech.png")}
                    className="h-3 w-3 mt-2.5 "
                    alt="trash"
                  /> <span className="font-Work text-[11px] font-normal leading-[15px] text-[#a6a6a6]">JavaScript, TypeScript, SASS/SCSS</span>
                </div>
                <div className="flex space-x-2">
                  <img
                    src={require("../../assets/flech.png")}
                    className="h-3 w-3 mt-2.5"
                    alt="trash"
                  /> <span className="font-Work text-[11px] font-normal leading-[15px] text-[#a6a6a6]">CSS, HTML, Python</span>
                </div>
                <div className="flex space-x-2">
                  <img
                    src={require("../../assets/flech.png")}
                    className="h-3 w-3 mt-2.5"
                    alt="trash"
                  /> <span className="font-Work text-[11px] font-normal leading-[15px] text-[#a6a6a6]">React, Context, Redux, Next.js</span>
                </div>
                <div className="flex space-x-2">
                  <img
                    src={require("../../assets/flech.png")}
                    className="h-3 w-3 mt-2.5"
                    alt="trash"
                  /> <span className="font-Work text-[11px] font-normal leading-[15px] text-[#a6a6a6]">Bootstrap, Git, VSCode</span>
                </div></div>
              </div>
    )

}
export default PreviewSkills