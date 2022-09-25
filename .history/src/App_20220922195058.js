import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from "./pages";

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Index />}>
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  );
}

export default App;
