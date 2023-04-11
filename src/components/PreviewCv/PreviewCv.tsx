const PreviewCv = () => {
  return (
    <div className="relative bg-white h-3/4 w-[85%] rounded-lg">
      <div className="grid grid-rows-[auto,0.85fr]">
        <div className="grid grid-rows-[0.8fr,auto]">
          <span className="p-5 font-Osland text-xl">Name ben zebi</span>
          <div className="bg-zinc-200 h-10 p-2 font-extralight"> Senior Software developer</div>
        </div>
        <div className="grid grid-cols-[0.3fr,auto] min-h-screen">
          <div className="bg-[#262626] text-white"> 
          <div className="p-4 text-xl text-left flex flex-col space-y-2">
            <span className="text-white p-3">Contact</span>
            <span className="text-xs  px-5">@nikolagejhs</span>
            <span className="text-xs  px-5">@nikolagejhs</span>
            <span className="text-xs  px-5">@nikolagejhs</span>
            <span className="text-xs  px-5">@nikolagejhs</span>


          </div>
          </div>
          <div>hell</div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCv;
