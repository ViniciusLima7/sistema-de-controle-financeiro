import styled from "styled-components";

export const Container = styled.div<{ top?: string }>`
  position: absolute;
  width: 1156px;
  height: 133px;

  display: flex;
  background: var(--white-100);
  margin-top: -50px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 24px;
  padding: 20px;
  align-items: center;

  transform: translate(-50%);
  left: 50%;
  top: ${(props) => props.top};

  @media screen and (max-width: 1280px) {
    width: 900px;
    height: 113px;
    top: calc(${(props) => props.top} - 2rem);
  }
`;
