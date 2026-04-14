import React from "react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

import img from "../assets/Images/react-book-v2.png";
import { v4 as uuidv4 } from "uuid";

const AddBookForm = ({ setBookData, showDialog, setShowDialog }) => {
  function handleInputValue(e) {
    SetInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }
  const [inputValue, SetInputValue] = useState({
    title: "",
    author: "",
    genre: "",
  });

  function AddInputData(e) {
    e.preventDefault();
    if (inputValue.title === "") {
      return alert("Book Title is Required!");
    } else if (inputValue.author === "") {
      return alert("Book Author is Requird!");
    } else if (inputValue.genre === "") {
      return alert("Book Genre is Missing!");
    }
    setBookData((prev) => [
      ...prev,

      {
        id: uuidv4(),
        img: img,
        title: inputValue.title,
        author: inputValue.author,
        genure: inputValue.genre,
      },
    ]);

    SetInputValue({
      title: "",
      author: "",
      genre: "",
    });
    setShowDialog(false);
  }

return (
    <div
      className={`w-screen h-screen bg-slate-950/80 backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center transition-all duration-300 ${
        showDialog
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-[420px] bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 ${
          showDialog ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Add New Book</h2>
          <button
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            onClick={() => setShowDialog(false)}
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300">Book Title</label>
            <input
              type="text"
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="Enter book title"
              name="title"
              value={inputValue.title}
              onChange={handleInputValue}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300">Book Author</label>
            <input
              type="text"
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="Enter author name"
              name="author"
              value={inputValue.author}
              onChange={handleInputValue}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300">Book Genre</label>
            <input
              type="text"
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="Enter genre"
              name="genre"
              value={inputValue.genre}
              onChange={handleInputValue}
            />
          </div>
          <button
            className="mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-indigo-500/25"
            type="submit"
            onClick={AddInputData}
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
