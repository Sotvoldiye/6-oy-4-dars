import LiList from "./liList";
import { useState } from "react"


const UlList = ({ p }) => {
    const [clickedItem, setClickedItem] = useState(null);
    console.log(clickedItem);
  return (
    <div>
      <ul className="flex flex-wrap justify-center itmes-center gap-2">
        {p.map((products) => {
          return (
            <LiList
              key={products.id}
              products={products} 
              
            />
          );
        })}
      </ul>
      {clickedItem && (
        <div className="absolute w-100% bg-gray-200 z-10">{products.title}</div>
      )}
    </div>
  );
};

export default UlList;
