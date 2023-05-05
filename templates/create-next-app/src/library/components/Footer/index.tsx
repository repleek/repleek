/** Generated automaticaly by dbuilder */
/** IMPORT Start */
import React from "react";

import { Box, BoxProps, Title, TitleProps } from "dbuilder-library-ts";

/** IMPORT End */

/** TYPE DEFINITION Start */
type FooterProps = {};

type DefaultProps = {
  ROOT: BoxProps,
  htzoel: TitleProps,
};

/** TYPE DEFINITION End */

/** COMPONENT Start */
const Footer: React.FC<FooterProps> = (props) => {
  const { ROOT, htzoel } = defaultProps;

  return (
    <Box {...ROOT}>
      <Title {...htzoel} />
    </Box>
  );
};

export default Footer;

/** COMPONENT End */

/** DEFAULT PROPS Start */
const defaultProps: DefaultProps = {
  ROOT: {
    tag: "div",
    css: {
      backgroundColor: "rgba(38, 45, 52, 1)",
      textAlign: "center",
      paddingTop: "8px",
      paddingBottom: "8px",
    },
  },
  htzoel: {
    variant: "overline",
    text: "Copyright © 2023 dbuilder. All rights reserved. ",
    gutterBottom: false,
    noWrap: false,
  },
};

/** DEFAULT PROPS End */
