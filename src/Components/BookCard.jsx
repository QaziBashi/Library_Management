import React from "react";
import { useState } from "react";
import img from "../assets/Images/react-book-v2.png";
import AddBookForm from "./AddBookForm";
import { v4 as uuidv4 } from "uuid";
import { FaRegHeart, FaHeart, FaTrash } from "react-icons/fa";

import { useRef } from "react";
const BookCard = ({
  showDialog,
  setShowDialog,
  searchBook,
  favBookId,
  toggleBook,
  showFavBook,
}) => {
  const [BookData, setBookData] = useState([
    {
      id: uuidv4(),
      img: img,
      title: "React JS",
      author: "James King",
      genure: "Js Library",
    },
    {
      id: uuidv4(),
      img: img,
      title: "React JS",
      author: "James King",
      genure: "Js Library",
    },
  ]);

  function DeleteBook(id) {
    setBookData((prevBook) => {
      return prevBook.filter((book) => book.id !== id);
    });
  }

  let store = BookData.filter((book) => {
    return searchBook === ""
      ? book
      : book.title.toLowerCase().includes(searchBook);
  });

  const InputRef = useRef(null);
  const [image, setImage] = useState([]);
  const handleImgClick = () => {
    InputRef.current.click();
  };
  const handleImgChange = (event, bookId) => {
    const file = event.target.files[0];
    if (file) {
      setImage((prev) => ({
        ...prev,
        [bookId]: file,
      }));
    }
  };

  let displayBooks = showFavBook
    ? BookData.filter((book) => favBookId.includes(book.id))
    : store;

  return (
    <>
      <div className="w-full min-h-[calc(100vh-70px)] flex flex-wrap gap-6 p-6 bg-slate-950 justify-center items-start">
        {displayBooks.map((book) => (
          <div
            className="w-[220px] bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-xl hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 group"
            key={book.id}
          >
            <div className="flex justify-between items-center mb-3">
              <button
                onClick={() => toggleBook(book.id)}
                className="p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                title={favBookId.includes(book.id) ? "Remove from favorites" : "Add to favorites"}
              >
                {favBookId.includes(book.id) ? (
                  <FaHeart className="text-lg text-rose-500" />
                ) : (
                  <FaRegHeart className="text-lg text-slate-500 group-hover:text-rose-400 transition-colors" />
                )}
              </button>
              <button
                onClick={() => DeleteBook(book.id)}
                className="p-1.5 rounded-lg hover:bg-rose-500/20 text-slate-500 hover:text-rose-500 transition-colors"
                title="Delete book"
              >
                <FaTrash className="text-base" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-[160px] h-[140px] rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all"
                onClick={handleImgClick}
              >
                {image[book.id] ? (
                  <img
                    src={URL.createObjectURL(image[book.id])}
                    className="w-full h-full object-cover"
                    alt={book.title}
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={book.img}
                    alt={book.title}
                  />
                )}
                <input
                  type="file"
                  className="hidden"
                  ref={InputRef}
                  onChange={(e) => handleImgChange(e, book.id)}
                />
              </div>
              <div className="w-full text-center">
                <h3 className="text-base font-bold text-white mb-0.5 truncate">{book.title}</h3>
                <p className="text-sm text-slate-400 mb-1">{book.author}</p>
                <span className="inline-block px-2 py-0.5 text-xs font-medium text-indigo-300 bg-indigo-500/20 rounded-full">
                  {book.genure}
                </span>
              </div>
            </div>
          </div>
        ))}
        <AddBookForm
          setBookData={setBookData}
          showDialog={showDialog}
          setShowDialog={setShowDialog}
        />
      </div>
    </>
  );
};

export default BookCard;
