import React from "react";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import Styled from "./styles";
export default function Project() {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.Image src="/img/project.jpg" aria-label="imagem do projeto" />
      </Styled.ImageContainer>
      <Styled.Content>
        <Styled.ContentHeader>Projeto</Styled.ContentHeader>
        <Styled.ContentBody>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </Styled.ContentBody>
        <Styled.ContentBody>
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </Styled.ContentBody>
        <Styled.ContentFooter>
          <Styled.Item>
            <Styled.ItemIcon />
            <Styled.ItemTitle>Pontos Relevantes</Styled.ItemTitle>
            <Styled.ItemDescription>
              Nulla ullamcorper cursus commodo. Vivamus vulputate viverra elit
              id laoreet. Praesent urna nibh, congue at imperdiet at, pulvinar
              nec ex. Maecenas consequat sem magna orci aliquam.
            </Styled.ItemDescription>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemIcon />
            <Styled.ItemTitle>Pontos Relevantes</Styled.ItemTitle>
            <Styled.ItemDescription>
              Nulla ullamcorper cursus commodo. Vivamus vulputate viverra elit
              id laoreet. Praesent urna nibh, congue at imperdiet at, pulvinar
              nec ex. Maecenas consequat sem magna orci aliquam.
            </Styled.ItemDescription>
          </Styled.Item>
        </Styled.ContentFooter>
      </Styled.Content>
    </Styled.Container>
  );
}
