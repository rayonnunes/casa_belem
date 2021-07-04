/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { IoMdHeart } from "react-icons/io";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Quem Somos"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link href="#">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a href="#" target="_blank" className={classes.dropdownLink}>
              Documentation
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#" color="transparent" className={classes.navLink}>
          Nutrição
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#" color="transparent" className={classes.navLink}>
          Serviço Social
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#" color="transparent" className={classes.navLink}>
          Desafios
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#" color="transparent" className={classes.navLink}>
          Loja
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#" color="primary" className={classes.navLink}>
          <span
            style={{ fontSize: "12pt", marginRight: "0.6rem", color: "#fff" }}
          >
            Doe Agora
          </span>
          <IoMdHeart color="#fff" />
        </Button>
      </ListItem>
    </List>
  );
}
