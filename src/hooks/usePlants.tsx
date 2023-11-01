import { useQuery } from "@tanstack/react-query";
// sk-5C5V653f85ba53df42731
function usePlants() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(import.meta.env);
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
