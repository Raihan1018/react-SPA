import Blogs from "./components/Blogs";
import Header from "./components/Header";
import BookMarks from "./components/BookMarks";
import { useState } from "react";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  console.log(bookmarks)

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <div className="container mx-auto max-w-screen-lg">
      <Header />
      <div className="divider"></div>
      <main className="md:flex">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <BookMarks bookmarks={bookmarks} />
      </main>
    </div>
  );
};

export default App;
