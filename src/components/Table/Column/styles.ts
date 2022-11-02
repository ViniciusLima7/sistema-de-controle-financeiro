import styled from "styled-components";

export const TableColumn = styled.th<{ width?: string }>`
  width: ${(props) => (props.width ? `${props.width}` : "auto")};
  padding: 10px 0;
  text-align: left;

  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  @media screen and (max-width: 1280px) {
    font-size: 16px;
    width: calc(${(props) => props.width} - 10px);
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
