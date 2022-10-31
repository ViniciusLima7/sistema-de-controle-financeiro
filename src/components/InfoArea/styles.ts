import styled from "styled-components";

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  cursor: pointer;

  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;

  @media (max-width: 1280px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;

  color: #000000;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 24px;
  text-align: center;

  @media (max-width: 1280px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;
