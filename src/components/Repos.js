import Stack from "react-bootstrap/Stack";
import { RepoCard } from "./RepoCard";

export const Repos = ({ repos }) => {
  return (
    <Stack
      className="p-3 justify-content-between flex-wrap"
      direction="horizontal"
    >
      {repos.map((repo) => {
        return <RepoCard key={repo.id} repo={repo} />;
      })}
    </Stack>
  );
};
