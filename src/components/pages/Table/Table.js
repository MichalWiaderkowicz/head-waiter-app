import { useParams } from "react-router-dom";
import TableForm from "../../features/TableForm/TableForm";
const Table = () => {
  const { tableId } = useParams();
  return (
    <div>
      <h1>Table {tableId}</h1>
      <TableForm tableId={tableId} />
    </div>
  );
};

export default Table;
