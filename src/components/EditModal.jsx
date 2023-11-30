import React from "react";

function EditModal({
  setShowEditModal,
  editItem,
  setEditItem,
  handleEditBook,
}) {
  return (
    <div className="delete-modal">
      <div className="modal-inner shadow">
        <h5>Change the Book Name</h5>
        <input
          value={editItem.title}
          onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
          type="text"
          className="form-control"
        />
        <div className="d-flex justify-content-around">
          <button className="btn btn-success" onClick={handleEditBook}>
            Save
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setShowEditModal(false)}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
