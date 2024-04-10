import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home.js";
import Table from "./components/pages/Table/Table.js";
import NotFound from "./components/pages/NotFound/NtFound.js";
import Footer from "./components/pages/views/Footer/Footer.js";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:tableId" element={<Table />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
