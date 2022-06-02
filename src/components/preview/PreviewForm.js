import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Sidebar from "./Sidebar.js";

const PreviewForm = (props) => {
  return (
    <div>
      <Header
        firstName={props.firstName}
        lastName={props.lastName}
        title={props.title}
      />
      <Main />
      <Sidebar
        address={props.address}
        phoneNumber={props.phoneNumber}
        email={props.email}
      />
    </div>
  );
};

export default PreviewForm;
