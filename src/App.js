import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home.js";
import Table from "./components/pages/Table/Table.js";
import NotFound from "./components/pages/NotFound/NotFound.js";
import Footer from "./components/pages/views/Footer/Footer.js";
import Header from "./components/pages/views/Header/Header.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
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
