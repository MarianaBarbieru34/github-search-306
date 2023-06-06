import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";

export const SearchForm = ({ setUrl }) => {
  const [mode, setMode] = useState("organisation");
  const [searchTerm, setSearchTerm] = useState("");

  const handleButtonGroupClick = ({ currentTarget }) => {
    setSearchTerm("");
    setMode(currentTarget.name);
  };

  const handleOnChange = ({ currentTarget }) => {
    setSearchTerm(currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url =
      mode === "organisation"
        ? `https://api.github.com/orgs/${searchTerm}/repos`
        : `https://api.github.com/users/${searchTerm}/repos`;

    setUrl(url);
  };

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <Stack gap={3}>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            name="organisation"
            onClick={handleButtonGroupClick}
          >
            Search by organisation
          </Button>
          <Button
            variant="secondary"
            name="username"
            onClick={handleButtonGroupClick}
          >
            Search by username
          </Button>
        </ButtonGroup>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder={`Enter ${mode}`}
            value={searchTerm}
            onChange={handleOnChange}
          />
          <Form.Text className="text-danger">
            Please enter a valid organisation
          </Form.Text>
        </Form.Group>

        <Button variant="success" type="submit">
          Search
        </Button>
      </Stack>
    </Form>
  );
};
