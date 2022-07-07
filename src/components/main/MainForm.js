import React from 'react';
import styled from 'styled-components';

import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';

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
    <FormWrapper>
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
    </FormWrapper>
  );
};

export default MainForm;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #307692;
  margin: 0px;
  padding: 1rem;
`;
