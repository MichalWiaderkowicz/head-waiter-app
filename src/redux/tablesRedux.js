//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);
// actions

const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const EDIT_TABLE = createActionName("EDIT_TABLE");
// action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });

export const editTableRequest = (newTable) => {
  const id = newTable.tableId;
  return (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTable),
    };
    fetch(`http://localhost:3131/tables/${id}`, options).then(() =>
      dispatch(editTable(newTable))
    );
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];

    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.tableId
          ? { ...table, ...action.payload }
          : table
      );

    default:
      return statePart;
  }
};

export default tablesReducer;
