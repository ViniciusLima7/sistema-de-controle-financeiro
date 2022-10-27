import styled from "styled-components";

export const InputStyle = styled.input`
  width: 364px;
  height: 66px;
  outline: none;
  border-color: var(--white);
  border: none;
  background: var(--white);
  border-radius: 15px;
  font-size: 16px;
  padding-bottom: 5px;
  padding-left: 8px;
  padding-right: 10px;

  font-family: "Inter";
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;

  ::placeholder {
    font-weight: 400;
    color: var(--gray-500);
  }
  :focus {
    border: 2px solid var(--blue-600);
    margin-left: -41px;
    padding-left: 47px;
    background-color: transparent;
  }
`;

export const Label = styled.label`
  width: 400px;
  height: 72px;
  border-radius: 15px;
  background: var(--white);
  margin-bottom: 10px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  outline: none;
`;
