/** Build with repleek */
// #region Import
import React from "react";

import {
  Box,
  BoxProps,
  Button,
  Container,
  Form,
  FormProps,
  InputBase,
  Typography,
} from "@repleek/mui";
// #endregion

// #region Typre Definition
type HomeProps = Partial<BoxProps> & {
  waitingForm: FormProps,
};
// #endregion

// #region HomeComponent
const Home: React.FC<HomeProps> = (props) => {
  const { waitingForm, ...rootProps } = props;

  return (
    <Box
      tag={"div"}
      css={{
        paddingBottom: "48px",
        background: "url(/images/bg-hero.jpg) center / cover no-repeat fixed",
      }}
      {...rootProps}
    >
      <Box
        tag={"div"}
        css={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Container
          maxWidth={"md"}
          disableGutters={false}
          fixed={false}
          css={{ textAlign: "center" }}
        >
          <Typography
            variant={"h1"}
            text={"Build webapp"}
            gutterBottom={false}
            noWrap={false}
            css={{
              fontSize: "78px",
              fontWeight: 700,
              color: "#00000000",
              backgroundClip: "text !important",
              background:
                "linear-gradient(130deg,       rgba(75,57,239,1) 0%, RGBA(238, 139, 96, 1) 100%)",
              "@media (max-width: 700px)": { fontSize: "40px" },
            }}
          />
          <Typography
            variant={"h1"}
            text={"faster than ever"}
            gutterBottom={false}
            noWrap={false}
            css={{
              fontSize: "75px",
              fontWeight: 700,
              "@media (max-width: 700px)": { fontSize: "40px" },
            }}
          />
          <Typography
            variant={"body1"}
            text={
              "Create beautiful UI, generate clean code, and deploy to the app stores or web in one click. Fully extensible with custom code."
            }
            gutterBottom={false}
            noWrap={false}
            css={{
              fontSize: "21px",
              marginTop: "10px",
              "@media (max-width: 700px)": { fontSize: "17px" },
            }}
          />
        </Container>
      </Box>
      <Container
        maxWidth={"md"}
        disableGutters={false}
        fixed={false}
        css={{
          marginTop: "48px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography
          variant={"h2"}
          text={"Join our waiting list"}
          gutterBottom={false}
          noWrap={false}
          css={{
            fontSize: "60px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "16px",
            "@media (max-width: 700px)": { fontSize: "40px" },
          }}
        />
        <Form
          mode={"onSubmit"}
          css={{
            width: "420px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          {...waitingForm}
        >
          <InputBase
            inputName={"email"}
            color={"primary"}
            type={"email"}
            aria-label={"email"}
            placeholder={"email@example.com"}
            autoFocus={false}
            disabled={false}
            fullWidth={false}
            maxRows={1}
            minRows={1}
            rows={1}
            multiline={false}
            readOnly={false}
            required={true}
            size={"medium"}
            css={{
              backgroundColor: "rgba(64, 77, 84, 0.05)",
              paddingLeft: "12px",
              paddingRight: "8px",
              paddingTop: "8px",
              paddingBottom: "8px",
              borderRadius: "4px",
              flexGrow: "1",
            }}
          />
          <Button
            text={"Register"}
            type={"submit"}
            disabled={false}
            disableElevation={false}
            disableFocusRipple={false}
            disableRipple={false}
            fullWidth={false}
            variant={"contained"}
            iconStart={false}
            iconEnd={false}
            css={{ marginLeft: "10px" }}
          />
        </Form>
      </Container>
    </Box>
  );
};

export default Home;
// #endregion
