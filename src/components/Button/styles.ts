import styled from "styled-components";

interface PropButton {
  background: string;
  hoverBg: string;
  width: string;
  height: string;
  justifyContent: string;
  marginTop: string;
  borderRadius: string;
}

interface PropText {
  paddingLeft?: string;
}

export const Botao = styled.button.attrs((props: PropButton) => ({
  background: props.background,
  hoverBg: props.hoverBg,
  width: props.width,
  height: props.height,
  justifyContent: props.justifyContent,
  marginTop: props.marginTop,
  borderRadius: props.borderRadius,
}))<PropButton>`
  box-sizing: border-box;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 8px 0;

  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  margin-top: ${(props) => props.marginTop};

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

export const Text = styled.p.attrs(({ paddingLeft }: PropText) => ({
  paddingLeft,
}))<PropText>`
  padding-left: ${({ paddingLeft }) => paddingLeft};
`;
