import React, { Fragment } from 'react';
import styled from 'styled-components';

const Education = (props) => {
  const { university, city, degree, subject, from, to } = props.education;

  return (
    <Fragment>
      <Title>Education</Title>
      <Container>
        <div>
          <h4>
            {from}-{to}
          </h4>
        </div>
        <div>
          <h4>
            {university}, {city}
          </h4>
          <p>Degree: {degree}</p>
          <p>Subject: {subject}</p>
        </div>
      </Container>
    </Fragment>
  );
};

export default Education;

const Title = styled.h3`
  color: #305364;
  border-bottom: 1px solid #c1c1c1;
  margin-bottom: 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
