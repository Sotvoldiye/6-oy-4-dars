import { use } from "react"
import { useState } from "react"
import Price from "./price"
import Modal from "./modal"
const LiList = ({products})=>{
const [inModal, setInmodal] = useState(false)
  if(setInmodal){
    
  }
    return(
      <div className="">
          <li  onClick={()=>setInmodal(true)
           }>
        <img src={products.thumbnail} alt="" />
        <h3>{products.title}</h3>
        <div className="flex gap-2 justify-between itmes-center">
          <Price products={products} setInmodal={setInmodal}/>
          <button className="fa-solid fa-cart-shopping bg-red-500 text-white px-2 rounded-2xl"></button>
        </div>
      </li>
           
             {inModal &&(
               <Modal products={products} setInmodal={setInmodal} inModal={inModal}/>
            )}
              
            
           

      </div>
    )
}


export default LiList