import styled from "styled-components";
import { IResumeItem } from "../../interfaces/IResumeItem";

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  margin-bottom: 5px;

  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #645f5f;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Logo = styled.img.attrs(
  ({ width = "59px", height = "59px", marginLeft = "38%" }: IResumeItem) => ({
    width,
    height,
    marginLeft,
  })
)<IResumeItem>`
  margin-left: ${({ marginLeft }) => marginLeft}; //corrigir
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  @media screen and (max-width: 1280px) {
    margin-left: calc(${({ marginLeft }) => marginLeft} + 3%); //corrigir
    height: calc(${({ height }) => height} - 24px);
    width: calc(${({ height }) => height} - 24px);
  }

  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
    margin-left: 35%;
  }
`;

export const Info = styled.p<{ color?: string }>`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  text-align: center;

  color: ${(props) => props.color ?? "#000"};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
