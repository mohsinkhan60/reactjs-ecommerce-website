import CategoryCard from "./CategoryCard"
const data = [
  {
     id: 0,
     name: "Fresh Fruits",
     count: "10 Products",
     img: "./images/im1.webp",
  },
  {
     id: 1,
     name: "Fresh Veg",
     count: "5 Products",
     img: "./images/im2.webp",
  },
  {
     id: 2,
     name: "Canned Goods",
     count: "8 Products",
     img: "./images/im3.webp",
  },
  {
     id: 3,
     name: "Bread & Bakery",
     count: "2 Products",
     img: "./images/im4.webp",
  },
  {
     id: 4,
     name: "Fishes",
     count: "12 Products",
     img: "./images/im5.webp",
  },
  {
     id: 5,
     name: "Eggs & Dairy",
     count: "20 Products",
     img: "./images/im6.webp",
  },
  {
     id: 6,
     name: "Soft Drinks",
     count: "15 Products",
     img: "./images/im7.webp",
  },
  {
     id: 7,
     name: "Fresh Fruits",
     count: "20 Products",
     img: "./images/im1.webp",
  }
]


export const Category = () => {
  return (
    <div className="container pt-5 flex justify-around items-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  )
}
export default Category