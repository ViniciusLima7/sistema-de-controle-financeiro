import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 158px;

  background: var(--blue-600);

  @media screen and (max-width: 1280px) {
    height: 110px;
  }
`;

export const Title = styled.h1`
  font-family: "Jua";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  margin-top: 0;
  margin-right: 10px;
  padding-top: 27px;
  text-align: center;
  color: var(--white);
  -webkit-text-stroke: 1px var(--black);
  @media screen and (max-width: 1280px) {
    font-size: 26px;
    line-height: 16px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 27px;
  margin-top: -27px;
`;

export const Text = styled.span`
  font-family: "Arimo Hebrew Subset";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-right: 16px;
  margin-top: 4px;
  color: var(--white);
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    font-size: 16px;
    line-height: 16px;
  }
`;

export const Image = styled.img`
  margin-right: 12px;
  cursor: pointer;
`;
