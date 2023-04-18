import React, { useState } from "react";
import "./Layout.css";
import CreateCv from "../CreateCv/CreateCv";
import PersonalData from "../PersonalData/PersonalData";
import PreviewCv from "../PreviewCv/PreviewCv";
import EducationalData from "../EducationalData/EducationalData";
import PersonalExperience from "../PersonalExperience/PersonalExperience";
import {
  WorkExperienceProps,
  PersonalDataType,
  PreviewEducationalProps,
} from "@/types/types";

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
  const [formPersonalExperience, setFormPersonalExperience] = useState<
    Omit<WorkExperienceProps, "onInputchange">
  >({
    company: "",
    position: "",
    occupation: "",
    startDate: "",
    endDate: "",
    company_2: "",
    position_2: "",
    occupation_2: "",
    startDate_2: "",
    endDate_2: "",
  });
  const [formEducationalData, setFormEducationalData] =
    useState<Omit<PreviewEducationalProps,'onInputchange'>>({
      university: "",
      degree: "",
      timeframe: "",
      school: "",
      schoolDegree: "",
      schoolTimeframe: "",
    });
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormPersonalData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const onInputChangeWorkExperience = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormPersonalExperience((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const onInputChangeEducation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormEducationalData((state) => ({
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
        <EducationalData
          onInputchange={onInputChangeEducation}
          university={formEducationalData.university}
          degree={formEducationalData.degree}
          timeframe={formEducationalData.timeframe}
          school={formEducationalData.school}
          schoolDegree={formEducationalData.schoolDegree}
          schoolTimeframe={formEducationalData.schoolTimeframe}
        />
        <PersonalExperience
          onInputchange={onInputChangeWorkExperience}
          company={formPersonalExperience.company}
          position={formPersonalExperience.position}
          occupation={formPersonalExperience.occupation}
          startDate={formPersonalExperience.startDate}
          endDate={formPersonalExperience.endDate}
          company_2={formPersonalExperience.company_2}
          position_2={formPersonalExperience.position_2}
          occupation_2={formPersonalExperience.occupation_2}
          startDate_2={formPersonalExperience.startDate_2}
          endDate_2={formPersonalExperience.endDate_2}
        />
      </div>
      <PreviewCv
        firstName={formPersonalData.firstName}
        address={formPersonalData.address}
        website={formPersonalData.website}
        email={formPersonalData.email}
        number={formPersonalData.number}
        desc={formPersonalData.desc}
        position={formPersonalExperience.position}
        occupation={formPersonalExperience.occupation}
        company={formPersonalExperience.company}
        startDate={formPersonalExperience.startDate}
        endDate={formPersonalExperience.endDate}
        position_2={formPersonalExperience.position_2}
        occupation_2={formPersonalExperience.occupation_2}
        company_2={formPersonalExperience.company_2}
        startDate_2={formPersonalExperience.startDate_2}
        endDate_2={formPersonalExperience.endDate_2}
        university={formEducationalData.university}
        degree={formEducationalData.degree}
        timeframe={formEducationalData.timeframe}
        school={formEducationalData.school}
        schoolDegree={formEducationalData.schoolDegree}
        schoolTimeframe={formEducationalData.schoolTimeframe}
      />
    </div>
  );
};

export default Layout;
