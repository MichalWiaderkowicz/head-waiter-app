import { useNavigate, useParams } from "react-router-dom";
import TableForm from "../../features/TableForm/TableForm";
import { useDispatch, useSelector } from "react-redux";
import { editTableRequest, getTableById } from "../../../redux/tablesRedux";

const Table = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tableId } = useParams();
  const editedTable = useSelector((state) => getTableById(state, tableId));

  const handleSubmit = (table) => {
    dispatch(editTableRequest(table));
    navigate("/");
  };
  return (
    <div>
      <h1>Table {tableId}</h1>
      <TableForm action={handleSubmit} tableId={tableId} {...editedTable} />
    </div>
  );
};

export default Table;
