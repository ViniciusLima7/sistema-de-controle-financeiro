import styled from "styled-components";
import { IFooter } from "../../interfaces/IFooter";

export const Container = styled.div.attrs((props: IFooter) => ({
  marginTop: props.marginTop,
}))<IFooter>`
  width: 100vw;
  height: 61px;
  margin-top: ${(props) => props.marginTop};

  background: var(--blue-600);

  @media screen and (min-width: 1920px) {
    height: 75px;
  }
`;
