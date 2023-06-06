import Stack from "react-bootstrap/Stack";

export const Banner = () => {
  return (
    <Stack className="jumbotron" gap={4}>
      <h1>GitHub Explorer</h1>
      <h2 className="fs-4">
        A tool to view public GitHub repositories by Organisation or Username.
      </h2>
      <hr />
    </Stack>
  );
};
