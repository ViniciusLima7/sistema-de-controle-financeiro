import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: var(--white-100);
  box-shadow: 24px;
  border-radius: 88px;
  padding: 4px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 30px;
  :focus {
    border: none;
  }
`;

export const Title = styled.h1`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  margin-top: 10px;

  color: var(--blue-600);
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 28px;
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
  color: var(--blue-600);
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
`;

export const ResetPassword = styled.p`
  margin-top: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;

  color: var(--white-100);

  :hover {
    color: var(--gray-500);
    transition-duration: 0.1s;
    transition-timing-function: linear;
  }
  @media screen and (max-width: 1280px) {
    font-size: 12px;
    line-height: 17px;
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
