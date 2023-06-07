import Alert from "react-bootstrap/Alert";

export const ErrorBanner = ({ message }) => {
  return <Alert variant="danger">{message}</Alert>;
};
