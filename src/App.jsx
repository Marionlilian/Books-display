import React, { useState } from 'react';
import BookList from './BookList';
import FetchBooks from './FetchBooks';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
  ]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = () => {
    if (!title || !author) {
      alert('Please fill out both fields');
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author
    };

    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">📚 Your Book List</h1>

        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full p-2"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border p-2 rounded w-full p-2 w-auto"
          />
          <button
            onClick={addBook}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add Book
          </button>
        </div>

        <BookList books={books} onDelete={deleteBook} />
      </div>

      <div className="p-4 bg-gray-100 mt-6">
        <FetchBooks />
      </div>
    </>
  );
}

export default App;
