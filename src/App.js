import React, { useState } from "react";

import MainForm from "./components/main/MainForm";
import PreviewFrom from "./components/preview/PreviewForm";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");

  const updateFirstName = (name) => {
    setFirstName(name);
  };
  const updateLastName = (name) => {
    setLastName(name);
  };
  const updateTitle = (el) => {
    setTitle(el);
  };
  return (
    <div>
      <MainForm
        updateFirstName={updateFirstName}
        updateLastName={updateLastName}
        updateTitle={updateTitle}
      />
      <PreviewFrom firstName={firstName} lastName={lastName} title={title} />
    </div>
  );
}

export default App;
