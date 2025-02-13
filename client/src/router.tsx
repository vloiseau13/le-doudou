import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Connexion from "./pages/Connexion/Connexion";
import Create from "./pages/Create/Create";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Event from "./pages/Event/Event";
import HomePage from "./pages/Homepage/HomePage";
import Login from "./pages/Login/Login";
import Random from "./pages/Random/Random";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/random",
        element: <Random />,
      },
      {
        path: "/event/:id",
        element: <Event />,
        loader: ({ params }) =>
          fetch(
            `https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=id_manif%3A${params.id}`,
          ),
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
