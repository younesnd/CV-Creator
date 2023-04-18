import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const CreateCv = () => {
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
    <div className="container flex h-32 bg-[#262626] font-semibold w-[90%]  text-white rounded-lg justify-between">
      <div className="self-start p-3 font-Osland text-3xl flex  space-x-14   ">
        <span className="">Create Your CV</span>
        <div className="flex space-x-2">
          <button
            type="button"
            className=" text-white shadow-2xl text-base flex bg-teal-700 w-24 h-10  font-medium rounded-lg px-4 py-2 items-center "
            onClick={handleDownloadPdf}
          >
            {" "}
            <img
              src={require("../../assets/save.png")}
              className="h-6 w-6"
              alt="imgschool"
            />
            <span>Save</span>
          </button>
          <button
            type="button"
            className=" text-white shadow-2xl flex  bg-teal-700 text-base w-24 h-10 font-medium rounded-lg text-ms px-4 py-2 "
          >
            <span>AutoFill</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCv;
