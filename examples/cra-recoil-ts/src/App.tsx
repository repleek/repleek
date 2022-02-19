import "./assets/styles.css";
import { RecoilRoot } from "recoil";
import { Routes, Route, useNavigate } from "react-router-dom";
import { RouteProvider } from "@billers/library";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import Nav from "./components/layout/Nav";
import ErrorBoundary from "components/shared/ErrorBoundary";

const App = () => {
  const push = useNavigate();
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <RouteProvider push={push}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
          </Routes>
        </RouteProvider>
      </RecoilRoot>
    </ErrorBoundary>
  );
};

export default App;
