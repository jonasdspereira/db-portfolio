import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import Icones from "../Icones";

const Nav = styled.nav`
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
`;
const Lista = styled.ul`
  display: flex;
`;

const Item = styled.li`
  font-size: 16px;
  display: flex;
  height: 100%;
  cursor: pointer;
  margin: 25px;
`;

const StyledLink = styled(Link)`
  color: var(--link-color);
  text-decoration: none;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <Lista>
        <Item>
          <StyledLink to="/sobre">Sobre</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/">Curriculo</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/projetos">Projetos</StyledLink>
        </Item>
      </Lista>
      <Icones />
    </Nav>
  );
};

export default Navbar;
