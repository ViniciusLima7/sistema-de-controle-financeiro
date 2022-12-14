import styled from "styled-components";
import { ISection } from "../../interfaces/ISection";

export const Container = styled.section<ISection>`
  position: absolute;
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  display: flex;
  background: var(--white-100);
  margin-top: -30px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 24px;
  padding: 20px;

  transform: translate(-50%);
  left: 50%;

  @media screen and (max-width: 1280px) {
    width: 900px;
    margin-top: -18px;
    height: 153px;
  }
`;
