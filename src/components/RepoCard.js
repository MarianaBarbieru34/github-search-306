import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const RepoCard = ({ repo }) => {
  return (
    <Card style={{ width: "18rem" }} className="text-center m-3">
      <Card.Img variant="top" src={repo.owner.avatar_url} alt={repo.name} />
      <Card.Body>
        <Card.Title>{repo.name}</Card.Title>
        {repo.description && (
          <>
            <hr />
            <Card.Text>{repo.description}</Card.Text>
          </>
        )}
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button variant="dark" href={repo.html_url} target="_blank">
          <i className="fa-brands fa-github"></i>
        </Button>
      </Card.Footer>
    </Card>
  );
};
