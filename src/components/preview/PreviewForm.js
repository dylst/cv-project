import React from "react";

import Header from "./Header.js";

const PreviewForm = (props) => {
  return (
    <div>
      <Header
        firstName={props.firstName}
        lastName={props.lastName}
        title={props.title}
      />
    </div>
  );
};

export default PreviewForm;
