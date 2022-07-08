import React, { useState } from 'react';

import Header from './components/Header';
import MainForm from './components/main/MainForm';
import PreviewFrom from './components/preview/PreviewForm';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState({
    position: 'Software Engineer',
    company: 'Google',
    city: 'Irvine',
    from: '2016',
    to: '2020',
  });
  const [education, setEducation] = useState({
    university: 'University of California',
    city: 'Irvine',
    degree: 'B.S.',
    subject: 'Computer Science',
    from: '2020',
    to: '2024',
  });

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
  const updateDescription = (el) => {
    setDescription(el);
  };
  const updateExperience = (key, val) => {
    setExperience((prevState) => {
      return { ...prevState, [key]: val };
    });
  };
  const updateEducation = (key, val) => {
    setEducation((prevState) => {
      return { ...prevState, [key]: val };
    });
  };

  return (
    <div>
      <Header />
      <MainForm
        updateFirstName={updateFirstName}
        updateLastName={updateLastName}
        updateTitle={updateTitle}
        updateAddress={updateAddress}
        updatePhoneNumber={updatePhoneNumber}
        updateEmail={updateEmail}
        updateDescription={updateDescription}
        updateExperience={updateExperience}
        updateEducation={updateEducation}
      />
      <PreviewFrom
        firstName={firstName}
        lastName={lastName}
        title={title}
        address={address}
        phoneNumber={phoneNumber}
        email={email}
        description={description}
        experience={experience}
        education={education}
      />
    </div>
  );
}

export default App;
