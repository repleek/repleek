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
  Typography,
  TypographyProps,
} from "@repleek/mui";

/** IMPORT End */

/** TYPE DEFINITION Start */
type HomeProps = {
  waitingForm: FormProps,
};

type DefaultProps = {
  ROOT: BoxProps,
  tbubte: BoxProps,
  kbtley: TypographyProps,
  pjiobm: ContainerProps,
  ivembl: TypographyProps,
  qcmmqx: TypographyProps,
  dezvyf: TypographyProps,
  pidqzc: FormProps,
  dcvwdy: InputBaseProps,
  rronoc: ContainerProps,
  fsvcke: ButtonProps,
};

/** TYPE DEFINITION End */

/** COMPONENT Start */
const Home: React.FC<HomeProps> = (props) => {
  const { waitingForm } = props;
  const {
    ROOT,
    tbubte,
    kbtley,
    pjiobm,
    ivembl,
    qcmmqx,
    dezvyf,
    pidqzc,
    dcvwdy,
    rronoc,
    fsvcke,
  } = defaultProps;

  return (
    <Box {...ROOT}>
      <Box {...tbubte}>
        <Container {...pjiobm}>
          <Typography {...kbtley} />
          <Typography {...ivembl} />
          <Typography {...qcmmqx} />
        </Container>
      </Box>
      <Container {...rronoc}>
        <Typography {...dezvyf} />
        <Form {...pidqzc} {...waitingForm}>
          <InputBase {...dcvwdy} />
          <Button {...fsvcke} />
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
  tbubte: {
    tag: "div",
    css: {
      minHeight: "100vh",
      background: "url(images/bg-hero.jpg) center / contain no-repeat scroll",
      display: "flex",
      alignItems: "center",
    },
  },
  kbtley: {
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
  pjiobm: {
    maxWidth: "md",
    disableGutters: false,
    fixed: false,
    css: { textAlign: "center" },
  },
  ivembl: {
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
  qcmmqx: {
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
  dezvyf: {
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
  pidqzc: {
    mode: "onSubmit",
    css: {
      width: "420px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  dcvwdy: {
    inputName: "email",
    color: "primary",
    type: "email",
    "aria-label": "email",
    placeholder: "email@example.com",
    autoFocus: false,
    disabled: false,
    fullWidth: false,
    maxRows: 1,
    minRows: 1,
    rows: 1,
    multiline: false,
    readOnly: false,
    required: true,
    size: "medium",
    css: {
      backgroundColor: "rgba(64, 77, 84, 0.05)",
      paddingLeft: "12px",
      paddingRight: "8px",
      paddingTop: "8px",
      paddingBottom: "8px",
      borderRadius: "4px",
      flexGrow: "1",
    },
  },
  rronoc: {
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
  fsvcke: {
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
