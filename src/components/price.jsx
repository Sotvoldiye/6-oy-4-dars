
const Price =({products})=>{
    return(
        <div className="flex gap-1">
        <button className="bg-red-400 px-2 py-1 rounded-2xl text-white">
          <del>{products.price}</del>
        </button>
        <button className="bg-blue-400 px-2 py-1 rounded-2xl text-white">
          {(
            (products.price - ((products.price /100) * products.discountPercentage)).toFixed(2)
           
          )}
        </button>
      </div>
    )
}

export default Price