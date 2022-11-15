import { ReactElement } from "react";
import { ISection } from "../../interfaces/ISection";
import { Container } from "./styles";

export default function Section({
  width = "1156px",
  height = "183px",
  children,
}: ISection) {
  return (
    <>
      <Container width={width} height={height}>
        {children}
      </Container>
    </>
  );
}
