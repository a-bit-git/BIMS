import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title }) => {
  const navigate = useNavigate();

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
              <div className="book-title">Book Title</div>
              <div className="book-author">By – Author Name</div>
              <div className="book-publisher">
                Published by – Publisher Name
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More */}
      <button
        className="see-more-btn"
        onClick={() => navigate(`/category/${title}`)}
      >
        See More
      </button>
    </div>
  );
};

export default CategoryCard;

