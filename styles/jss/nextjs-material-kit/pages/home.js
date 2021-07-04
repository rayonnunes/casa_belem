import styled from "styled-components";
import { container } from "styles/jss/nextjs-material-kit.js";

const componentsStyle = {
  container: {
    ...container,
    height: "100%",
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    maxWidth: "700px",
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  shiftMain: {
    marginTop: "-60px",
  },
  mainRaised: {
    marginLeft: "90px",
    marginRight: "90px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
};

export const Brand = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  text-align: left;
`;

export const Title = styled.h1`
  max-width: 700px;
  font-size: 4.2rem;
  font-weight: 600;
  display: inline-block;
  position: relative;
  @media (max-width: 830px) {
    max-width: 85%;
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.313rem;
  max-width: 510px;
  margin: 10px 0 0;
  @media (max-width: 830px) {
    font-size: 1rem;
    max-width: 80%;
  }
`;

export const Background = styled.div`
  background-image: linear-gradient(-45deg, #f5cf62, #ff81bc);
`;

export default componentsStyle;
