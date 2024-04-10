import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import Tables from "../../features/Tables/Tables";

const Home = () => {
  const tables = useSelector(getAllTables);
  return (
    <div>
      <h2>All tables</h2>
      <Tables tables={tables} />
    </div>
  );
};

export default Home;
