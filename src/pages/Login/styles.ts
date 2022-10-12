import styled from "styled-components";
import fundo from "../../assets/fundo.svg";

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
  padding-top: 130px;
  text-align: center;

  font-family: "Jua";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;

  color: #ffffff;
  -webkit-text-stroke: 2.2px #000000;
`;

export const SubTitle = styled.p`
  margin-top: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 34px;
  text-align: center;

  color: #ffffff;
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

  color: #ffffff;

  :hover {
    color: #000000;
  }
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  height: 72px;
  border-radius: 15px;
  background: #ffffff;
  margin-bottom: 10px;
  padding-left: 15px;
  outline: none;

  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #645f5f;
  }

  :focus {
    border: 2px solid #00008b;
  }
`;

export const Text = styled.p`
  margin-top: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;

  color: #000000;

  :hover {
    color: #ffffff;
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
    background-color: black;
    content: "";
    height: 1px;
    width: 150px;
  }
`;

export const TextLine = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  padding: 0 16px;
`;

export const Rodape = styled.h3`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 29px;

  text-align: center;
  padding-top: calc(100vh - 33%);

  color: #000000;
`;
