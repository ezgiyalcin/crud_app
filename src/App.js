import { useState } from "react";
import "./App.css";
import { v4 } from "uuid";
import BookCard from "../src/components/BookCard.jsx";
import DeleteModal from "./components/DeleteModal.jsx";
import EditModal from "./components/EditModal.jsx";
import { toast } from "react-toastify";
function App() {
  const [books, setBooks] = useState([]);
  const [bookName, setbookName] = useState();
  const [inputError, setInputError] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleChange = (e) => {
    setbookName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookName) {
      toast.warn("Please Write a Book Name!");
      return;
    }
    const newBook = {
      id: v4(),
      title: bookName,
      date: new Date().toLocaleDateString(),
      isRead: false,
    };
    setBooks([...books, newBook]);
    setbookName("");
    toast.success("Book Addedd Succesfuly!");
  };

  const handleModal = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    const filtered = books.filter((book) => book.id !== deleteId);
    setBooks(filtered);
    setShowDeleteModal(false);

    toast.error("Book Deleted Succesfuly!");
  };

  const handleRead = (book) => {
    const updatedBook = { ...book, isRead: !book.isRead };
    const index = books.findIndex((item) => item.id === book.id);
    const cloneBooks = [...books];
    cloneBooks[index] = updatedBook;
    setBooks(cloneBooks);
  };

  const HandleEditModal = (book) => {
    setEditItem(book);
    setShowEditModal(true);
  };
  const handleEditBook = () => {
    const index = books.findIndex((book) => book.id === editItem.id);
    console.log(index);
    const cloneBooks = [...books];
    cloneBooks.splice(index, 1, editItem);

    setBooks(cloneBooks);
    setShowEditModal(false);
    toast.info("Book Edited!");
  };

  return (
    <div className="App">
      <header className="bg-dark text-light py-3 fs-5 text-center">
        <p>Book Lister</p>
      </header>
      <div className="container">
        {inputError && (
          <div className="alert alert-danger mt-5">{inputError}</div>
        )}

        <form onSubmit={handleSubmit} action="" className="d-flex gap-3 mt-4">
          <input
            placeholder="Write a Book Name..."
            type="search"
            className="form-control shadow"
            onChange={handleChange}
            value={bookName}
          />

          <button className="btn btn-primary ">Add</button>
        </form>

        {books.length === 0 && <h4 className="mt-3">There is no book!</h4>}
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            handleModal={handleModal}
            handleRead={handleRead}
            HandleEditModal={HandleEditModal}
          />
        ))}
      </div>
      {showDeleteModal && (
        <DeleteModal
          handleDelete={handleDelete}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      {showEditModal && (
        <EditModal
          setShowEditModal={setShowEditModal}
          editItem={editItem}
          setEditItem={setEditItem}
          handleEditBook={handleEditBook}
        />
      )}
    </div>
  );
}

export default App;
