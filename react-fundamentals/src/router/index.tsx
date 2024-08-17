import Pratica from "../components/Praticas";
import Calculdadora from "../components/calculadora/Calculator";
import Parent from "../views/Parent";
import NotFound from "../components/NotFoundPage";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Pratica />,
    errorElement: <NotFound/>,
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
