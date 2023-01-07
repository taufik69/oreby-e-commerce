import React from "react";
import Rootlayout from "./Component/layout/Rootlayout";
import Shop from "./pages/Shop";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/product" element={<Shop />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
