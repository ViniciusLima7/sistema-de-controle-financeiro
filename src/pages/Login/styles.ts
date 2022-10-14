import styled from "styled-components";
import fundo from "../../assets/fundofigma.jpg";

export const ContainerBG = styled.div`
  //Image
  width: 100vw;
  height: 100vh;
  background-image: url(${fundo});
  background-size: cover;
  //Image
`;

export const Title = styled.h1`
  margin: 0;
  padding-top: 140px;
  text-align: center;

  font-family: "Jua";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;

  color: var(--white);
  -webkit-text-stroke: 1.5px var(--black); ;
`;

export const SubTitle = styled.p`
  margin-top: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 34px;
  text-align: center;

  color: var(--white);
`;

export const Registration = styled.p`
  position: absolute;
  left: calc(100vw - 20%);
  top: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 31px;
  text-align: center;
  cursor: pointer;

  color: var(--white);

  :hover {
    color: var(--black);
    transition-duration: 0.1s;
    transition-timing-function: linear;
  }
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  margin-top: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;

  color: var(--white);

  :hover {
    color: var(--black);
    transition-duration: 0.1s;
    transition-timing-function: linear;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;

  /* Linha */
  ::before,
  ::after {
    background-color: var(--white);
    content: "";
    height: 1px;
    width: 150px;
  }
`;

export const TextLine = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  padding: 0 16px;
  color: var(--white);
`;

export const Rodape = styled.h3`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;

  text-align: center;
  margin-top: calc(100vh - 33%);
  cursor: pointer;

  color: var(--white);
  :hover {
    color: var(--black);
    transition-duration: 0.2s;
    transition-timing-function: linear;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;
