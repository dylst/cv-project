import React from 'react';
import styled from 'styled-components';

import Header from './Header.js';
import Main from './Main.js';
import Sidebar from './Sidebar.js';

const PreviewForm = (props) => {
  return (
    <div>
      <Header
        firstName={props.firstName}
        lastName={props.lastName}
        title={props.title}
      />
      <Content>
        <Main
          description={props.description}
          experience={props.experience}
          education={props.education}
        />
        <Sidebar
          address={props.address}
          phoneNumber={props.phoneNumber}
          email={props.email}
        />
      </Content>
    </div>
  );
};

export default PreviewForm;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
