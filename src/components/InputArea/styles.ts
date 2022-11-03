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
    top: calc(${(props) => props.top} - 6rem);
  }
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    width: 40px;
  }
`;

export const Title = styled.div`
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  margin-bottom: 5px;
  color: var(--black);

  @media (max-width: 1280px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 650px) {
    font-size: 10px;
  }
  @media (max-width: 535px) {
    font-size: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid var(--blue-100);
  border-radius: 5px;
  outline: none;

  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  /* text-align: center; */
  color: var(--black);

  ::placeholder {
    font-weight: 400;
    color: var(--gray-500);
  }

  :focus {
    border: 2px solid var(--blue-600);
  }

  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 1px;
  border: 1px solid lightblue;
  border-radius: 5px;
  font-family: "JetBrains Mono";

  :focus {
    border: 2px solid var(--blue-600);
  }

  @media screen and (max-width: 768px) {
    width: 110%;
  }

  @media screen and (max-width: 1280px) {
    font-size: 11px;
  }

  @media screen and (max-width: 650px) {
    width: 60px;
    font-size: 10px;
  }
`;

export const Option = styled.option`
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: #00008b;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #4659ff;
    color: white;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 12px;
  }

  @media (max-width: 650px) {
    width: 90%;
    font-size: 8px;
  }
`;
