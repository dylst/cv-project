import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <Heading>CV Application</Heading>;
};

export default Header;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #303036;
  color: #fd7c64;
  font-size: 3rem;
  padding: 3rem;
`;
