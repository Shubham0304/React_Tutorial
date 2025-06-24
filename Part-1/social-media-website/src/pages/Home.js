import { useContext } from "react";
import { AppContext } from "../Forms-demo";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { userName } = useContext(AppContext);

  const { data: catData, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>This is the Home Page. User is {userName}</h1>
      <button onClick={refetch}> Update Data</button>
      <p>{catData?.fact}</p>
    </div>
  );
};
