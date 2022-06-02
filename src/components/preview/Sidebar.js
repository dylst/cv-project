import React from "react";

const Sidebar = (props) => {
  return (
    <div>
      <h3>Personal Details</h3>
      <h3>Address</h3>
      {props.address}
      <h3>Phone number</h3>
      {props.phoneNumber}
      <h3>Email</h3>
      {props.email}
    </div>
  );
};

export default Sidebar;
