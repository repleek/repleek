import React from "react";
import { MuiProvider, RouteProvider } from "dbuilder-library-ts";
import pages from "@/pages";
import { theme } from "@/theme";
import { Route, Routes, useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const push = useNavigate();

  return (
    <RouteProvider push={push}>
      <MuiProvider theme={theme}>
        <Routes>
          {pages.map(({ path, page }) => (
            <Route element={page} path={path} />
          ))}
        </Routes>
      </MuiProvider>
    </RouteProvider>
  );
};

export default App;
