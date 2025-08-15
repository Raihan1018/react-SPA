import React from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import BookMarks from "./components/BookMarks";

const App = () => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <Header />
      <div className="divider"></div>
      <main className="md:flex">
        <Blogs />
        <BookMarks/>
      </main>
    </div>
  );
};

export default App;
