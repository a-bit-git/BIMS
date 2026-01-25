import React from "react";
import { useParams } from "react-router-dom";
import "../index.css";

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div className="category-page">
      {/* Category strap */}
      <div className="category-page-title">
        {categoryName}
      </div>

      {/* Book list */}
      {/* <div className="category-book-list"> */}
      <div className="category-book-grid">
        {Array.from({ length: 20 }).map((_, index) => (
          <div className="book-strip" key={index}>
            <div className="book-cover"></div>

            <div className="book-info">
              <div className="book-title">Book Title</div>
              <div className="book-meta">
                  By – Author Name, Published by – Publisher Name (DD/MM/YYYY)
              </div>
              <div className="book-description">
                Short overview of the book content goes here.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
