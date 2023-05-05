/** Generated automaticaly by dbuilder */
/** IMPORT Start */
import React from "react";

import {
  Box,
  BoxProps,
  Icon,
  IconProps,
  Title,
  TitleProps,
} from "dbuilder-library-ts";

/** IMPORT End */

/** TYPE DEFINITION Start */
type ModalContentProps = {
  email: TitleProps & {
    email?: string,
  },
};

type DefaultProps = {
  ROOT: BoxProps,
  heyfax: TitleProps,
  mvdesp: IconProps,
  bsmsna: BoxProps,
};

/** TYPE DEFINITION End */

/** COMPONENT Start */
const ModalContent: React.FC<ModalContentProps> = (props) => {
  const { email } = props;
  const { ROOT, heyfax, mvdesp, bsmsna } = defaultProps;

  return (
    <Box {...ROOT}>
      <Icon {...mvdesp} />
      <Box {...bsmsna}>
        <Title {...heyfax} {...email} />
      </Box>
    </Box>
  );
};

export default ModalContent;

/** COMPONENT End */

/** DEFAULT PROPS Start */
const defaultProps: DefaultProps = {
  ROOT: {
    tag: "div",
    css: {
      width: "480px",
      minHeight: "239px",
      backgroundColor: "rgba(20, 24, 27, 1)",
      borderRadius: "4px",
      paddingLeft: "16px",
      paddingRight: "16px",
      display: "flex",
      alignItems: "center",
    },
  },
  heyfax: {
    variant: "h3",
    text: "😜 Thank you for your registration <b>{{email}}</b>",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "22px", lineHeight: "31px" },
  },
  mvdesp: {
    color: "inherit",
    icon: { name: "IoRocketOutline", library: "io5" },
    fontSize: "inherit",
    css: { fontSize: "46px" },
  },
  bsmsna: { tag: "div", css: { flexGrow: "1", paddingLeft: "12px" } },
};

/** DEFAULT PROPS End */
