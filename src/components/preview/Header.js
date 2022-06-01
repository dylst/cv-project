import React from "react";

const Header = (props) => {
  return (
    <div>
      <h2>
        {props.firstName} {props.lastName}
      </h2>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Header;
