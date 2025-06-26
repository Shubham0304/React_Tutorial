import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
    error,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const res = await Axios.get("https://catfact.ninja/fact");
      return res.data;
    },
  });

  const refetchData = () => {
    alert("Data Refetched");
    refetch();
  };

  if (error) {
    console.error("Error fetching cat fact:", error);
  }

  return { data, refetchData, isCatLoading };
};
