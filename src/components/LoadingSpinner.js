import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

export const LoadingSpinner = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};
