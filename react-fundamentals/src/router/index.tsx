import Pratica from "../components/Praticas";
import Calculdadora from "../components/calculadora/Calculator";
import Parent from "../views/Parent";
import Profile from "../views/Profile";
import Profiles from "../views/Profiles";
import NotFound from "../components/NotFoundPage";

//hooks and it's childs
import Hooks from "../views/Hooks";
import UseState from "../components/hooks/UseState";
import UseEffect from "../components/hooks/UseEffect";
import UseRef from "../components/hooks/UseRef";
import UseMemo from "../components/hooks/UseMemo";
import UseCallback from "../components/hooks/UseCallback";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Pratica />,
    errorElement: <NotFound />,
  },
  {
    path: "/calculadora",
    element: <Calculdadora />,
  },
  {
    path: "/navigation-example",
    element: <Parent />,
  },
  {
    path: "/hooks",
    element: <Hooks />,
    children: [
      {
        path: "/hooks/use-state",
        element: <UseState />,
      },
      {
        path: "/hooks/use-effect",
        element: <UseEffect />,
      },
      {
        path: "/hooks/use-ref",
        element: <UseRef />,
      },
      {
        path: "/hooks/use-memo",
        element: <UseMemo />,
      },
      {
        path: "/hooks/use-callback",
        element: <UseCallback />,
      },
    ],
  },
  {
    path: "/profiles",
    element: <Profiles />,
    children: [
      {
        path: "/profiles/:profile",
        element: <Profile />,
      },
    ],
  },
]);
