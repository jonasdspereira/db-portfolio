import React from "react";
import styled, { ThemeProvider } from "styled-components";
import img from "./img.jpg";

const theme = {
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
  },
};

const ProjetosContainer = styled.div`
  display: grid;
  justify-content: space-between;
  margin: 40px 100px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjetosNome = styled.div`
  margin: 40px 0 25px 0;
`;

const ProjetosAntetitulo = styled.h3`
  margin: 0 0 10px 0;
  font-size: 30px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 25px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

const ProjetosTitulo = styled.h1`
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

const ProjetosCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 50px;
`;

const ProjetosCard = styled.div`
  width: 300px;
  height: 488px;
  border-radius: 5px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ProjetosCardImg = styled.img`
  width: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const ProjetosCardTitulo = styled.h1`
  margin: 10px;
`;
const ProjetosCardSubTitulo = styled.h3`
  margin: 10px;
`;
const ProjetosCardDescricao = styled.p`
  margin: 35px 10px 0 10px;
`;
const ProjetosCardBotao = styled.button`
  width: 275px;
  height: 44px;
  margin: 10px;
  margin-top: auto;
  font-family: "TT Supermolot", Arial, sans-serif;
  font-weight: bold;
  font-size: 15px;
  color: var(--white-color);
  background-color: var(--link-color);
  border-radius: 5px;
  border: 1px solid var(--link-color);
  cursor: pointer;
`;

const Projetos = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProjetosContainer>
        <ProjetosNome>
          <ProjetosAntetitulo>Meus</ProjetosAntetitulo>
          <ProjetosTitulo>Projetos</ProjetosTitulo>
        </ProjetosNome>
        <ProjetosCardContainer>
          <ProjetosCard>
            <ProjetosCardImg src={img}></ProjetosCardImg>
            <ProjetosCardTitulo>Calculadora</ProjetosCardTitulo>
            <ProjetosCardSubTitulo>HTML, CSS, JS</ProjetosCardSubTitulo>
            <ProjetosCardDescricao>
              Sua descrição sobre o projeto não pode ultrapassar 7 linhas.
            </ProjetosCardDescricao>
            <ProjetosCardBotao>Acessar</ProjetosCardBotao>
          </ProjetosCard>
        </ProjetosCardContainer>
      </ProjetosContainer>
    </ThemeProvider>
  );
};

export default Projetos;
