import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";

const Index = React.lazy(() => import("./pages/index"));
const Dimark = React.lazy(() => import("./pages/dimark"));
const Goldplace = React.lazy(() => import("./pages/goldplace"));

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loader color={"#161616"} />}>
                <Index />
              </React.Suspense>
            }
          />
          <Route
            path="/dimarkit"
            element={
              <React.Suspense fallback={<Loader color={"#F05A28"} />}>
                <Dimark />
              </React.Suspense>
            }
          />
          <Route path="/ld" element={<Loader color={"#F05A28"} />} />
          <Route
            path="/goldplace"
            element={
              <React.Suspense fallback={<Loader color={"#FFE352"} />}>
                <Goldplace />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
