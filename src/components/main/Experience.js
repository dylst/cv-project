import React from 'react';
import styled from 'styled-components';
import InfoWrapper from './InfoWrapper';

const Experience = (props) => {
  const positionChangedHandler = (e) => {
    props.onExperienceChange('position', e.target.value);
  };
  const companyChangedHandler = (e) => {
    props.onExperienceChange('company', e.target.value);
  };
  const cityChangedHandler = (e) => {
    props.onExperienceChange('city', e.target.value);
  };
  const fromYearChangedHandler = (e) => {
    props.onExperienceChange('from', e.target.value);
  };
  const toYearChangedHandler = (e) => {
    props.onExperienceChange('to', e.target.value);
  };

  return (
    <InfoWrapper>
      <h3 style={{ color: '#fffaff', fontSize: '1.5rem' }}>Experience:</h3>
      <Input
        type='text'
        name='position'
        placeholder='Position'
        onChange={positionChangedHandler}
      />
      <Input
        type='text'
        name='company'
        placeholder='Company'
        onChange={companyChangedHandler}
      />
      <Input
        type='text'
        name='city'
        placeholder='City'
        onChange={cityChangedHandler}
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
