import { useQuery } from "@tanstack/react-query";
function usePlants() {
  // @ts-ignore
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://perenual.com/api/species-list?key=${API_KEY}&page=1`).then(
        (res) => res.json()
      ),
  });
  return { isPending, error, data, refetch };
}

export default usePlants;
