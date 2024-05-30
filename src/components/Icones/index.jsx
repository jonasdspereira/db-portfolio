import styled from "styled-components";
import email from "./email.svg";
import github from "./github.svg";
import linkedin from "./linkedin.svg";

const IconeContainer = styled.div`
  display: flex;
  margin-left: auto;
  padding-right: 120px;
`;

const Icone = styled.img`
  margin-right: 30px;
`;

const Icones = () => {
  return (
    <IconeContainer>
      <Icone src={email} alt="logo email"></Icone>
      <Icone src={github} alt="logo github"></Icone>
      <Icone src={linkedin} alt="logo linkedin"></Icone>
    </IconeContainer>
  );
};

export default Icones;
