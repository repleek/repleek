import React from "react";
import { DbuilderProvider } from "dbuilder-library-ts";
import pages from "@/pages";
import { theme } from "@/theme";
import i18n from "@/locales/i18n";
import { Route, Routes, useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const push = useNavigate();

  return (
    <DbuilderProvider push={push} theme={theme} i18n={i18n}>
      <Routes>
        {pages.map(({ path, page }) => (
          <Route element={page} path={path} />
        ))}
      </Routes>
    </DbuilderProvider>
  );
};

export default App;
