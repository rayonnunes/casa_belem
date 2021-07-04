import styled from "styled-components";
import { AiOutlineLineChart } from "react-icons/ai";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.25rem 7.5rem;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  width: 100%;
  margin: 3.2rem 2.25rem;
`;

const ContentHeader = styled.h3`
  font-size: 58pt;
  font-weight: 600;
  color: #fff;
`;

const ContentBody = styled.p`
  text-align: justify;
  text-justify: inter-word;
  font-size: 14pt;
  margin: 0.8rem;
  width: 90%;
  @media (max-width: 830px) {
    width: 100%;
  }
`;

const Footer = styled.h5`
  font-size: 14pt;
  font-weight: 600;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const Image = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
  border-radius: 20px;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Styled = {
  Container,
  Content,
  ContentHeader,
  ContentBody,
  Footer,
  ImageContainer,
  Image,
};

export default Styled;
