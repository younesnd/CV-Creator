import "./Layout.css";
import CreateCv from "../CreateCv/CreateCv";
import PersonalData from "../PersonalData/PersonalData";
import PreviewCv from "../PreviewCv/PreviewCv";
import EducationalData from "../EducationalData/EducationalData";
import PersonalExperience from "../PersonalExperience/PersonalExperience";
const Layout = () => {
  return (
    <div className="grid grid-cols-[auto,0.9fr] space-x-3 p-5 gap-12">
      <div className="space-y-8">
        <CreateCv />
        <PersonalData />
        <EducationalData />
        <PersonalExperience/>
      </div>
      <PreviewCv />
    </div>
  );
};

export default Layout;
