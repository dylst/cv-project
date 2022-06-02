import React, { useState } from "react";

import MainForm from "./components/main/MainForm";
import PreviewFrom from "./components/preview/PreviewForm";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const updateFirstName = (name) => {
    setFirstName(name);
  };
  const updateLastName = (name) => {
    setLastName(name);
  };
  const updateTitle = (el) => {
    setTitle(el);
  };
  const updateAddress = (el) => {
    setAddress(el);
  };
  const updatePhoneNumber = (num) => {
    setPhoneNumber(num);
  };
  const updateEmail = (el) => {
    setEmail(el);
  };
  return (
    <div>
      <MainForm
        updateFirstName={updateFirstName}
        updateLastName={updateLastName}
        updateTitle={updateTitle}
        updateAddress={updateAddress}
        updatePhoneNumber={updatePhoneNumber}
        updateEmail={updateEmail}
      />
      <PreviewFrom
        firstName={firstName}
        lastName={lastName}
        title={title}
        address={address}
        phoneNumber={phoneNumber}
        email={email}
      />
    </div>
  );
}

export default App;
