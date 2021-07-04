import React from "react";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import Styled from "./styles";

export default function Stats() {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.Image src="/img/chart.jpg" aria-label="imagem do projeto" />
      </Styled.ImageContainer>
      <Styled.Content>
        <Styled.ContentHeader>Estatísticas</Styled.ContentHeader>
        <Styled.ContentBody>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </Styled.ContentBody>
        <Styled.ContentBody>
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </Styled.ContentBody>
      </Styled.Content>
    </Styled.Container>
  );
}
