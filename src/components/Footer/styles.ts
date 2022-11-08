import styled from "styled-components";

interface PropContainer {
  marginTop?: string;
}

export const Container = styled.div.attrs((props: PropContainer) => ({
  marginTop: props.marginTop,
}))<PropContainer>`
  width: 100vw;
  height: 94px;
  margin-top: ${(props) => props.marginTop};

  background: var(--blue-600);

  @media screen and (max-width: 1280px) {
    margin-top: calc(${(props) => props.marginTop} - 320px);
    height: 61px;
  }
`;
