import styled from "styled-components";

interface PropInput {
  width?: string;
  height?: string;
}

interface PropLabel {
  widthLabel?: string;
  heightLabel?: string;
  marginBottom?: string;
}

export const InputStyle = styled.input.attrs((props: PropInput) => ({
  width: props.width,
  height: props.height,
}))<PropInput>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  outline: none;
  border-color: var(--white);
  border: none;
  background: var(--white);
  border-radius: 15px;
  font-size: 16px;
  padding-bottom: 5px;
  padding-left: 8px;
  padding-right: 20px;

  font-family: "Inter";
  font-style: normal;
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

  @media screen and (max-width: 1280px) {
    width: 270px;
    height: 50px;
    font-size: 12px;
  }
`;

export const Label = styled.label.attrs((props: PropLabel) => ({
  width: props.widthLabel,
  height: props.heightLabel,
  marginBottom: props.marginBottom,
}))<PropLabel>`
  width: ${(props) => props.widthLabel};
  height: ${(props) => props.heightLabel};
  border-radius: 15px;
  background: var(--white);
  margin-bottom: ${(props) => props.marginBottom};
  padding-left: 15px;
  display: flex;
  align-items: center;
  outline: none;

  @media screen and (max-width: 1280px) {
    width: 306px;
    height: 56px;
  }
`;
