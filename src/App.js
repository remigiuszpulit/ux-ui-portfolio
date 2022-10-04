import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Index from "./pages";
import Dimark from "./pages/dimark";
import Goldplace from "./pages/goldplace";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dimarkit" element={<Dimark />} />
          <Route path="/goldplace" element={<Goldplace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
