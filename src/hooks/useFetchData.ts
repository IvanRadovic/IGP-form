import { useState, useEffect } from "react";

type FetchFunction<T> = (
  onSuccess: (data: T) => void,
  onError: (error: any) => void,
) => void;

/**
 * @hook useFetchData
 * @description Fetch data from an API and return the data, loading state and error state of the request
 * @interface FetchFunction - Interface for useFetchData hook
 * @param fetchFunction - Function that fetches the data from the API
 * @param page - Page number to fetch
 * @returns Object with the data, loading state and error state
 * @example
 * const { data, loading, error } = useFetchData(getGames, 1);
 * if (loading) return <p>Loading...</p>;
 * if (error) return <p>Error: {error.message}</p>;
 * return <div>{data}</div>;
 */

export const useFetchData = <T>(fetchFunction: FetchFunction<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchFunction(
      (response) => {
        setData(response);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      },
    );
  }, [fetchFunction]);

  return { data, loading, error };
};
