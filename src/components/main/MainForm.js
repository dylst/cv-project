import React, { useState } from "react";

import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";

const MainForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const firstNameChange = (val) => {
    setFirstName(val);
  };
  const lastNameChange = (val) => {
    setLastName(val);
  };

  return (
    <form>
      <PersonalInfo
        onFirstNameChange={firstNameChange}
        onLastNameChange={lastNameChange}
      />
      <Experience />
      <Education />
      <div>
        {firstName} {lastName}
      </div>
    </form>
  );
};

export default MainForm;
