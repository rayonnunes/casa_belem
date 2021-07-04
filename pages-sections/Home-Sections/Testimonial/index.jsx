import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Styled from "./styles";

export default function Testimonial() {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.Image src="/img/person.jpg" aria-label="imagem do projeto" />
      </Styled.ImageContainer>
      <Styled.Content>
        <Styled.ContentHeader>
          <FaQuoteLeft />
        </Styled.ContentHeader>
        <Styled.ContentBody>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </Styled.ContentBody>
        <Styled.ContentBody>
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </Styled.ContentBody>
        <Styled.Footer> - Connie Robertson.</Styled.Footer>
      </Styled.Content>
    </Styled.Container>
  );
}
