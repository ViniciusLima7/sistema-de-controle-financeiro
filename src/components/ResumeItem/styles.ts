import styled from "styled-components";

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

export const Logo = styled.img`
  margin-left: 38%; //corrigir
  height: 59px;
  width: 59px;

  @media screen and (max-width: 1280px) {
    margin-left: 42%; //corrigir
    height: 35px;
    width: 35px;
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
