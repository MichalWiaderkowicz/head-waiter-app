import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";

const Home = () => {
  const tables = useSelector(getAllTables);
  return (
    <div>
      <h2>All tables</h2>
    </div>
  );
};

export default Home;
