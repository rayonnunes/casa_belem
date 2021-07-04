import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles, { ProductPicture } from "./styles";

const useStyles = makeStyles(styles);

export default function Store() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={10}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="warning" className={classes.cardHeader}>
                  <ProductPicture
                    src="/img/store.jpg"
                    aria-label="imagem do produto"
                  />
                </CardHeader>
                <p className={classes.divider}>Or Be Classical</p>
                <CardBody>
                  Curabitur vulputate purus erat, eget viverra felis sagittis
                  et. Sed vulputate dictum nunc, id accumsan lacus sollicitudin
                  id. Mauris vitae tincidunt est, eget blandit massa.{" "}
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    <span className={classes.divider}>R$ 9,99</span>
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={10}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="warning" className={classes.cardHeader}>
                  <ProductPicture
                    src="/img/store.jpg"
                    aria-label="imagem do produto"
                  />
                </CardHeader>
                <p className={classes.divider}>Or Be Classical</p>
                <CardBody>
                  Curabitur vulputate purus erat, eget viverra felis sagittis
                  et. Sed vulputate dictum nunc, id accumsan lacus sollicitudin
                  id. Mauris vitae tincidunt est, eget blandit massa.{" "}
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    <span className={classes.divider}>R$ 9,99</span>
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={10}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="warning" className={classes.cardHeader}>
                  <ProductPicture
                    src="/img/store.jpg"
                    aria-label="imagem do produto"
                  />
                </CardHeader>
                <p className={classes.divider}>Or Be Classical</p>
                <CardBody>
                  Curabitur vulputate purus erat, eget viverra felis sagittis
                  et. Sed vulputate dictum nunc, id accumsan lacus sollicitudin
                  id. Mauris vitae tincidunt est, eget blandit massa.{" "}
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    <span className={classes.divider}>R$ 9,99</span>
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
