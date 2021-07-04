import styled from "styled-components";
import { AiOutlineLineChart } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 2.25rem;
  @media (max-width: 830px) {
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
  margin: 3.2rem 0;
`;

const ContentHeader = styled.h3`
  font-size: 28pt;
  font-weight: 600;
`;

const ContentBody = styled.p`
  text-align: justify;
  text-justify: inter-word;
  font-size: 14pt;
  margin: 0.8rem;
  width: 80%;
  @media (max-width: 830px) {
    width: 100%;
  }
`;

const ContentFooter = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  margin-top: 1.75rem;
`;

const Item = styled.div`
  margin: 0 0.8rem;
`;

const ItemIcon = styled(AiOutlineLineChart)`
  font-size: 42pt;
`;

const ItemTitle = styled.h4`
  font-size: 20pt;
`;

const ItemDescription = styled.p`
  font-size: 12pt;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
`;

const Image = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
  border-radius: 60px;
  @media (max-width: 830px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Styled = {
  Container,
  Content,
  ContentHeader,
  ContentBody,
  ImageContainer,
  Image,
  ContentFooter,
  Item,
  ItemIcon,
  ItemTitle,
  ItemDescription,
};

export default Styled;
