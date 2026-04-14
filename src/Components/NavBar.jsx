import React from "react";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = ({
  setShowDialog,
  searchBook,
  setSearchBook,
  showFavBook,
  setShowFavBook,
}) => {
  return (
    <nav className="w-full bg-slate-900 h-[70px] px-8 flex items-center justify-between shadow-lg">
      <div className="text-xl font-bold text-white tracking-wide">World Library</div>
      <div className="flex items-center w-[280px] h-[40px] bg-slate-800 border border-slate-700 rounded-lg transition-all focus-within:border-indigo-500">
        <input
          type="text"
          className="border-none bg-transparent outline-none px-3 w-full text-slate-200 placeholder-slate-500"
          name="title"
          placeholder="Search books..."
          value={searchBook.toLowerCase()}
          onChange={(e) => setSearchBook(e.target.value)}
        />
        <IoSearchOutline className="text-xl text-slate-400 mr-3" />
      </div>
      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
          onClick={() => setShowFavBook(!showFavBook)}
          title="Favorites"
        >
          <RiHeartAdd2Fill className="text-2xl text-rose-500 hover:text-rose-400 transition-colors" />
        </button>
        <button
          className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-md hover:shadow-lg"
          onClick={() => setShowDialog(true)}
        >
          Add Book
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
