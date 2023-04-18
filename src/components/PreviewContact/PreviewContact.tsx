type PreviewContactProps = {
  website : string
  email : string
  address : string
  number:string
}
const PreviewContact = (props:PreviewContactProps) => {
  const {website,email,address,number} = props
  return (
    <div>
      <h3 className="text-white font-Work text-[13px] font-normal tracking-[4px] mb-[20px]">
        Contact
      </h3>
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center space-x-1.5">
          <img
            src={require("../../assets/earth.png")}
            className="h-3 w-3 self-center mt-3"
            alt="trash"
          />
          <span id="Website" className="font-Inter text-[9px] text-white">
            {website}
          </span>
        </div>
        <div className="flex items-center space-x-1.5">
          <img
            src={require("../../assets/env.png")}
            className="h-3 w-3 mt-3"
            alt="trash"
          />{" "}
          <span id="Email" className="font-Inter text-[9px] text-white">
            {email}
          </span>
        </div>
        <div className="flex items-center space-x-1.5">
          <img
            src={require("../../assets/address.png")}
            className="h-3 w-3 mt-3 "
            alt="trash"
          />
          <span id="Address" className="font-Inter text-[9px] text-white">
            {address}
          </span>
        </div>
        <div className="flex items-center space-x-1.5">
          <img
            src={require("../../assets/telep.png")}
            className="h-3 w-3 mt-3"
            alt="trash"
          />
          <span id="Number" className="font-Inter text-[9px] text-white">
            {number}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreviewContact;
