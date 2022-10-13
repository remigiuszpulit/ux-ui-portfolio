import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import AnimationWrapper from "./components/AnimationWrapper";
import GlobeWorker from "./pages/globeworker";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "@fontsource/kanit";
import "@fontsource/cabin";
import Contact from "./pages/contact";

const Index = React.lazy(() => import("./pages/index"));
const Dimark = React.lazy(() => import("./pages/dimark"));
const Goldplace = React.lazy(() => import("./pages/goldplace"));

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTOGkPjvwA-QDTXPLCa70-tPsMnClx6po",
  authDomain: "jagoda-pulit-ux-portfolio.firebaseapp.com",
  projectId: "jagoda-pulit-ux-portfolio",
  storageBucket: "jagoda-pulit-ux-portfolio.appspot.com",
  messagingSenderId: "701344753097",
  appId: "1:701344753097:web:8f5119e95d0af157f3f418",
  measurementId: "G-FZ700JPFGY",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
          <Route
            path="/contact"
            element={
              <AnimationWrapper
                key={"contact"}
                loaderKey={"contactLoader"}
                color={"#161616"}
              >
                <Contact />
              </AnimationWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
