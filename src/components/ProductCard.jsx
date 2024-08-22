/* eslint-disable react/prop-types */
import { AiFillStar, AiOutlineShopping, AiOutlineStar } from "react-icons/ai"


export const ProductCard = ({img, name, price}) => {
  return (
    <div className="border border-gray-300 hover:border-gray-500 hover:scale-105 transition-transform rounded-lg cursor-pointer">
      <img src={img} alt="" />

      <div className="space-y-2 relative p-4" >
         <div className="text-yellow-400 flex gap-[2px] text-[20px]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
         </div>
         <h3 className="font-medium">{name}</h3>
         <h3 className="text-2xl font-medium text-red-600">{price}</h3>
         <div className="absolute -top-4 right-1 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
            <AiOutlineShopping />   
         </div>
      </div>
    </div>
  )
}
export default ProductCard