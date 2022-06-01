import React from "react";

const PersonalInfo = (props) => {
  const firstNameChange = (e) => {
    props.onFirstNameChange(e.target.value);
  };
  const lastNameChange = (e) => {
    props.onLastNameChange(e.target.value);
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
      <input type="text" name="title" placeholder="Title" />
      <br />
      <input type="text" name="address" placeholder="Address" />
      <br />
      <input type="text" name="phoneNumber" placeholder="Phone number" />
      <br />
      <input type="text" name="email" placeholder="Email" />
      <br />
      <input type="text" name="description" placeholder="Description" />
      <br />
    </label>
  );
};

export default PersonalInfo;
