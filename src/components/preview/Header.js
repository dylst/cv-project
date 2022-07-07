import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <Container>
      <h2 style={{ margin: 0 }}>
        {props.firstName} {props.lastName}
      </h2>
      <Subheading>{props.title}</Subheading>{' '}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: #305364;
  margin-top: 1rem;
  font-size: 2rem;
  padding: 2rem;
  color: #fffaff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

const Subheading = styled.h3`
  font-size: 1.3rem;
  margin: 0;
`;
