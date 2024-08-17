import Pratica from "../components/Praticas";
import Calculdadora from "../components/calculadora/Calculator";
import Parent from "../views/Parent";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Pratica />,
  },
  {
    path: "/calculadora",
    element: <Calculdadora />,
  },
  {
    path: "/navigation-example",
    element: <Parent />,
  },
]);
