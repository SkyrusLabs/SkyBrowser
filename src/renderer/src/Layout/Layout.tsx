import Versions from "@renderer/components/Versions";
import React from "react";
import { Container } from "./Styled.layout";

export const Layout: React.FC = () => {
  return (
    <Container>
      <Versions />
    </Container>
  )
}

