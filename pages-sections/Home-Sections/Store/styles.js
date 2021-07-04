import styled from "styled-components";
import { container } from "styles/jss/nextjs-material-kit.js";

const loginStyle = {
  section: {
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (max-width: 1080px)": {
      flexDirection: "column",
    },
  },
  container,
  form: {
    margin: "0",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "0",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    fontSize: 22,
    fontWeight: 600,
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },
};

export const ProductPicture = styled.div`
  background-image: url("${({ src }) => src}");
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default loginStyle;
