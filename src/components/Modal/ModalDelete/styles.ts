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
  border-radius: 80px;
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
  font-size: 28px;
  margin-top: 10px;

  color: var(--blue-600);
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 24px;
  }
`;

export const Text = styled.h1`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  margin: 20px 0;

  color: var(--black);
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin-top: 20px;
  margin-bottom: 70px;

  @media screen and (max-width: 1280px) {
    width: 250px;
  }
`;
