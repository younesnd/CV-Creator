type PersonalDataProps = {
  onInputchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  firstName: string;
  address: string;
  website: string;
  email: string;
  number: string;
  desc: string;
};
const PersonalData = (props: PersonalDataProps) => {
  const { onInputchange, firstName, address, website, email, number, desc } =
    props;
  return (
    <div className="flex flex-col conatiner bg-[#262626] text-white rounded-lg w-[90%] p-4">
      <h2 className="text-3xl font-Osland p-3 text-left">Personal Data</h2>

      <div className="flex space-x-2 p-2 justify-between">
        <input
          type="text"
          name="firstName"
          className="bg-zinc-900  text-white text-sm rounded-lg h-8  p-2.5 w-full "
          placeholder="First Name"
          required
          value={firstName}
          onChange={onInputchange}
        />

        <input
          type="text"
          id="last_name"
          className="bg-zinc-900 text-white  text-sm rounded-lg h-8  p-2.5 w-full "
          placeholder="last Name"
          required
        />
      </div>
      <input
        type="text"
        name="address"
        className="bg-zinc-900 text-white  text-sm rounded-lg h-8 mx-2 p-2.5 mb-3"
        placeholder="Your Address"
        required
        value={address}
        onChange={onInputchange}
      />
      <input
        type="text"
        name="website"
        className="bg-zinc-900 text-white  text-sm rounded-lg h-8 mx-2 p-2.5"
        placeholder="Your Website"
        required
        value={website}
        onChange={onInputchange}
      />
      <div className="flex space-x-2 p-2 justify-between">
        <input
          type="text"
          name="email"
          className="bg-zinc-900  text-white text-sm rounded-lg h-8 p-2.5 w-full "
          placeholder="Your Email"
          required
          value={email}
          onChange={onInputchange}
        />

        <input
          type="text"
          name="number"
          className="bg-zinc-900 text-white  text-sm rounded-lg h-8  p-2.5 w-full "
          placeholder="Your Number"
          required
          value={number}
          onChange={onInputchange}
        />
      </div>

      <input
        type="text"
        name="desc"
        className="bg-zinc-900 text-white text-sm rounded-lg mx-2 p-2.5 mb-5 h-40 break-words "
        placeholder="Tell us something about you"
        required
        value={desc}
        onChange={onInputchange}
      />
    </div>
  );
};

export default PersonalData;
