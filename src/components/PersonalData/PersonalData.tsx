const PersonalData = () => {
  return (
    <div className="flex flex-col conatiner bg-[#262626] text-white rounded-lg w-[90%] p-4">
      <h2 className="text-3xl font-Osland p-3 text-left">Personal Data</h2>

        <div className="flex space-x-2 p-2 justify-between">
          <input
            type="text"
            id="first_name"
            className="bg-zinc-900  text-white text-sm rounded-lg h-8  p-2.5 w-full "
            placeholder="First Name"
            required
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
          id="last_name"
          className="bg-zinc-900 text-white  text-sm rounded-lg h-8 mx-2 p-2.5 mb-3"
          placeholder="Your Address"
          required
        />
        <input
          type="text"
          id="last_name"
          className="bg-zinc-900 text-white  text-sm rounded-lg h-8 mx-2 p-2.5"
          placeholder="Your Website"
          required
        />
        <div className="flex space-x-2 p-2 justify-between">
          <input
            type="text"
            id="first_name"
            className="bg-zinc-900  text-white text-sm rounded-lg h-8 p-2.5 w-full "
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            id="last_name"
            className="bg-zinc-900 text-white  text-sm rounded-lg h-8  p-2.5 w-full "
            placeholder="Your Number"
            required
          />
        </div>

        <input
          type="text"
          id="last_name"
          className="bg-zinc-900 text-white text-sm rounded-lg mx-2 p-2.5 mb-5 h-40"
          placeholder="Tell us something about you"
          required
        />
      </div>
  );
};

export default PersonalData;
