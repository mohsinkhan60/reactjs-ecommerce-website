/* eslint-disable react/prop-types */


export const CategoryCard = ({name, count, img}) => {
  return (
    <div className="border border-gray-300 hover:border-gray-500 hover:scale-105 transition-transform rounded-lg cursor-pointer">
      <div className="flex justify-between items-center p-6">
         <div className="space-y-4">
            <h3 className="font-medium text-xl">{name}</h3>
            <p className="text-gray-500">{count}</p>
         </div>
         <img className="w-[100px]" src={img} alt="" />
      </div>
    </div>
  )
}
export default CategoryCard