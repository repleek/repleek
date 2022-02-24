// Generate automaticaly by dbuilder
import React from "react";

import {
  Box,
  Button,
  ButtonIcon,
  Container,
  Icon,
  Image,
  Title,
} from "@billers/library";

const Movie = (props) => {
  const {
    ROOT,
    wrapper,
    qardmq,
    brkshx,
    hfhbxy,
    zhomap,
    img,
    xfoefr,
    title,
    fflkjl,
    favoriteButton,
    auxzsf,
    wwsvkt,
    votes,
    vsgwaq,
    overview,
    dfeqzh,
    bkpvyy,
  } = props;
  return (
    <Box {...ROOT} {...wrapper}>
      <Container {...qardmq}>
        <Box {...brkshx}>
          <Image {...zhomap} {...img} />
        </Box>
        <Box {...hfhbxy}>
          <Box {...wwsvkt} {...votes} />
          <Title {...xfoefr} {...title} />
          <Title {...vsgwaq} {...overview} />
          <ButtonIcon {...dfeqzh} Icon={<Icon {...bkpvyy} />} />
          <Button
            {...fflkjl}
            IconStart={<Icon {...auxzsf} />}
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
  qardmq: {
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
  brkshx: { tag: "div", css: { maxWidth: "380px", display: "flex" } },
  hfhbxy: {
    tag: "div",
    css: { flex: "1", paddingRight: "32px", paddingLeft: "32px" },
  },
  zhomap: {
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
  xfoefr: {
    variant: "h1",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { marginBottom: "8px" },
  },
  fflkjl: {
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
  auxzsf: {
    color: "inherit",
    icon: "FaHeart",
    fontSize: "inherit",
    hidden: false,
  },
  wwsvkt: { tag: "div" },
  vsgwaq: {
    variant: "body1",
    text: "{{overview}}",
    gutterBottom: false,
    noWrap: false,
    css: { marginBottom: "12px" },
  },
  dfeqzh: {
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
  bkpvyy: {
    color: "inherit",
    icon: "FaAngleLeft",
    fontSize: "inherit",
    hidden: false,
  },
};
