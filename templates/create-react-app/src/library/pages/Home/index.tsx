/** Generated automaticaly by dbuilder */
/** IMPORT Start */
import React from "react";

import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Container,
  ContainerProps,
  Form,
  FormProps,
  InputBase,
  InputBaseProps,
  Title,
  TitleProps,
} from "dbuilder-library-ts";

/** IMPORT End */

/** TYPE DEFINITION Start */
type HomeProps = {
  waitingForm: FormProps,
};

type DefaultProps = {
  ROOT: BoxProps,
  ovnqos: BoxProps,
  kwfgco: TitleProps,
  bflkuo: ContainerProps,
  xslrhy: TitleProps,
  wppuqs: TitleProps,
  ieaesx: TitleProps,
  bqaimm: FormProps,
  kxdxjl: InputBaseProps,
  qhvdgg: ContainerProps,
  ynzysu: ButtonProps,
};

/** TYPE DEFINITION End */

/** COMPONENT Start */
const Home: React.FC<HomeProps> = (props) => {
  const { waitingForm } = props;
  const {
    ROOT,
    ovnqos,
    kwfgco,
    bflkuo,
    xslrhy,
    wppuqs,
    ieaesx,
    bqaimm,
    kxdxjl,
    qhvdgg,
    ynzysu,
  } = defaultProps;

  return (
    <Box {...ROOT}>
      <Box {...ovnqos}>
        <Container {...bflkuo}>
          <Title {...kwfgco} />
          <Title {...xslrhy} />
          <Title {...wppuqs} />
        </Container>
      </Box>
      <Container {...qhvdgg}>
        <Title {...ieaesx} />
        <Form {...bqaimm} {...waitingForm}>
          <InputBase {...kxdxjl} />
          <Button {...ynzysu} />
        </Form>
      </Container>
    </Box>
  );
};

export default Home;

/** COMPONENT End */

/** DEFAULT PROPS Start */
const defaultProps: DefaultProps = {
  ROOT: { tag: "div" },
  ovnqos: {
    tag: "div",
    css: {
      minHeight: "100vh",
      background: "url(images/bg-hero.jpg) center / contain no-repeat scroll",
      display: "flex",
      alignItems: "center",
    },
  },
  kwfgco: {
    variant: "h1",
    text: "Build webapp",
    gutterBottom: false,
    noWrap: false,
    css: {
      fontSize: "78px",
      fontWeight: 700,
      color: "#00000000",
      backgroundClip: "text !important",
      background:
        "linear-gradient(130deg,       rgba(75,57,239,1) 0%, RGBA(238, 139, 96, 1) 100%)",
      "@media (max-width: 700px)": { fontSize: "40px" },
    },
  },
  bflkuo: {
    maxWidth: "md",
    disableGutters: false,
    fixed: false,
    css: { textAlign: "center" },
  },
  xslrhy: {
    variant: "h1",
    text: "faster than ever",
    gutterBottom: false,
    noWrap: false,
    css: {
      fontSize: "75px",
      fontWeight: 700,
      "@media (max-width: 700px)": { fontSize: "40px" },
    },
  },
  wppuqs: {
    variant: "body1",
    text: "Create beautiful UI, generate clean code, and deploy to the app stores or web in one click. Fully extensible with custom code.",
    gutterBottom: false,
    noWrap: false,
    css: {
      fontSize: "21px",
      color: "#95a1ac",
      marginTop: "10px",
      "@media (max-width: 700px)": { fontSize: "17px" },
    },
  },
  ieaesx: {
    variant: "h2",
    text: "Join our waiting list",
    gutterBottom: false,
    noWrap: false,
    css: {
      fontSize: "60px",
      fontWeight: 700,
      color: "#262d34",
      textAlign: "center",
      marginBottom: "16px",
      "@media (max-width: 700px)": { fontSize: "40px" },
    },
  },
  bqaimm: {
    mode: "onSubmit",
    css: { width: "420px", display: "flex", alignItems: "center" },
  },
  kxdxjl: {
    inputName: "email",
    color: "primary",
    type: "email",
    "aria-label": "email",
    placeholder: "email@example.com",
    autoFocus: false,
    disabled: false,
    fullWidth: true,
    maxRows: 1,
    minRows: 1,
    rows: 1,
    multiline: false,
    readOnly: false,
    required: true,
    size: "medium",
    css: {
      backgroundColor: "rgba(64, 77, 84, 0.05)",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px  ",
      paddingLeft: "12px",
      paddingRight: "8px",
      paddingTop: "8px",
      paddingBottom: "8px",
      borderRadius: "4px",
    },
  },
  qhvdgg: {
    maxWidth: "md",
    disableGutters: false,
    fixed: false,
    css: {
      marginTop: "48px",
      marginBottom: "48px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  ynzysu: {
    text: "Register",
    type: "submit",
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    variant: "contained",
    iconStart: false,
    iconEnd: false,
    css: { marginLeft: "10px" },
  },
};

/** DEFAULT PROPS End */
