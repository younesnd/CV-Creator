import React, { useState } from "react";
import "./Layout.css";
import CreateCv from "../CreateCv/CreateCv";
import PersonalData from "../PersonalData/PersonalData";
import PreviewCv from "../PreviewCv/PreviewCv";
import EducationalData from "../EducationalData/EducationalData";
import PersonalExperience from "../PersonalExperience/PersonalExperience";
import { PersonalDataType } from "../PreviewCv/PreviewCv";
import { WorkExperienceProps } from "../WorkExperience/WorkExperience";
const Layout = () => {
  const [formPersonalData, setFormPersonalData] = useState<Omit<PersonalDataType,'position'|'occupation'>>({
    firstName: "",
    lastName: "",
    address: "",
    website: "",
    email: "",
    number: "",
    desc: "",
  });
  const [formPersonalExperience, setFormPersonalExperience] = useState<
    Omit<WorkExperienceProps, "onInputchange">
  >({
    company: "",
    position: "",
    occupation: "",
    startDate: "",
    endDate: "",
  });
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormPersonalData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const onInputChangeWorkExperience = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormPersonalExperience((state) => ({
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
        <PersonalExperience
          onInputchange={onInputChangeWorkExperience}
          company={formPersonalExperience.company}
          position={formPersonalExperience.position}
          occupation={formPersonalExperience.occupation}
          startDate={formPersonalExperience.startDate}
          endDate={formPersonalExperience.endDate}
        />
      </div>
      <PreviewCv
        firstName={formPersonalData.firstName}
        address={formPersonalData.address}
        website={formPersonalData.website}
        email={formPersonalData.email}
        number={formPersonalData.number}
        desc={formPersonalData.desc}
        position = {formPersonalExperience.position}
        occupation = {formPersonalExperience.occupation}
      />
    </div>
  );
};

export default Layout;
