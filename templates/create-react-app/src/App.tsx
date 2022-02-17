import "./assets/styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { RouteProvider } from "@billers/library";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  const push = useNavigate();

  return (
    <RouteProvider push={push}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </RouteProvider>
  );
};

export default App;
