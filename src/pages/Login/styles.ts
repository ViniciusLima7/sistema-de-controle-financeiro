import styled from "styled-components";
import fundo from "../../assets/fundofigma.jpg";

interface PropLine {
  color?: string;
}

interface PropTextLine {
  color?: string;
}

interface PropRodape {
  top?: string;
}

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
  -webkit-text-stroke: 1.5px var(--black);

  @media screen and (max-width: 1280px) {
    font-size: 24px;
    padding-top: 100px;
    line-height: 35px;
    -webkit-text-stroke: 1px var(--black);
  }
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

  @media screen and (max-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
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
    color: var(--gray-500);
    transition-duration: 0.1s;
    transition-timing-function: linear;
  }

  @media screen and (max-width: 1280px) {
    font-size: 16px;
    line-height: 20px;
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
    color: var(--gray-500);
    transition-duration: 0.1s;
    transition-timing-function: linear;
  }
  @media screen and (max-width: 1280px) {
    font-size: 12px;
    line-height: 17px;
  }
`;

export const Line = styled.div.attrs((props: PropLine) => ({
  color: props.color,
}))<PropLine>`
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;

  /* Linha */
  ::before,
  ::after {
    background-color: ${(props) => props.color};
    content: "";
    height: 1px;
    width: 150px;
  }

  @media screen and (max-width: 1280px) {
    ::before,
    ::after {
      width: 120px;
    }
  }
`;

export const TextLine = styled.span.attrs((props: PropTextLine) => ({
  color: props.color,
}))<PropTextLine>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  padding: 0 16px;
  color: ${(props) => props.color};

  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
`;

export const Rodape = styled.h3.attrs(({ top = "91%" }: PropRodape) => ({
  top: top,
}))<PropRodape>`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;

  text-align: center;
  cursor: pointer;

  color: var(--white);
  :hover {
    color: var(--gray-500);
    transition-duration: 0.2s;
    transition-timing-function: linear;
  }

  position: absolute;
  top: ${({ top }) => top};
  left: 50%;
  transform: translate(-50%, 0);

  @media screen and (max-width: 1280px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;
