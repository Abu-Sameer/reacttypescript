// import { productApi } from "./Redux/Store/futures/Apisplice";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { Provider } from "react-redux";
// import Add from "./Redux/Comps/Add";
// import List from "./Redux/Comps/List";
// import { store } from "./Redux/Store/futures/Store";
// import { RouterProvider } from "react-router-dom";
// import { routes } from "./Redux/NewRedux/Router";
import Getpost from "./Redux/Getpost/Getpost";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { jsonServerApi } from "./Redux/Getpost/Slice";

export default function App() {
  return (
    // <div className="">
    <ApiProvider api={jsonServerApi}>
      {/* <RouterProvider router={routes} /> */}
      <Getpost />
      <div>git</div>
    </ApiProvider>

    // </div>
  );
}
