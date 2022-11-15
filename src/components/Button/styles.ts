import styled from "styled-components";
import { IButton } from "../../interfaces/IButton";

export const Botao = styled.button<IButton>`
  box-sizing: border-box;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 8px 0;

  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};

  background: ${(props) => props.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.borderRadius};

  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: var(--white-100);
  cursor: pointer;

  text-align: center;

  :hover {
    background: ${(props) => props.hoverBg};
    transition-duration: 0.1s;
    transition-timing-function: linear;
  }

  @media screen and (max-width: 1280px) {
    width: calc(${(props) => props.width} - 30px);
    height: ${(props) => props.height};
    font-size: 14px;
  }
`;

export const Text = styled.p<IButton>`
  padding-left: ${({ paddingLeft }) => paddingLeft};
`;
