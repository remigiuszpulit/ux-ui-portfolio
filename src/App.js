import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import AnimationWrapper from "./components/AnimationWrapper";
import GlobeWorker from "./pages/globeworker";
import "@fontsource/kanit";
import "@fontsource/cabin";

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
              <AnimationWrapper
                key={"index"}
                loaderKey={"indexLoader"}
                color={"#161616"}
              >
                <Index />
              </AnimationWrapper>
            }
          />
          <Route
            path="/dimarkit"
            element={
              <AnimationWrapper
                key={"dimark"}
                loaderKey={"dimarkloader"}
                color={"#F05A28"}
              >
                <Dimark />
              </AnimationWrapper>
            }
          />
          <Route
            path="/goldplace"
            element={
              <AnimationWrapper
                key={"dimark"}
                loaderKey={"dimarkloader"}
                color={"#FFE352"}
              >
                <Goldplace />
              </AnimationWrapper>
            }
          />
          <Route
            path="/globworker"
            element={
              <AnimationWrapper
                key={"globworker"}
                loaderKey={"globworkerLoader"}
                color={"#009395"}
              >
                <GlobeWorker />
              </AnimationWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
