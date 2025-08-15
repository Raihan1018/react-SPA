import React from "react";
import Bookmark from "./Bookmark";

const BookMarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h2>Bookmarked Blog: {bookmarks.length}</h2>
      <div>
        {bookmarks.map((bookmark, index) => (
          <Bookmark key={index} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

export default BookMarks;
