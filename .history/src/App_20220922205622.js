import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Index from "./pages";

function App() {
  return (<>
  <GlobalStyle/>
  <BrowserRouter>
  <Navbar/>
    <GlobalContainer>
    <Routes>
      <Route path="/" element={<Index />}>
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Route>
    </Routes>
    </GlobalContainer>
  </BrowserRouter></>)
};

export default App;

const GlobalContainer = styled.div`
display: flex;
justify-content: center;
`
