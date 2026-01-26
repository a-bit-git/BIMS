import React from "react";
import "../index.css";

const BookModal = ({
  show,
  onClose,
  onSave,
  coverButtonText,
}) => {

  if (!show) return null;

  return (
    <div className="modal-overlay">

      <div className="edit-modal">

        {/* LEFT */}
        <div className="edit-left">

          <div className="edit-cover"></div>

          <button className="change-cover-btn">
            {coverButtonText}
          </button>

          <label className="category-label">
            Select Book Category ➤
          </label>

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

          <div className="category-select-wrapper">

            <select className="category-dropdown">

              <option value="">-- Select Category --</option>

              <option>Fiction</option>
              <option>Drama</option>
              <option>Autobiography</option>
              <option>Biography</option>
              <option>History</option>
              <option>Poetry</option>
              <option>Stories</option>
              <option>Mystery & Thriller</option>
              <option>Science Fiction</option>
              <option>Educational</option>
              <option>Personal Development</option>
              <option>Magazines & Journals</option>

            </select>

          </div>

          <div className="edit-actions">

            <button
              className="discard-btn"
              onClick={onClose}
            >
              Discard
            </button>

            <button
              className="save-btn"
              onClick={onSave}
            >
              Save
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookModal;
