import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import Icones from "../Icones";

const Nav = styled.nav`
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;
`;

const Lista = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 200px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: var(--primary-color);
    display: ${(props) => (props.open ? "flex" : "none")};
    padding-top: 60px;
    padding-left: 20px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  }
`;

const Item = styled.li`
  font-size: 16px;
  margin: 0 25px;

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
    text-align: left;
    padding: 10px 0;
  }
`;

const StyledLink = styled(Link)`
  color: var(--link-color);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const DownloadLink = styled.a`
  color: var(--link-color);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: var(--link-color);
    margin: 4px 0;
  }
`;

const CloseButton = styled.div`
  display: none;
  cursor: pointer;
  font-size: 25px;
  color: var(--link-color);
  align-self: flex-end;
  margin-right: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const IconesContainer = styled.div`
  display: flex;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconesResponsivo = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const curriculumLink = "/jonas-pereira-dev.pdf";

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Nav ref={navRef}>
      <Logo />
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      <Lista open={menuOpen}>
        <CloseButton onClick={() => setMenuOpen(false)}>X</CloseButton>
        <Item>
          <StyledLink to="/">Sobre</StyledLink>
        </Item>
        <Item>
          <DownloadLink href={curriculumLink} download>
            Currículo
          </DownloadLink>
        </Item>
        <Item>
          <StyledLink to="/projetos">Projetos</StyledLink>
        </Item>
        <IconesResponsivo>
          <Icones />
        </IconesResponsivo>
      </Lista>
      <IconesContainer>
        <Icones />
      </IconesContainer>
    </Nav>
  );
};

export default Navbar;
