import React from 'react';
import styled from 'styled-components';

const Description = (props) => {
  return (
    <div>
      <Title>Description</Title>
      <p>{props.description}</p>
    </div>
  );
};

export default Description;

const Title = styled.h3`
  color: #305364;
  border-bottom: 1px solid #c1c1c1;
  margin-bottom: 0;
`;
