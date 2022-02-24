// Generate automaticaly by dbuilder
import React from "react";

import { Box, ButtonIcon, Icon, Image, Title } from "@billers/library";

const MovieCard = (props) => {
  const {
    ROOT,
    tpohyp,
    img,
    zjdtta,
    action,
    smoaqf,
    yxbnuj,
    title,
    dpwwdd,
    releaseDate,
  } = props;
  return (
    <Box {...ROOT}>
      <ButtonIcon {...zjdtta} Icon={<Icon {...smoaqf} />} {...action} />
      <Image {...tpohyp} {...img} />
      <Title {...yxbnuj} {...title} />
      <Title {...dpwwdd} {...releaseDate} />
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
  tpohyp: {
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
  zjdtta: {
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
  smoaqf: {
    color: "inherit",
    icon: "FaRegBookmark",
    fontSize: "inherit",
    hidden: false,
  },
  yxbnuj: {
    variant: "h2",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "18px" },
  },
  dpwwdd: {
    variant: "overline",
    text: "{{releaseDate}}",
    gutterBottom: false,
    noWrap: false,
    css: { color: "#C8C8C8" },
  },
};
