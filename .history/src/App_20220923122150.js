import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Index from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Index />}>
            {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
