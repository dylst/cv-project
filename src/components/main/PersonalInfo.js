import React from "react";

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

  return (
    <label>
      Personal Information:
      <br />
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        onChange={firstNameChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        onChange={lastNameChange}
      />
      <br />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={titleChangeHandler}
      />
      <br />
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={addressChangeHandler}
      />
      <br />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        onChange={phoneNumberChangeHandler}
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={emailChangeHandler}
      />
      <br />
      <input type="text" name="description" placeholder="Description" />
      <br />
    </label>
  );
};

export default PersonalInfo;
