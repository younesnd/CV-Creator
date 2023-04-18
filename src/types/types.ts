export type PersonalDataType = {
    firstName: string
    lastName: string
    address: string
    website: string
    email: string
    number: string
    desc: string
}
export type PreviewCvProps = {
    firstName: string;
    lastName?: string;
    address: string;
    website: string;
    email: string;
    number: string;
    desc: string;
    position: string;
    occupation: string;
    company: string;
    startDate: string;
    endDate: string;
    position_2: string;
    occupation_2: string;
    company_2: string;
    startDate_2: string;
    endDate_2: string;
  };
  export type WorkExperienceProps = {
    onInputchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    company: string;
    position: string;
    occupation: string;
    startDate: string;
    endDate: string;
    position_2: string;
    occupation_2: string;
    company_2: string;
    startDate_2: string;
    endDate_2: string;
  };