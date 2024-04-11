import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const TableForm = ({ action, tableId, ...props }) => {
  const [status, setStatus] = useState(props.status || "");
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || "");
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    props.maxPeopleAmount || ""
  );
  const [bill, setBill] = useState(props.bill || "");

  const handlePeopleAmountChange = (e) => {
    if (e.target.value > maxPeopleAmount) {
      setPeopleAmount(peopleAmount);
    } else setPeopleAmount(e.target.value);
  };

  const handleMaxPeopleAmountChange = (e) => {
    if (e.target.value > 10) {
      setMaxPeopleAmount(maxPeopleAmount);
    } else setMaxPeopleAmount(e.target.value);
  };

  useEffect(() => {
    if (status === "Free" || status === "Cleaning") {
      setBill(0);
      setPeopleAmount(0);
    }

    if (maxPeopleAmount >= 0 && peopleAmount > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
  }, [status, peopleAmount, maxPeopleAmount]);

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
          style={{ width: "65px", marginLeft: "15px" }}
          value={peopleAmount}
          onChange={handlePeopleAmountChange}
          type="number"
          min="0"
          max="10"
          placeholder=""
        />
        <span>/</span>
        <Form.Control
          className="d-flex align-items-center my-2"
          style={{ width: "65px" }}
          value={maxPeopleAmount}
          onChange={handleMaxPeopleAmountChange}
          type="number"
          min="0"
          max="10"
          placeholder=""
        />
      </div>
      {status === "Busy" ? (
        <div className="d-flex align-items-center my-2">
          <strong>Bill:</strong>
          <span className="mx-2">$</span>
          <Form.Control
            className="d-flex align-items-center"
            style={{ width: "65px", marginLeft: "15px" }}
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            type="text"
            placeholder=""
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
