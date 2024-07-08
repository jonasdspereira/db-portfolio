import React from "react";
import styled, { ThemeProvider } from "styled-components";
import jonas from "./jonas.jpeg";

const theme = {
  colors: {
    primary: "var(--circle-color)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
  },
};

const SobreContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SobreCol = styled.div`
  flex-basis: calc(50% - 20px);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 20px;
    flex-basis: 100%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 10px;
    flex-basis: 100%;
  }
`;

const SobreNome = styled.div`
  margin: 80px 0 0 100px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 40px 0 0 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 20px 0 0 10px;
  }
`;

const SobreAntetitulo = styled.h3`
  margin: 0 0 10px 0;
  font-size: 30px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 25px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

const SobreTitulo = styled.h1`
  font-family: "Roboto Flex", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 60pt;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 50pt;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 40pt;
  }
`;

const SobreSubtitulo = styled.h3`
  margin: 5px 0 0 0;
  font-weight: normal;
  font-size: 35px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 25px;
  }
`;

const SobreDescricao = styled.div`
  margin: 60px 0 0 100px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 40px 0 0 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 20px 0 0 10px;
  }
`;

const SobreTexto = styled.p`
  font-size: 13pt;
  width: 500px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 11pt;
    width: 300px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 11pt;
    width: 100%;
  }
`;

const SobreImagem = styled.div`
  margin: 80px 0 0 100px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 40px 0 0 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 20px 0 0 10px;
  }
`;

const SobreImg = styled.img`
  width: 332px;
  border-radius: 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 200px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 180px;
  }
`;

const SobreHabilidades = styled.div`
  margin: 60px 0 0 100px;
  width: 250px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 40px 0 0 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 20px 0 60px 10px;
  }
`;

const SobreOpcoes = styled.ul`
  padding: 0;
`;

const SobreOpcao = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
`;

const CirculoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Circulo = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${(props) =>
    props.preenchido ? props.theme.colors.primary : "white"};
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const NivelHabilidade = ({ nivel }) => {
  return (
    <CirculoContainer>
      {Array.from({ length: 5 }, (_, i) => (
        <Circulo key={i} preenchido={i < nivel} />
      ))}
    </CirculoContainer>
  );
};

const Sobre = () => {
  return (
    <ThemeProvider theme={theme}>
      <SobreContainer>
        <SobreCol>
          <SobreNome>
            <SobreAntetitulo>Olá, meu nome é</SobreAntetitulo>
            <SobreTitulo>Jonas Pereira</SobreTitulo>
            <SobreSubtitulo>
              Sou trainee em desenvolvimento de software na DBServer.
            </SobreSubtitulo>
          </SobreNome>
          <SobreDescricao>
            <SobreAntetitulo>Sobre mim</SobreAntetitulo>
            <SobreTexto>
              Sempre fui fascinado pela tecnologia e por sua capacidade de
              facilitar a vida das pessoas. Iniciei minha jornada profissional
              como 'o menino de TI', prestando suporte durante 2 anos.
              Posteriormente, tornei-me um freelancer especializado na criação
              de sites usando a plataforma WordPress com abordagem de
              desenvolvimento de baixo código. Em 2024, dei um passo
              significativo ao realizar uma transição de carreira para
              Desenvolvedor de Software. Tenho conhecimentos em frontend
              (HTML, CSS e JS), backend (Java e Spring Boot) e experiência em
              metodologias ágeis.
            </SobreTexto>
          </SobreDescricao>
        </SobreCol>
        <SobreCol>
          <SobreImagem>
            <SobreImg src={jonas} alt="foto jonas" />
          </SobreImagem>
          <SobreHabilidades>
            <SobreAntetitulo>Habilidades</SobreAntetitulo>
            <SobreOpcoes>
              <SobreOpcao>
                HTML <NivelHabilidade nivel={4} />
              </SobreOpcao>
              <SobreOpcao>
                CSS <NivelHabilidade nivel={4} />
              </SobreOpcao>
              <SobreOpcao>
                JS <NivelHabilidade nivel={3} />
              </SobreOpcao>
              <SobreOpcao>
                REACT <NivelHabilidade nivel={3} />
              </SobreOpcao>
              <SobreOpcao>
                JAVA <NivelHabilidade nivel={3} />
              </SobreOpcao>
              <SobreOpcao>
                SPRING BOOT <NivelHabilidade nivel={2} />
              </SobreOpcao>
            </SobreOpcoes>
          </SobreHabilidades>
        </SobreCol>
      </SobreContainer>
    </ThemeProvider>
  );
};

export default Sobre;
