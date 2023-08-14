import React from "react";
import { RepleekProvider } from "@repleek/mui";
import pages from "@/pages";
import themes from "@/theme";
import i18n from "@/locales/i18n";
import { Route, Routes, useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const push = useNavigate();

  return (
    <RepleekProvider push={push} themes={themes} i18n={i18n}>
      <Routes>
        {pages.map(({ path, page }) => (
          <Route element={page} path={path} key={path} />
        ))}
      </Routes>
    </RepleekProvider>
  );
};

export default App;
