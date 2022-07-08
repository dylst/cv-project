import React from 'react';
import styled from 'styled-components';

import InfoWrapper from './InfoWrapper';

const PersonalInfo = (props) => {
  const firstNameChange = (e) => {
    props.onFirstNameChange(e.target.value);
  };
  const lastNameChange = (e) => {
    props.onLastNameChange(e.target.value);
  };
  const titleChangeHandler = (e) => {
    props.onTitleChange(e.target.value);
  };
  const addressChangeHandler = (e) => {
    props.onAddressChange(e.target.value);
  };
  const phoneNumberChangeHandler = (e) => {
    props.onPhoneNumberChange(e.target.value);
  };
  const emailChangeHandler = (e) => {
    props.onEmailChange(e.target.value);
  };
  const descriptionChangedHandler = (e) => {
    props.onDescriptionChange(e.target.value);
  };

  return (
    <InfoWrapper>
      <h3 style={{ color: '#fffaff', fontSize: '1.5rem' }}>
        Personal Information:
      </h3>
      <Input
        type='text'
        name='firstName'
        placeholder='First name'
        onChange={firstNameChange}
      />
      <Input
        type='text'
        name='lastName'
        placeholder='Last name'
        onChange={lastNameChange}
      />
      <Input
        type='text'
        name='title'
        placeholder='Title'
        onChange={titleChangeHandler}
      />
      <Input
        type='text'
        name='address'
        placeholder='Address'
        onChange={addressChangeHandler}
      />
      <Input
        type='text'
        name='phoneNumber'
        placeholder='Phone number'
        onChange={phoneNumberChangeHandler}
      />
      <Input
        type='text'
        name='email'
        placeholder='Email'
        onChange={emailChangeHandler}
      />
      <Input
        type='text'
        name='description'
        placeholder='Description'
        onChange={descriptionChangedHandler}
      />
    </InfoWrapper>
  );
};

export default PersonalInfo;

const Input = styled.input`
  display: block;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 0 10px rgba(16, 16, 16, 1);
  }
`;
