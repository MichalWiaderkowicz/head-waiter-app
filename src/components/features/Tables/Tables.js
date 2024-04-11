import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Tables = ({ tables }) => {
  return (
    <div>
      {tables.map((table) => (
        <Card key={table.id} className="w-100">
          <Card.Body className="d-flex allign-items-center text-nowrap">
            <Card.Title>
              <strong>Table {table.id}</strong>
            </Card.Title>
            <Card.Text className="mx-3">
              <span>
                <strong>Status: </strong>
                {table.status}
              </span>
            </Card.Text>
            <div className="w-100 text-end allign-items-center">
              <Button variant="primary" as={NavLink} to={"/table/" + table.id}>
                Show more
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Tables;
