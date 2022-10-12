import styled from "styled-components";

type PropTypeButton = {
  background: string;
  hoverBg: string;
};

export const Botao = styled.button.attrs((props: PropTypeButton) => ({
  background: props.background,
  hoverBg: props.hoverBg,
}))<PropTypeButton>`
  box-sizing: border-box;

  width: 249px;
  height: 40px;
  padding: 8px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  background: ${(props) => props.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: var(--white);
  cursor: pointer;
  /* identical to box height */

  text-align: center;
  align-items: center;

  :hover {
    background: ${(props) => props.hoverBg};
  }
`;
