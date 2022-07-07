import React from 'react';
import styled from 'styled-components';
import InfoWrapper from './InfoWrapper';

const Experience = () => {
  return (
    <InfoWrapper>
      <h3 style={{ color: '#fffaff', fontSize: '1.5rem' }}>Experience:</h3>
      <Input type='text' name='position' placeholder='Position' />
      <Input type='text' name='company' placeholder='Company' />
      <Input type='text' name='city' placeholder='City' />
      <Input type='text' name='from' placeholder='From' />
      <Input type='text' name='to' placeholder='To' />
    </InfoWrapper>
  );
};

export default Experience;

const Input = styled.input`
  display: block;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 0 10px rgba(16, 16, 16, 1);
  }
`;
