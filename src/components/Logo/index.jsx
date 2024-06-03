import logo from "./logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
`;
const LogoImage = styled.img`
  margin-right: 10px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <a href="https://db.tec.br/" target="_blank">
        {" "}
        <LogoImage src={logo} alt="logo db" />
      </a>
    </LogoContainer>
  );
};

export default Logo;
