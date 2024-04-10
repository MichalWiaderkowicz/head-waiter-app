import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home.js";
import Table from "./components/pages/Table/Table.js";
import NotFound from "./components/pages/NotFound/NtFound.js";

function App() {
  return (
    <main>
      <h1>Hello world</h1>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:tableId" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
