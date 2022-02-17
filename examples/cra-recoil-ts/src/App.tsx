import "./assets/styles.css";
import { RecoilRoot } from "recoil";
import { Routes, Route, useNavigate } from "react-router-dom";
import { RouteProvider } from "@billers/library";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Nav from "./components/Nav";

const App = () => {
  const push = useNavigate();
  return (
    <RecoilRoot>
      <RouteProvider push={push}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </RouteProvider>
    </RecoilRoot>
  );
};

export default App;
