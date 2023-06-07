import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import axios from "axios";

import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { Repos } from "./components/Repos";
import { useEffect, useState } from "react";
import { ErrorBanner } from "./components/ErrorBanner";
import { LoadingSpinner } from "./components/LoadingSpinner";

export const App = () => {
  const [url, setUrl] = useState("");
  const [repos, setRepos] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          setRepos();
          setIsLoading(true);
          const { data } = await axios.get(url);
          setIsLoading(false);
          setRepos(data);
        } catch (error) {
          console.log(`[ERROR]: Failed to fetch data | ${error.message}`);
          setIsLoading(false);
          setError("Oops, something went wrong. Please try again later.");
        }
      };

      fetchData();
    }
  }, [url]);

  return (
    <Container className="">
      <Stack gap={3}>
        <Banner />
        <SearchForm setUrl={setUrl} />
        {isLoading && <LoadingSpinner />}
        {error && <ErrorBanner message={error} />}
        {repos && !error && <Repos repos={repos} />}
      </Stack>
    </Container>
  );
};
