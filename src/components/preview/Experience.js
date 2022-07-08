import React, { Fragment } from 'react';
import styled from 'styled-components';

const Experience = (props) => {
  const { position, company, city, from, to } = props.experience;
  return (
    <Fragment>
      <Title>Experience</Title>
      <Container>
        <div>
          <h4>
            {from}-{to}
          </h4>
        </div>
        <div>
          <h4>{position}</h4>
          <p>
            {company}, {city}
          </p>
        </div>
      </Container>
    </Fragment>
  );
};

export default Experience;

const Title = styled.h3`
  color: #305364;
  border-bottom: 1px solid #c1c1c1;
  margin-bottom: 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
