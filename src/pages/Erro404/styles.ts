import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Dongle";
  font-style: normal;
  font-weight: 400;
  font-size: 500px;
  line-height: 724px;
  text-align: center;
  margin: 0;
  margin-top: -100px;
  color: var(--blue-600);

  @media screen and (max-width: 1280px) {
    font-size: 300px;
    margin-top: -200px;
  }
`;

export const Subtitle = styled.h2`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 92px;
  margin-top: -200px;
  margin-bottom: 100px;
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 30px;
    width: 800px;
    margin-top: -250px;
    margin-bottom: 70px;
    line-height: 42px;
  }
`;

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
