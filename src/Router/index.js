import * as PATH from "../Constants/Path";
import App from "../App";
import Revenue from "../Dasboard/Revenue";
import Subcription from "../Dasboard/Subcription";

export const routerComponents = [
  {
    path: PATH.ROUTE_PATH_HOME,
    element: <App />,
  },
  {
    path: PATH.ROUTE_PATH_REVENUE,
    element: <Revenue />,
  },
  {
    path: PATH.ROUTE_PATH_SUBSCRIPTION,
    element: <Subcription />,
  },
];
