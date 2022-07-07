import React from 'react';
import styled from 'styled-components';

const InfoWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default InfoWrapper;

const Wrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2vw;
`;
