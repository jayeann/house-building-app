import { useQuery } from "@tanstack/react-query";
import useIsObjectEmpty from "./useIsObjectEmpty";
function usePlants(storedValue: any) {
  // @ts-ignore
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://perenual.com/api/species-list?key=${API_KEY}&page=1`).then(
        (res) => res.json()
      ),
    // enabled: useIsObjectEmpty(storedValue),
  });
  return { isLoading, error, data, refetch };
}

export default usePlants;
