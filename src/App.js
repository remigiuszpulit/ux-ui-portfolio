import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { motion, AnimatePresence } from "framer-motion";

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
                <AnimatePresence>
                  <motion.div
                    key={"index"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Index />
                  </motion.div>
                </AnimatePresence>
              </React.Suspense>
            }
          />
          <Route
            path="/dimarkit"
            element={
              <React.Suspense fallback={<Loader color={"#F05A28"} />}>
                <AnimatePresence>
                  <motion.div
                    key={"dimark"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Dimark />
                  </motion.div>
                </AnimatePresence>
              </React.Suspense>
            }
          />
          <Route path="/ld" element={<Loader color={"#F05A28"} />} />
          <Route
            path="/goldplace"
            element={
              <React.Suspense fallback={<Loader color={"#FFE352"} />}>
                <AnimatePresence>
                  <motion.div
                    key={"goldplace"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Goldplace />
                  </motion.div>
                </AnimatePresence>
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
