import React from "react";

import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";

const MainForm = (props) => {
  const firstNameChange = (name) => {
    props.updateFirstName(name);
  };
  const lastNameChange = (name) => {
    props.updateLastName(name);
  };
  const titleChange = (el) => {
    props.updateTitle(el);
  };
  const addressChange = (el) => {
    props.updateAddress(el);
  };
  const phoneNumberChange = (el) => {
    props.updatePhoneNumber(el);
  };
  const emailChange = (el) => {
    props.updateEmail(el);
  };

  return (
    <form>
      <PersonalInfo
        onFirstNameChange={firstNameChange}
        onLastNameChange={lastNameChange}
        onTitleChange={titleChange}
        onAddressChange={addressChange}
        onPhoneNumberChange={phoneNumberChange}
        onEmailChange={emailChange}
      />
      <Experience />
      <Education />
    </form>
  );
};

export default MainForm;
