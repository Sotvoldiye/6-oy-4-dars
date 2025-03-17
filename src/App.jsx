import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import UlList from "./components/list";
function App() {
  const {
    data: posts,
    error,
    isPending,
  } = useFetch("https://dummyjson.com/products");

  if (error) {
    return <h2>{error}</h2>;
  }
  if (isPending) {
    return <h2>Loading ...</h2>;
  }
  const p = posts?.products || [];
  console.log(p);
  return (
    <div>
      <h1 className="text-2xl">Posts</h1>
      <UlList p={p} />
     
    </div>
  );
}

export default App;
