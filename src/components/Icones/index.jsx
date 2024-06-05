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
      <a href="mailto:jonas.pereira@dbserver.com.br" target="_blank">
        <Icone src={email} alt="logo email"></Icone>
      </a>
      <a href="https://github.com/jonasdspereira" target="_blank">
        <Icone src={github} alt="logo github"></Icone>
      </a>
      <a href="https://www.linkedin.com/in/jnsprr/" target="_blank">
        <Icone src={linkedin} alt="logo linkedin"></Icone>
      </a>
    </IconeContainer>
  );
};

export default Icones;
