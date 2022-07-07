import React from 'react';
import styled from 'styled-components';

const Sidebar = (props) => {
  return (
    <Container>
      <h3
        style={{
          color: '#305364',
          borderBottom: '1px solid #c1c1c1',
          marginBottom: 0,
        }}
      >
        Personal Details
      </h3>
      <h4>Address</h4>
      {props.address}
      <h4>Phone number</h4>
      {props.phoneNumber}
      <h4>Email</h4>
      {props.email}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background: #e7e7e7;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
