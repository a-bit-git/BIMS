import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import BookModal from "./BookModal";
import coverImage from "../utilities/bscover.png";
import captionImage from "../utilities/bscaption.png";
import gifFile from "../utilities/bsgif.gif";

import CategoryCard from "./CategoryCard";

const leftCategories = [
  "Fiction",
  "Drama",
  "Autobiography",
  "Biography",
  "History",
  "Poetry",
];

const rightCategories = [
  "Stories",
  "Mystery & Thriller",
  "Science Fiction",
  "Educational",
  "Personal Development",
  "Magazines & Journals",
];

const sampleBooks = [
  "Book One – Author",
  "Book Two – Author",
  "Book Three – Author",
];

const Body = () => {
  const navigate = useNavigate();

  /* ADD BOOK MODAL */
  const [showAddModal, setShowAddModal] = useState(false);

  const handleSeeMore = (category) => {
    navigate("/all-books", {
      state: { category },
    });
  };

  /* Add Book */
  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const saveAddBook = () => {
    console.log("New Book Added");

    setShowAddModal(false);
  };

  return (
    <main className="body-container">

      {/* -------- BODY SECTION 1 -------- */}
      <div className="body-section-wrapper">
        <div className="body-section">

          <div className="body-item">
            <img src={captionImage} alt="Book Caption" />
          </div>

          <div className="body-item">
            <img src={coverImage} alt="Book Cover" />
          </div>

          <div className="body-item">
            <img src={gifFile} alt="Bookstore Animation" />
          </div>

        </div>
      </div>

      {/* -------- BODY SECTION 2 -------- */}
      <div className="body-section2">

        <button onClick={() => navigate("/all-books/view")}>
          All Books
        </button>

        {/* ADD BOOK BUTTON */}
        <button onClick={openAddModal}>
          Add Book
        </button>

        <button onClick={() => navigate("/all-books/edit")}>
          Edit Book Details
        </button>

        <button onClick={() => navigate("/all-books/delete")}>
          Delete Book
        </button>

      </div>

      {/* -------- BODY SECTION 3 -------- */}
      <div className="body-section3">

        <div className="category-column">
          {leftCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category}
              books={sampleBooks}
              onSeeMore={handleSeeMore}
            />
          ))}
        </div>

        <div className="category-column">
          {rightCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category}
              books={sampleBooks}
              onSeeMore={handleSeeMore}
            />
          ))}
        </div>

      </div>
      <BookModal
        show={showAddModal}
        onClose={closeAddModal}
        onSave={saveAddBook}
        coverButtonText="Add Book Cover"
      />
      
    </main>
  );
};

export default Body;
