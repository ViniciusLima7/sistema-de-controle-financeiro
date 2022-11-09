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

export const Text = styled.h1`
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

export const GroupButtom = styled.div<{
  width?: string;
}>`
  display: flex;
  justify-content: space-around;
  width: ${(props) => props.width};
  margin-top: 15px;

  @media screen and (max-width: 1280px) {
    width: calc(${(props) => props.width} - 50px);
  }
`;

export const Container = styled.div<{
  flexDirection?: string;
  width?: string;
  paddingLeft?: string;
}>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width};
  margin-top: 15px;
  text-align: start;
  padding-left: ${(props) => props.paddingLeft};

  @media screen and (max-width: 1280px) {
    width: ${(props) => props.width};
  }
`;
