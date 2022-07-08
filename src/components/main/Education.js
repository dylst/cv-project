import React from 'react';
import styled from 'styled-components';
import InfoWrapper from './InfoWrapper';

const Education = (props) => {
  const universityChangedHandler = (e) => {
    props.onEducationChange('university', e.target.value);
  };
  const cityChangedHandler = (e) => {
    props.onEducationChange('city', e.target.value);
  };
  const degreeChangedHandler = (e) => {
    props.onEducationChange('degree', e.target.value);
  };
  const subjectChangedHandler = (e) => {
    props.onEducationChange('subject', e.target.value);
  };
  const fromYearChangedHandler = (e) => {
    props.onEducationChange('from', e.target.value);
  };
  const toYearChangedHandler = (e) => {
    props.onEducationChange('to', e.target.value);
  };

  return (
    <InfoWrapper>
      <h3 style={{ color: '#fffaff', fontSize: '1.5rem' }}>Education:</h3>
      <Input
        type='text'
        name='university'
        placeholder='University name'
        onChange={universityChangedHandler}
      />
      <Input
        type='text'
        name='city'
        placeholder='City'
        onChange={cityChangedHandler}
      />
      <Input
        type='text'
        name='degree'
        placeholder='Degree'
        onChange={degreeChangedHandler}
      />
      <Input
        type='text'
        name='subject'
        placeholder='Subject'
        onChange={subjectChangedHandler}
      />
      <Input
        type='text'
        name='from'
        placeholder='From'
        onChange={fromYearChangedHandler}
      />
      <Input
        type='text'
        name='to'
        placeholder='To'
        onChange={toYearChangedHandler}
      />
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
