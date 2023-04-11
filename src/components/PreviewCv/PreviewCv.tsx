const PreviewCv = () => {
  return (
    <div className="relative bg-white h-3/4 w-[85%] rounded-lg">
      <div className="grid grid-rows-[auto,0.85fr]">
        <div className="grid grid-rows-[0.8fr,auto]">
          <span className="p-5 font-Osland text-xl">Name ben zebi</span>
          <div className="bg-zinc-200 h-10 p-2 font-extralight">
            {" "}
            Senior Software developer
          </div>
        </div>
        <div className="grid grid-cols-[0.33fr,auto] min-h-screen">
          <div className="bg-[#262626] text-white">
            <div className="p-4 text-xl text-left flex flex-col space-y-2">
              <span className="text-white p-3 font-Inter">Contact</span>
              <div className="flex flex-col px-4 space-y-2">
                <img
                  src={require("../../assets/earth.png")}
                  className="h-3 w-3 ml-2"
                  alt="trash"
                />
                <img
                  src={require("../../assets/env.png")}
                  className="h-3 w-3 ml-2"
                  alt="trash"
                />{" "}
                <img
                  src={require("../../assets/address.png")}
                  className="h-3 w-3 ml-2"
                  alt="trash"
                />{" "}
                <img
                  src={require("../../assets/telep.png")}
                  className="h-3 w-3 ml-2"
                  alt="trash"
                />
              </div>
              <span className="text-white p-3 font-Inter">Education</span>

            </div>
          </div>
          <div className="flex flex-col">
          <div className="font-Inter self-start text-left p-4 text[20px] underline">PROFILE</div>
          <p>Motivated and results-driven Senior Software Engineer with 8+ years of experience in my field. I have continuously demonstrated experience in improving software performance by implementing new ideas, updating, testing and coding. Experience in development tools which increase accuracy and performance of software, especially in React and with React Redux, are my specialization. In my free time, I go on a walk with the two of my dogs or spend time with friends. I also play chess and appreciate any competitive environment when pursuing sports.</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCv;
