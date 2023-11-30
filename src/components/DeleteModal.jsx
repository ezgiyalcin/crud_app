const DeleteModal = ({ handleDelete, setShowDeleteModal }) => {
  return (
    <div className="delete-modal">
      <div className="modal-inner shadow">
        <h5>Do you want to delete?</h5>
        <button
          className=" btn btn-warning"
          onClick={() => setShowDeleteModal(false)}
        >
          Exit
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
