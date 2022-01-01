//Generate automaticaly by dbuilder
import React from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Button,
  Form,
  TextField,
  Image,
} from "@billers/library";

const Home = (props) => {
  return (
    <Box {...props["ROOT"]}>
      <Container {...props["35gAkRnwz"]}>
        <Title {...props["9hINzgY18"]} />
        <Title {...props["Wh6c1luHG"]} />
        <Text {...props["BPJkNVF1k"]} />
        <Container {...props["HiG0P2GoR"]}>
          <Button {...props["yb880Di_U"]} />
          <Button {...props["XOX1L6AHb"]} />
        </Container>
        <Container {...props["_oQ0mJZ2f"]}>
          <Title {...props["N9LEPkSAt"]} />
          <Form {...props["BME8OuxZx"]}>
            <TextField {...props["gGVeY8RR2"]} />
            <TextField {...props["5a-rzWGPG"]} />
            <Text {...props["rucNXxnnI"]} />
            <Button {...props["LanvyaRnR"]} />
          </Form>
        </Container>
        <Image {...props["0nMEunN0Z"]} />
      </Container>
    </Box>
  );
};

export default Home;

Home.defaultProps = {
  ROOT: { tag: "div", css: { paddingTop: "70px", paddingBottom: "50px" } },
  "35gAkRnwz": {
    maxWidth: "md",
    disableGutters: false,
    fixed: false,
    css: { textAlign: "center" },
  },
  "9hINzgY18": {
    variant: "h1",
    text: "Welcome to CNA template",
    gutterBottom: true,
    noWrap: false,
    css: { fontSize: "60px", fontWeight: 200 },
  },
  Wh6c1luHG: {
    variant: "h2",
    text: "Created with ❤️",
    gutterBottom: true,
    noWrap: false,
  },
  BPJkNVF1k: {
    text: "<p>Get started by editing pages/index.js</p>",
    gutterBottom: true,
    noWrap: false,
    variant: "body1",
  },
  HiG0P2GoR: {
    maxWidth: "sm",
    disableGutters: false,
    fixed: false,
    css: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },
  yb880Di_U: {
    text: "Simple mui button",
    type: "button",
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    iconStart: false,
    iconEnd: false,
  },
  XOX1L6AHb: {
    text: "I'm so big",
    type: "button",
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    size: "large",
    variant: "contained",
    color: "secondary",
    iconStart: false,
    iconEnd: false,
  },
  BME8OuxZx: { mode: "onSubmit", css: { marginTop: "16px" } },
  gGVeY8RR2: {
    inputName: "email",
    label: "Your email",
    variant: "outlined",
    color: "primary",
    type: "email",
    "aria-label": "Input Base Mui",
    placeholder: "Place holder",
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
    css: { marginBottom: "16px" },
  },
  "5a-rzWGPG": {
    inputName: "password",
    label: "Strong password",
    variant: "outlined",
    color: "primary",
    type: "password",
    "aria-label": "Input Base Mui",
    placeholder: "Place holder",
    autoFocus: false,
    disabled: false,
    fullWidth: true,
    maxRows: 1,
    minRows: 1,
    rows: 1,
    multiline: false,
    readOnly: false,
    required: false,
    size: "medium",
  },
  _oQ0mJZ2f: {
    maxWidth: "xs",
    disableGutters: false,
    fixed: false,
    css: { marginTop: "32px" },
  },
  N9LEPkSAt: {
    variant: "h2",
    text: "A simple login form 🚀",
    gutterBottom: true,
    noWrap: false,
  },
  rucNXxnnI: {
    text: "<p>Check <strong><em>your console </em></strong></p>",
    gutterBottom: true,
    noWrap: false,
    variant: "body1",
  },
  LanvyaRnR: {
    text: "Login",
    type: "submit",
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    size: "large",
    variant: "outlined",
    color: "primary",
    iconStart: false,
    iconEnd: false,
  },
  "0nMEunN0Z": {
    alt: "Image description for better SEO",
    src: "/Capture.jpg",
    dynamic: true,
    css: {
      width: "100%",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
      marginTop: "16px",
    },
  },
};
