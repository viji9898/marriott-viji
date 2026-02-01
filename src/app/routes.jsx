import Home from "../pages/Home";
import DeepDivesIndex from "../pages/DeepDivesIndex";
import DeepDive from "../pages/DeepDive";


  { path: "/", element: <Home /> },
  { path: "/deep-dives", element: <DeepDivesIndex /> },
  { path: "/deep-dives/:slug", element: <DeepDive /> },
];
