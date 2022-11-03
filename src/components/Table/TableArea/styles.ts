import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 1156px;

  display: flex;
  flex-direction: column;
  background: var(--white-100);
  margin-top: 100px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 24px;
  padding: 20px;
  align-items: center;

  transform: translate(-50%);
  left: 50%;
  top: 25rem;

  @media screen and (max-width: 1280px) {
    width: 900px;
    margin-top: 80px;
    top: 19rem;
  }
`;
