import React from 'react';
import styled from 'styled-components';
import InfoWrapper from './InfoWrapper';

const Education = () => {
  return (
    <InfoWrapper>
      <h3 style={{ color: '#fffaff', fontSize: '1.5rem' }}>Education:</h3>
      <Input type='text' name='university' placeholder='University name' />
      <Input type='text' name='city' placeholder='City' />
      <Input type='text' name='degree' placeholder='Degree' />
      <Input type='text' name='subject' placeholder='Subject' />
      <Input type='text' name='from' placeholder='From' />
      <Input type='text' name='to' placeholder='To' />
    </InfoWrapper>
  );
};

export default Education;

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
