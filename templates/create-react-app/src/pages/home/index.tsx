import React from "react";
import { Footer, Home, ModalContent } from "@/library";
import { Dialog } from "@mui/material";
import { useCallback, useState } from "react";
import { useColorMode } from "@repleek/mui";

type Values = {
  email: string;
};

const HomePage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Values>({ email: "" });

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback((values: Values) => {
    setValues(values);
    setOpen(true);
  }, []);

  const { mode } = useColorMode();
  console.log("mode: ", mode);

  return (
    <>
      <Home
        waitingForm={{
          defaultValues: values,
          onSubmit,
        }}
      />
      <Footer />
      <Dialog open={open} onClose={onClose}>
        <ModalContent email={{ email: values.email }} />
      </Dialog>
    </>
  );
};

export default HomePage;
