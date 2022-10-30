import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: var(--white);
  box-shadow: 24px;
  border-radius: 88px;
  padding: 4px;
  align-items: center;
  text-align: center;
  justify-content: center;
  :focus {
    border: none;
  }
`;

export const Title = styled.h1`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 0;
  margin-top: 10px;

  color: var(--blue-600);
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.h1`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  margin-top: 0;

  color: var(--black);
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 14px;
    /* line-height: 35px; */
  }
`;

export const Text = styled.p`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
`;

export const Link = styled.a`
  color: var(--blue-600);
  font-weight: 600;
  cursor: pointer;
`;

export const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
`;
