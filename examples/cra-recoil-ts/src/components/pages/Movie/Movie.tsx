//Generate automaticaly by dbuilder
import React from "react";
import {
  Box,
  Container,
  Image,
  Title,
  Button,
  Icon,
  ButtonIcon,
} from "@billers/library";

const Movie = (props) => {
  const { wrapper, img, title, favoriteButton, votes, overview } = props;
  return (
    <Box {...props["ROOT"]} {...wrapper}>
      <Container {...props["s8v3MjLoF"]}>
        <Box {...props["cPD2BT8ET"]}>
          <Image {...props["E-zTodWs4"]} {...img} />
        </Box>
        <Box {...props["XKn_r0O8a"]}>
          <Box {...props["kmGH7DCRX"]} {...votes} />
          <Title {...props["V4RNxpg8L"]} {...title} />
          <Title {...props["R60N7Na_c"]} {...overview} />
          <ButtonIcon
            {...props["DJzwj1Xm1"]}
            Icon={<Icon {...props["54EWTJ-ll"]} />}
          />
          <Button
            {...props["iERsnldxa"]}
            IconStart={<Icon {...props["Lc2R8rjZk"]} />}
            {...favoriteButton}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Movie;

Movie.defaultProps = {
  ROOT: {
    tag: "div",
    className: "overlay-black",
    css: { minHeight: "100vh", display: "flex", alignItems: "center" },
  },
  s8v3MjLoF: {
    maxWidth: "md",
    disableGutters: false,
    fixed: false,
    className: "overlay-blur",
    css: {
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
      paddingTop: "16px",
      paddingRight: "16px",
      paddingBottom: "16px",
      paddingLeft: "16px",
      background: "#12121230",
      display: "flex",
      alignItems: "center",
      zIndex: "10",
    },
  },
  cPD2BT8ET: { tag: "div", css: { maxWidth: "380px", display: "flex" } },
  XKn_r0O8a: {
    tag: "div",
    css: { flex: "1", paddingRight: "32px", paddingLeft: "32px" },
  },
  "E-zTodWs4": {
    alt: "Image description for better SEO",
    src: "https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    dynamic: true,
    css: {
      width: "100%",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
    },
  },
  V4RNxpg8L: {
    variant: "h1",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { marginBottom: "8px" },
  },
  iERsnldxa: {
    text: "Add to favorite",
    type: "button",
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    size: "medium",
    variant: "contained",
    color: "secondary",
    iconStart: true,
    iconEnd: false,
    css: {
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
    },
  },
  Lc2R8rjZk: {
    color: "inherit",
    icon: "FaHeart",
    fontSize: "inherit",
    hidden: false,
  },
  kmGH7DCRX: { tag: "div" },
  R60N7Na_c: {
    variant: "body1",
    text: "{{overview}}",
    gutterBottom: false,
    noWrap: false,
    css: { marginBottom: "12px" },
  },
  DJzwj1Xm1: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "primary",
    href: "/",
    css: {
      marginRight: "12px",
      background: "#F4F4F4",
      "&:hover": { background: "#F8F7F7C2" },
    },
  },
  "54EWTJ-ll": {
    color: "inherit",
    icon: "FaAngleLeft",
    fontSize: "inherit",
    hidden: false,
  },
};
