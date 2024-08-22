import BlogCard from "./BlogCard";

const data = [
  {
    img: "./images/imgp.webp",
    title: "Healthy Food Healthy Life",
    date: "2021-09-01",
    comment: 5,
  },
  {
    img: "./images/imgp1.webp",
    title: "Healthy Food Healthy Life",
    date: "2022-09-01",
    comment: 2,
  },
  {
    img: "./images/imgp2.webp",
    title: "Healthy Food Healthy Life",
    date: "2018-09-01",
    comment: 8,
  },
];

export const BlogSection = () => {
  return (
    <div className="container pt-16 flex px-14 object-cover">
      <div className=" justify-between items-center mx-40">
        <h2 className="font-bold text-2xl">Latest News</h2>
        <p className="text-gray-500">
          Present post in a best way to highlight the best part of your blog.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8 pb-28">
         {data.map ((el) => (
            <BlogCard key={el.data} {...el} />
         ))}
        </div>
      </div>
    </div>
  );
};
export default BlogSection;
