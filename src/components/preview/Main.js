import React from 'react';
import styled from 'styled-components';

import Description from './Description';
import Experience from './Experience';
import Education from './Education';

const Main = (props) => {
  return (
    <Container>
      <Description description={props.description} />
      <Experience experience={props.experience} />
      <Education education={props.education} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
