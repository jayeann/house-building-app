import { useQuery } from "@tanstack/react-query";

function usePlants() {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `https://perenual.com/api/species-list?key=sk-5C5V653f85ba53df42731&page=1`
      ).then((res) => res.json()),
  });
  return { isPending, error, data, refetch };
}

export default usePlants;
