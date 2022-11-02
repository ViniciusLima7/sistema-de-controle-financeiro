import { ReactElement } from "react";
import { Container } from "./styles";

interface SectionProp {
  width?: string;
  height?: string;
  children?: ReactElement[];
}

export default function Section({
  width = "1156px",
  height = "183px",
  children,
}: SectionProp) {
  return (
    <>
      <Container width={width} height={height}>
        {children}
      </Container>
    </>
  );
}
