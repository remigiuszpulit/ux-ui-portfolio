import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Index from "./pages";
import Dimark from "./pages/dimark";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar light={true} />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dimarkit" element={<Dimark />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
