import styled from "styled-components";
import { IFooter } from "../../interfaces/IFooter";

export const Container = styled.div.attrs((props: IFooter) => ({
  marginTop: props.marginTop,
}))<IFooter>`
  width: 100vw;
  height: 94px;
  margin-top: ${(props) => props.marginTop};

  background: var(--blue-600);

  @media screen and (max-width: 1280px) {
    margin-top: calc(${(props) => props.marginTop} - 320px);
    height: 61px;
  }
`;
