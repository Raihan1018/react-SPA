import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <h1 className="bg-indigo-700 p-2 text-xl my-5 rounded-md">{title}</h1>
    </div>
  );
};

export default Bookmark;
