/** Generated automaticaly by dbuilder */
/** IMPORT Start */
import React from "react";

import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Image,
  ImageProps,
  Title,
  TitleProps,
} from "dbuilder-library-ts";

/** IMPORT End */

/** TYPE DEFINITION Start */
type HomeProps = {};

type DefaultProps = {
  ROOT: BoxProps,
  waqgzc: ContainerProps,
  cwqgzo: BoxProps,
  vibvzk: TitleProps,
  ibuhle: ImageProps,
  ingnhp: BoxProps,
  eegnzi: ImageProps,
  gdpnei: ImageProps,
  tvhojc: BoxProps,
};

/** TYPE DEFINITION End */

/** COMPONENT Start */
const Home: React.FC<HomeProps> = (props) => {
  const {
    ROOT,
    waqgzc,
    cwqgzo,
    vibvzk,
    ibuhle,
    ingnhp,
    eegnzi,
    gdpnei,
    tvhojc,
  } = defaultProps;

  return (
    <Box {...ROOT}>
      <Container {...waqgzc}>
        <Box {...cwqgzo}>
          <Title {...vibvzk} />
          <Image {...ibuhle} />
        </Box>
        <Box {...ingnhp}>
          <Image {...eegnzi} />
          <Image {...gdpnei} />
        </Box>
        <Box {...tvhojc} />
      </Container>
    </Box>
  );
};

export default Home;

/** COMPONENT End */

/** DEFAULT PROPS Start */
const defaultProps: DefaultProps = {
  ROOT: {
    tag: "div",
    css: {
      minHeight: "100vh",
      backgroundColor: "rgba(4, 19, 41, 1)",
      background:
        "linear-gradient(0deg, RGBA(0,0,0,1) 0%, rgba(255,255,255,0) 100%)",
      display: "flex",
      alignItems: "center",
    },
  },
  waqgzc: {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: { minHeight: "80vh", display: "flex", flexDirection: "column" },
  },
  cwqgzo: {
    tag: "div",
    css: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  vibvzk: {
    variant: "body1",
    text: "Get started by editing src/pages/index.tsx",
    gutterBottom: false,
    noWrap: false,
    css: {
      padding: "14px",
      backgroundColor: "rgba(11, 16, 24, 1)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#FDFDFD70",
      borderRadius: "10px",
    },
  },
  ibuhle: {
    alt: "Image description for better SEO",
    src: "vercel.svg",
    dynamic: true,
    css: { height: "29px" },
  },
  ingnhp: {
    tag: "div",
    css: {
      flexGrow: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  eegnzi: {
    alt: "Image description for better SEO",
    src: "next.svg",
    dynamic: true,
    css: { height: "36px" },
  },
  gdpnei: {
    alt: "Image description for better SEO",
    src: "thirteen.svg",
    dynamic: true,
    css: {
      padding: "12px",
      backgroundColor: "rgba(2, 6, 22, 1)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#F8F8F85C",
      marginLeft: "18px",
      borderRadius: "10px",
    },
  },
  tvhojc: { tag: "div" },
};

/** DEFAULT PROPS End */
