import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import "../index.css";

const categories = [
  "Fiction",
  "Drama",
  "Autobiography",
  "Biography",
  "History",
  "Poetry",
  "Stories",
  "Mystery & Thriller",
  "Science Fiction",
  "Educational",
  "Personal Development",
  "Magazines & Journals",
];

const AllBooks = () => {

  const { mode } = useParams();
  const location = useLocation();

  const [openCategory, setOpenCategory] = useState(null);

  /* Delete modal */
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  /* Edit modal */
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedBook, setSelectedBook] = useState(null);

  const categoryRefs = useRef({});

  /* Auto scroll */
  useEffect(() => {
    if (location.state?.category) {

      const selectedCategory = location.state.category;

      setOpenCategory(selectedCategory);

      setTimeout(() => {
        categoryRefs.current[selectedCategory]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    }
  }, [location]);

  /* Accordion toggle */
  const toggleCategory = (category) => {
    setOpenCategory(prev =>
      prev === category ? null : category
    );
  };

  /* Delete */
  const handleDeleteClick = (id) => {
    setSelectedBook(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log("Deleted:", selectedBook);

    setShowDeleteModal(false);
    setSelectedBook(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedBook(null);
  };

  /* Edit */
  const handleEditClick = (id) => {
    setSelectedBook(id);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedBook(null);
  };

  const saveEdit = () => {
    console.log("Saved:", selectedBook);

    setShowEditModal(false);
    setSelectedBook(null);
  };

  return (
    <div className="all-books-page">

      {/* Page Heading */}
      <h2 className="all-books-heading">
        {mode === "edit" && "Edit Books"}
        {mode === "delete" && "Delete Books"}
        {mode === "view" && "All Books"}
      </h2>

      {/* ---------- BOOK CATEGORIES ---------- */}
      {categories.map((category) => (
        <div
          key={category}
          className="accordion-card"
          ref={(el) => (categoryRefs.current[category] = el)}
        >

          {/* Category Title */}
          <div
            className="accordion-title"
            onClick={() => toggleCategory(category)}
          >
            {category}
          </div>

          {/* Books */}
          {openCategory === category && (

            <div className="accordion-content">

              {Array.from({ length: 20 }).map((_, index) => (

                <div className="book-strip" key={index}>

                  <div className="book-cover"></div>

                  <div className="book-info">

                    <div className="book-title">
                      Book Title
                    </div>

                    <div className="book-meta">
                      By – Author, Publisher (DD/MM/YYYY)
                    </div>

                    <div className="book-description">
                      Book description goes here...
                    </div>

                  </div>

                  {/* EDIT BUTTON */}
                  {mode === "edit" && (
                    <button
                      className="book-action-btn edit-btn"
                      onClick={() => handleEditClick(index)}
                    >
                      Edit
                    </button>
                  )}


                  {/* DELETE BUTTON */}
                  {mode === "delete" && (
                    <button
                      className="book-action-btn delete-btn"
                      onClick={() => handleDeleteClick(index)}
                    >
                      Delete
                    </button>
                  )}

                </div>

              ))}

            </div>

          )}

        </div>
      ))}

      {/* ---------- DELETE MODAL ---------- */}
      {showDeleteModal && (

        <div className="modal-overlay">

          <div className="delete-modal">

            <h3>Confirm Deletion</h3>

            <p>
              Are you sure you want to delete this book from the store?
            </p>

            <div className="modal-buttons">

              <button
                className="modal-btn cancel-btn"
                onClick={cancelDelete}
              >
                No
              </button>

              <button
                className="modal-btn confirm-btn"
                onClick={confirmDelete}
              >
                Yes, Delete
              </button>

            </div>

          </div>

        </div>

      )}

      {/* ---------- EDIT MODAL ---------- */}
      {showEditModal && (

        <div className="modal-overlay">

          <div className="edit-modal">

            {/* LEFT */}
            <div className="edit-left">

              <div className="edit-cover"></div>

              <button className="change-cover-btn">
                Change Book Cover
              </button>

            </div>

            {/* RIGHT */}
            <div className="edit-right">

              <input type="text" placeholder="Book Title" />

              <input type="text" placeholder="Author Name" />

              <input type="text" placeholder="Publisher Name" />

              <input type="date" />

              <textarea
                placeholder="Book Description"
                rows="3"
              ></textarea>


              <div className="edit-actions">

                <button
                  className="discard-btn"
                  onClick={closeEditModal}
                >
                  Discard
                </button>

                <button
                  className="save-btn"
                  onClick={saveEdit}
                >
                  Save
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default AllBooks;
