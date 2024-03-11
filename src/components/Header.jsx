import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px 0;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const Li = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <NavLink to="/">BMI Calculator</NavLink>
        </Li>
        <Li>
          <NavLink to="/diet">Diet Plan</NavLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Header;
