import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Projects from "pages-sections/Home-Sections/Projects";

import styles, {
  Brand,
  Title,
  Subtitle,
  Background,
} from "styles/jss/nextjs-material-kit/pages/home.js";
import SectionTitle from "../components/SectionTitle";
import Store from "../pages-sections/Home-Sections/Store";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();

  const settingsMainCarousel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const settingsProjectsCarousel = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const { ...rest } = props;

  return (
    <Background>
      <Header
        brand="Casa Belém"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Carousel {...settingsMainCarousel}>
        <Parallax image="/img/main.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <Brand>
                  <Title>
                    Ajude a Casa Belém a recuperar o futuro de centenas de
                    famílias.
                  </Title>
                  <Subtitle>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus .
                  </Subtitle>
                </Brand>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Parallax image="/img/main.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <Title>
                    Ajude a Casa Belém a recuperar o futuro de centenas de
                    famílias.
                  </Title>
                  <Subtitle>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus.
                  </Subtitle>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </Carousel>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridItem md={12} className={classes.textCenter}>
          <Carousel {...settingsProjectsCarousel}>
            <Projects />
            <Projects />
            <Projects />
          </Carousel>
        </GridItem>
      </div>
      <SectionTitle>Loja</SectionTitle>
      <Store />
      <Footer />
    </Background>
  );
}
