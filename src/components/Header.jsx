import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center container mx-auto max-w-screen-lg my-4">
      <h2 className="text-3xl">Knowledge Cafe</h2>

      <img
        className="rounded-full w-[80px]"
        src="https://randomuser.me/api/portraits/women/79.jpg"
        alt="Profile Image"
      />
    </header>
  );
};

export default Header;
