import React from "react";

const Blog = ({ blog }) => {
  const {
    author_img,
    author_name,
    cover_img,
    hash_tag,
    post_date,
    reading_time,
    title,
  } = blog;
  console.log(blog);
  return (
    <div>
      <img
        className="rounded-md m-5"
        src={cover_img}
        alt={`cover image of ${title}`}
      />
    </div>
  );
};

export default Blog;
