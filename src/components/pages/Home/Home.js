import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import Tables from "../../features/Tables/Tables";
import Spinner from "react-bootstrap/Spinner";

const Home = () => {
  const tables = useSelector(getAllTables);
  return (
    <div>
      <h2>All tables</h2>
      {tables.length === 0 ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Tables tables={tables} />
      )}
    </div>
  );
};

export default Home;
