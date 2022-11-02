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
    top: 20rem;
  }
`;

export const TableHeadColumn = styled.th<{ width?: string }>`
  width: ${(props) => (props.width ? `${props.width}` : "auto")};
  padding: 10px 0;
  text-align: left;

  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  @media screen and (max-width: 1280px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const TableRow = styled.td`
  padding: 10px 0;
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
