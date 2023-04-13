import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
const PreviewCv = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element as HTMLElement, { scale: 5 });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4", true);
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };
  return (
    <div ref={printRef} className="relative bg-white h-3/4 w-[85%] rounded-lg">
      <div className="grid grid-rows-[auto,0.80fr]">
        <div className="grid grid-rows-[0.8fr,auto]">
          <span className="p-5 font-Osland text-xl ">Nidhal ben Younes</span>
          <div className="bg-zinc-200 h-10 p-2 font-extralight">
            {" "}
            Senior Software developer
          </div>
        </div>
        <div className="grid grid-cols-[0.30fr,0.7fr] min-h-screen">
          <div className="bg-[#262626] text-white">
            <div className="py-[35px] px-[28px]  text-left flex flex-col gap-y-[30px]">
              <div>
                <h3 className="text-white font-Work text-[13px] font-normal tracking-[4px] mb-[20px]">
                  Contact
                </h3>
                <div className="flex flex-col gap-[12px]">
                  <div className="inline-flex items-start space-x-1">
                    <img
                      src={require("../../assets/earth.png")}
                      className="h-3 w-3 "
                      alt="trash"
                    />
                    <span className="font-Inter text-[9px] text-white">
                      {" "}
                      nicolas@tesla.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src={require("../../assets/env.png")}
                      className="h-3 w-3 "
                      alt="trash"
                    />{" "}
                    <span className="font-Inter text-[9px] text-white">
                      {" "}
                      nicolas@tesla.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src={require("../../assets/address.png")}
                      className="h-3 w-3 "
                      alt="trash"
                    />
                    <span className="font-Inter text-[9px] text-white">
                      {" "}
                      nicolas@tesla.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src={require("../../assets/telep.png")}
                      className="h-3 w-3 "
                      alt="trash"
                    />
                    <span className="font-Inter text-[9px] text-white">
                      {" "}
                      nicolas@tesla.com
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-white font-Work text-[13px] font-normal tracking-[3.5px] mb-[20px]">
                  EDUCATION
                </h3>
                <div className="mb-[22px]">
                  <h4 className="font-Work text-[12px] font-medium leading-[18px] mb-[2px] ">
                    Master Of Science
                  </h4>
                  <h5 className="font-Work text-[11px] font-normal leading-[16.5px] text-[#a6a6a6]">
                    University of Chicago
                  </h5>
                  <p className="font-Work text-[10px] font-normal leading-[15px] text-[#a6a6a6] ">
                    2010 - 2014
                  </p>
                </div>
                <div className="">
                  <h4 className="font-Work text-[12px] font-medium leading-[18px] mb-[2px] ">
                    Master Of Science
                  </h4>
                  <h5 className="font-Work text-[11px] font-normal leading-[16.5px] text-[#a6a6a6]">
                    University of Chicago
                  </h5>
                  <p className="font-Work text-[10px] font-normal leading-[15px] text-[#a6a6a6] ">
                    2010 - 2014
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-white font-Work text-[13px] font-normal tracking-[3.5px] mb-[20px]">
                  SKILLS
                </h3>
                <div className="flex ">
                  <img
                    src={require("../../assets/flech.png")}
                    className="h-3 w-3 "
                    alt="trash"
                  />
                </div>
              </div>
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
              Motivated and results-driven Senior Software Engineer with 8+
              years of experience in my field. I have continuously demonstrated
              experience in improving software performance by implementing new
              ideas, updating, testing and coding. Experience in development
              tools which increase accuracy and performance of software,
              especially in React and with React Redux, are my specialization.
              In my free time, I go on a walk with the two of my dogs or spend
              time with friends. I also play chess and appreciate any
              competitive environment when pursuing sports.
            </p>
            <div className="mb-2">
              <h3
                className=" block self-start text-left p-4 text-[13px]  tracking-[4px] font-normal h-[2px] after:content-['']
            mb-5 after:bg-gray-500 after:rounded-t-[1px] after:rounded-b-[1px] after:block after:w-[50px] after:h-[2px] after:mt-[10px]"
              >
                WORK EXPERIENCE
              </h3>
              <h4 className="text-left font-Work text-[12px] font-semibold tracking-[1.5px] ml-5">
                Senior Software Enginner
              </h4>
              <h5 className=" text-left text-[11px] font-Work font-normal text-[#2e2e2e] ml-5">
                Dice | 2016 - Present
              </h5>
              <p className="text-[11px] font-Work font-normal text-[#2e2e2e] text-left ml-5 tracking-normal">
                {" "}
                provided technical leadership for complex projects. I used the
                latest technologies such as Cloud Service, Visual Studio 2019
                and Azure DevOps. I gained experience with data technologies
                such as SQL Servers, NoSQL databases, full text search engines
                and caching. My daily work consisted mostly of maintaining full
                project life-cycle tasks including testing, debugging, technical
                analysis, design and coding.
              </p>
            </div>
            <div>
              <h4 className="text-left font-Work text-[12px] font-semibold tracking-[1.5px] ml-5">
                Senior Software Enginner
              </h4>
              <button
                className=" text-left text-[11px] font-Work font-normal text-[#2e2e2e] ml-5"
                onClick={handleDownloadPdf}
              >
                Dice | 2016 - Present
              </button>
              <p className="text-[11px] font-Work font-normal text-[#2e2e2e] text-left ml-5 tracking-normal">
                {" "}
                provided technical leadership for complex projects. I used the
                latest technologies such as Cloud Service, Visual Studio 2019
                and Azure DevOps. I gained experience with data technologies
                such as SQL Servers, NoSQL databases, full text search engines
                and caching. My daily work consisted mostly of maintaining full
                project life-cycle tasks including testing, debugging, technical
                analysis, design and coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCv;
