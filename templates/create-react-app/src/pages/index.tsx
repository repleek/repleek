import { ReactElement } from "react";
import Home from "./home";

const pages: { path: string; page: ReactElement }[] = [
  {
    path: "/",
    page: <Home />,
  },
];

export default pages;
