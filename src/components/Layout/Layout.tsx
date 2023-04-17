import React, { useState } from "react";
import "./Layout.css";
import CreateCv from "../CreateCv/CreateCv";
import PersonalData from "../PersonalData/PersonalData";
import PreviewCv from "../PreviewCv/PreviewCv";
import EducationalData from "../EducationalData/EducationalData";
import PersonalExperience from "../PersonalExperience/PersonalExperience";
import { PersonalDataType } from "../PreviewCv/PreviewCv";
const Layout = () => {
  const [formPersonalData, setFormPersonalData] = useState<PersonalDataType>({
    firstName: "",
    lastName: "",
    address: "",
    website: "",
    email: "",
    number: "",
    desc: "",
  });
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormPersonalData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="grid grid-cols-[auto,0.9fr] space-x-3 p-5 gap-12">
      <div className="space-y-8">
        <CreateCv />
        <PersonalData
          onInputchange={onInputChange}
          firstName={formPersonalData.firstName}
          address={formPersonalData.address}
          website={formPersonalData.website}
          email={formPersonalData.email}
          number={formPersonalData.number}
          desc={formPersonalData.desc}
        />
        <EducationalData />
        <PersonalExperience />
      </div>
      <PreviewCv
        firstName={formPersonalData.firstName}
        address={formPersonalData.address}
        website={formPersonalData.website}
        email={formPersonalData.email}
        number={formPersonalData.number}
        desc={formPersonalData.desc}
      />
    </div>
  );
};

export default Layout;
