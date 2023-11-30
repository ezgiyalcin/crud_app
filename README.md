## Book Lister App

This React application allows users to manage a list of books, including functionalities such as adding, editing, and deleting books. The user interface is designed to be simple and intuitive.

### Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Components](#components)
- [License](#license)

### Features

- **Add Book:** Users can add a book by entering its name, and the app validates the input to ensure a book name is provided.
- **Delete Book:** Each book entry has a "Delete" button that opens a confirmation modal before deleting the selected book.
- **Edit Book:** Users can edit the name of a book using the "Edit" button, which opens a modal for changing the book's name.
- **Toggle Read Status:** Each book entry has a "Read" button that toggles the read status, visually indicating whether a book has been read.

### Usage

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the app with `npm start`.
5. Open the app in your browser (default: http://localhost:3000).

### Components

#### `App.js`

This is the main component that manages the state of the book list, handles user input, and renders the BookCard component.

#### `BookCard.jsx`

The BookCard component renders an individual book entry, providing options to delete, edit, and toggle the read status of the book.

#### `EditModal.jsx`

The EditModal component is a reusable modal that allows users to edit the name of a book before saving the changes.

#### `DeleteModal.jsx`

The DeleteModal component is a reusable modal that confirms the user's intention to delete a book before proceeding.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to explore, modify, and use the code as per the terms of the license. If you have any suggestions or improvements, please contribute or open an issue.

Thank you for using and celebrating the 1-year anniversary of this project! 📚🎉
