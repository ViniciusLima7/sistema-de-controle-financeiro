import styled from "styled-components";

export const TableRow = styled.td<{
  justifyContent?: string;
  display?: string;
  marginLeft?: string;
}>`
  padding: 10px 0;
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  justify-content: ${(props) => props.justifyContent};
  display: ${(props) => props.display};
  margin-left: ${(props) => props.marginLeft};

  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }
`;
