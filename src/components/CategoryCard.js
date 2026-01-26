import React from "react";

const CategoryCard = ({ title, onSeeMore }) => {
  return (
    <div className="category-card">

      {/* Category heading strap */}
      <div className="category-title">{title}</div>

      {/* 3 preview book straps */}
      <div className="category-books">
        {[1, 2, 3].map((_, index) => (
          <div className="book-strip" key={index}>

            <div className="book-cover"></div>

            <div className="book-info">
              <div className="book-title">Book Title, By – Author Name</div>
              <div className="book-meta">Published by – Publisher Name (DD/MM/YYYY)</div>
              <div className="book-description">Book description goes here</div>
            </div>

          </div>
        ))}
      </div>

      {/* See More Button */}
      <button
        className="see-more-btn"
        onClick={() => onSeeMore(title)}
      >
        See More
      </button>

    </div>
  );
};

export default CategoryCard;
