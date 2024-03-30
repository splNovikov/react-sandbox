import { useCallback, useRef, useState } from "react";
export const useSwapi = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getUrl = useCallback(
    (search: string): string =>
      `https://swapi.dev/api/people/?search=${search}&page=1`,
    []
  );

  const abortController = useRef();

  const fetchData = useCallback(async (url: string): Promise<any> => {
    // @ts-ignore
    abortController.current?.abort();
    // @ts-ignore
    abortController.current = new AbortController();
    setIsLoading(true);
    const response = await fetch(url, {
      // @ts-ignore
      signal: abortController.current.signal,
    });
    const { results, next } = await response.json();
    setIsLoading(false);

    return { users: results, next };
  }, []);

  return {
    getUrl,
    fetchData,
    isLoading,
  };
};
