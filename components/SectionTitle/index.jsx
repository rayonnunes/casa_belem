import React from "react";
import Button from "components/CustomButtons/Button.js";
import { Container, TitleButton } from "./styles";

export default function SectionTitle({ children }) {
  return (
    <Container>
      <TitleButton>{children}</TitleButton>
    </Container>
  );
}
