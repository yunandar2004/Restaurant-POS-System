import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, Home, Orders } from "./pages";
import Header from "./components/shared/Header";
import FooterNav from "./components/shared/FooterNav";
import Table from "./pages/Table";

function App() {
  return (
    <section className="bg-[#1F1F1F] mx-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
