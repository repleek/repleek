//Generate automaticaly by dbuilder
import React from "react";
import { Box, Image, ButtonIcon, Icon, Title } from "@billers/library";

const MovieCard = (props) => {
  const { img, action, title, release_date } = props;
  return (
    <Box {...props["ROOT"]}>
      <ButtonIcon
        {...props["9dzGGxT7P"]}
        Icon={<Icon {...props["8sKi2lkzb"]} />}
        {...action}
      />
      <Image {...props["-x58E9PHv"]} {...img} />
      <Title {...props["iZqeUQLVL"]} {...title} />
      <Title {...props["FYM4VldEx"]} {...release_date} />
    </Box>
  );
};

export default MovieCard;

MovieCard.defaultProps = {
  ROOT: {
    tag: "div",
    className: "movie-card",
    css: {
      width: "25%",
      position: "relative",
      textAlign: "center",
      marginTop: "16px",
      paddingTop: "8px",
      paddingRight: "8px",
      paddingBottom: "8px",
      paddingLeft: "8px",
    },
  },
  "-x58E9PHv": {
    alt: "Image description for better SEO",
    src: "https://image.tmdb.org/t/p/w500//8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
    dynamic: true,
    css: {
      width: "100%",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
    },
  },
  "9dzGGxT7P": {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "inherit",
    css: {
      position: "absolute",
      right: "12px",
      top: "12px",
      background: "#252675",
      zIndex: "10",
      "&:hover": { color: "#252675", background: "#FFFFFFCC" },
    },
  },
  "8sKi2lkzb": {
    color: "inherit",
    icon: "FaReact",
    fontSize: "inherit",
    hidden: false,
  },
  iZqeUQLVL: {
    variant: "h2",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "18px" },
  },
  FYM4VldEx: {
    variant: "overline",
    text: "{{release_date}}",
    gutterBottom: false,
    noWrap: false,
    css: { color: "#C8C8C8" },
  },
};
