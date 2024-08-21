import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="container pt-10 flex justify-around items-center">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
         <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
            <img className="w-full h-full object-cover rounded-lg" src="./images/img1.webp" alt="hero img" />
            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
               <p className="text-2xl hidden sm:block">100%  Orignal Dry Fruites</p>
               <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">Dried Fruites Best Quality</h2>
               <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
               <div className="font-medium text-red-500 text-2xl sm:text-4xl sm:pb-8 pb-4">
                  $18.99
               </div>
               <div className="bg-accentDark hover:bg-accent text-white p-2 flex rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:p-6 sm:py-3 cursor-pointer">
                  Shop Now<FaArrowRight />   
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
export default Hero