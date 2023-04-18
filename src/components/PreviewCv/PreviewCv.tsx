import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import PreviewHeader from "../PreviewHeader/PreviewHeader";
import PreviewContact from "../PreviewContact/PreviewContact";
import PreviewEducation from "../PreviewEducation/PreviewEducation";
import PreviewSkills from "../PreviewSkills/PreviewSkills";

export type PersonalDataType = {
  firstName: string;
  lastName?: string;
  address: string;
  website: string;
  email: string;
  number: string;
  desc: string;
};
const PreviewCv = (Info: PersonalDataType) => {
  const printRef = useRef<HTMLDivElement>(null);
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element as HTMLElement, { scale: 4 });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4", true);
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };
  return (
    <div
      ref={printRef}
      className=" bg-white h-[800px] left-[614px] w-[615px] rounded-lg flex flex-col"
    >
      <div className="grid grid-rows-[auto,0.75fr]">
        <PreviewHeader />
        <div className="grid grid-cols-[0.30fr,0.7fr] ">
          <div className="bg-[#262626] text-white h-full ">
            <div className="py-[35px] px-[28px]  text-left flex flex-col gap-y-[30px]">
              <PreviewContact />
              <PreviewEducation />
              <PreviewSkills/>
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
