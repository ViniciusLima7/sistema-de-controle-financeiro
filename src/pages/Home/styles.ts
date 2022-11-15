import { color } from "@mui/system";
import styled from "styled-components";
import { IText } from "../../interfaces/IText";

export const Box = styled.div`
  margin-left: 140px;
  width: 623px;
  @media screen and (min-width: 1921px) {
    margin-left: 400px;
  }
`;

export const Text = styled.p<IText>`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  text-align: center;
  width: ${(props) => props.width};
  margin-left: ${(props) => props.marginLeft};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  color: ${(props) => props.color};

  @media screen and (max-width: 1280px) {
    font-size: calc(${(props) => props.size} - 6px);
    padding-top: calc(${(props) => props.paddingTop} - 87px);
  }

  @media screen and (min-width: 1921px) {
    padding-top: calc(${(props) => props.paddingTop} - 18.5px);
  }
`;

export const TextColor = styled.span<IText>`
  color: ${(props) => props.color};
`;

export const Image = styled.img`
  transform: translate(180%, 0%);
  width: 650px;
  margin-top: -310px;
  margin-left: -220px;
  padding-bottom: 10px;
  @media screen and (max-width: 1280px) {
    width: 450px;
    margin-left: -120px;
  }

  @media screen and (min-width: 1921px) {
    width: 711px;
    margin-left: 150px;
  }
`;
