// import { productApi } from "./Redux/Store/futures/Apisplice";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { Provider } from "react-redux";
// import Add from "./Redux/Comps/Add";
// import List from "./Redux/Comps/List";
// import { store } from "./Redux/Store/futures/Store";
// import { RouterProvider } from "react-router-dom";
// import { routes } from "./Redux/NewRedux/Router";
import Home from "./bComp/home/Home";
import Text from "./texting/Text";

export default function App() {
  return (
    <div className="">
      {/* <RouterProvider router={routes} /> */}
      <Home />
      <Text />
    </div>
  );
}
