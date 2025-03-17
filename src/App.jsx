import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import UlList from "./components/list";
import { Atom } from "react-loading-indicators";
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
    return<div className="flex justify-center items-center min-h-screen">
    <Atom color="#2e4e2e" size="medium" text="" textColor="#a8a6a6" />
</div>;
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
