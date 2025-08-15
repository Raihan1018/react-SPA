import Blogs from "./components/Blogs";
import Header from "./components/Header";
import BookMarks from "./components/BookMarks";
import { useState } from "react";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time, id) => {
    setReadingTime(readingTime + time);
    // remove from book mark
    const remainingBookMark = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMark);
  };

  return (
    <div className="container mx-auto max-w-screen-lg">
      <Header />
      <div className="divider"></div>
      <main className="md:flex">
        <Blogs
          handleReadingTime={handleReadingTime}
          handleAddToBookmark={handleAddToBookmark}
        />
        <BookMarks readingTime={readingTime} bookmarks={bookmarks} />
      </main>
    </div>
  );
};

export default App;
