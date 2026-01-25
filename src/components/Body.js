import React from "react";
import "../index.css";

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
        <button>All Books</button>
        <button>Add Book</button>
        <button>Edit Book Details</button>
        <button>Delete Book</button>
      </div>

      {/* -------- BODY SECTION 3 -------- */}
      <div className="body-section3">
        <div className="category-column">
          {leftCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category}
              books={sampleBooks}
            />
          ))}
        </div>

        <div className="category-column">
          {rightCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category}
              books={sampleBooks}
            />
          ))}
        </div>
      </div>

    </main>
  );
};

export default Body;
