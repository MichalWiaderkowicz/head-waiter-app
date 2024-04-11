import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const TableForm = ({ action, tableId, ...props }) => {
  const [status, setStatus] = useState(props.status);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ tableId, status, peopleAmount, maxPeopleAmount, bill });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex align-items-center">
        <strong>Status:</strong>
        <Form.Select
          style={{ width: "220px", marginLeft: "15px" }}
          aria-label="Default select example"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Busy</option>
          <option>Free</option>
          <option>Cleaning</option>
        </Form.Select>
      </div>
      <div className="d-flex align-items-center my-2">
        <strong>People:</strong>
        <Form.Control
          className="align-items-center my-2"
          style={{ width: "50px", marginLeft: "15px" }}
          value={peopleAmount}
          onChange={(e) => setPeopleAmount(e.target.value)}
          type="text"
          placeholder="0"
        />
        <span>/</span>
        <Form.Control
          className="d-flex align-items-center my-2"
          style={{ width: "50px" }}
          value={maxPeopleAmount}
          onChange={(e) => setMaxPeopleAmount(e.target.value)}
          type="text"
          placeholder="0"
        />
      </div>
      {status === "Busy" ? (
        <div className="d-flex align-items-center my-2">
          <strong>Bill:</strong>
          <span className="mx-2">$</span>
          <Form.Control
            className="d-flex align-items-center"
            style={{ width: "50px", marginLeft: "15px" }}
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            type="text"
            placeholder="0"
          />
        </div>
      ) : (
        ""
      )}
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default TableForm;
