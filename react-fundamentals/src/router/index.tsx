import Pratica from "../components/Praticas";
import Calculdadora from "../components/calculadora/Calculadora";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Pratica />
  },
  {
    path: "/calculadora",
    element: <Calculdadora />
  }
]);
