import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
  const {
    id,
    author_img,
    author_name,
    cover_img,
    hash_tag,
    post_date,
    reading_time,
    title,
  } = blog;
  return (
    <div className="p-5">
      <img
        className="rounded-md w-full"
        src={cover_img}
        alt={`cover image of ${title}`}
      />

      <div className="flex justify-between my-5">
        <div className="flex items-center space-x-3">
          <img className="rounded-full w-[60px]" src={author_img} alt="" />
          <div>
            <h3>{author_name}</h3>
            <h5>{post_date}</h5>
          </div>
        </div>
        <div>
          <span className="flex items-center">
            {reading_time} min read
            <CiBookmark
              onClick={() => handleAddToBookmark(blog)}
              className="text-xl ml-2 text-gray-400 cursor-pointer hover:scale-125 transition-all duration-150"
            />
          </span>
        </div>
      </div>
      {/* title */}
      <h2 className="text-3xl">{title}</h2>
      <p className="space-x-2 text-gray-400">
        {hash_tag.map((hash, index) => (
          <span key={index}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <div>
        <button
          onClick={() => handleReadingTime(reading_time, id)}
          className="hover:text-purple-700 transition-all duration-150 text-purple-500 text-xl underline"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Blog;
