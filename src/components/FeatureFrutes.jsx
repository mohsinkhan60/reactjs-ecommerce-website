import ProductCard from "./ProductCard"
const data = [
   {id: 0,  img: "./images/imag3.webp", name: "Dried Mango", price: "$500"},
   {id: 1,  img: "./images/imag5.webp", name: "Crunchy Chips", price: "$332"},
   {id: 2,  img: "./images/imag4.webp", name: "Jewel Cranbarries", price: "$200"},
   {id: 3,  img: "./images/imag5.webp", name: "Almond Almonic", price: "$100"},
]

export const FeatureFrutes = () => {
  return (
    <div className="container pt-10 ">
      <div className="lg:flex justify-between items-center mx-44">
         <div className="mr-20">
            <h3 className="font-medium text-2xl ">Fruites & Vegetable</h3>
            <p className="text-gray-600 mt-2">Buy farm fresh fruites and vegetables online at the best prices.</p>
         </div>
         <div className="space-x-4 mt-8 lg:mt-0 ml-20">
            <button className="feature-btn">Fruits</button>
            <button className="text-gray-500 hover:text-accent">Vegetables</button>
            <button className="text-gray-500 hover:text-accent">Bread & Bakery</button>
         </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-8 gap-2 mx-36">
         <div>
            <img className="w-full h-full object-cover" src="./images/imag1.webp" alt="banner" />
         </div>
         {data.map((el) => (
             <ProductCard key={el.id} {...el} />
         ))}
      </div>
    </div>
  )
}
export default FeatureFrutes