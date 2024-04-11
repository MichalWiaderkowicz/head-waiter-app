import { Row, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Tables = ({ tables }) => {
  return (
    <Row xs={1} sm={2} md={3}>
      {tables.map((table) => (
        <Card key={table.id} style={{ width: "100%" }}>
          <Card.Body className="d-flex align-items-center">
            <Card.Title>
              <strong>Table {table.id}</strong>
            </Card.Title>
            <Card.Text>
              <span>
                <strong>Status: </strong>
                {table.status}
              </span>
            </Card.Text>
            <Button
              className="text-end"
              variant="primary"
              as={NavLink}
              to={"/table/" + table.id}
            >
              Show more
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};

export default Tables;
