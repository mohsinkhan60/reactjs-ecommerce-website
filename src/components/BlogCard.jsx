/* eslint-disable react/prop-types */

export const BlogCard = ({ img, title, date, comment }) => {
  return (
   //  <div className="border border-gray-300 hover:border-gray-500 hover:scale-105 transition-transform rounded-lg cursor-pointer  ">
      <div className="space-y-4">
        <img
          className="rounded-lg hover:scale-105 transition-transform"
          src={img}
          alt="img"
        />
        <div className="text-accent  font-medium">
          <span>{date}</span>
          <br />
          <span>{comment} comments</span>
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
  );
};
export default BlogCard;
