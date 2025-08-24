import React, { useEffect, useState } from 'react';

function FetchBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=harry+potter')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.docs);
      });
  }, []);

  return (
    <div className="p-6 mx-auto">
      <h2 className="text-2xl font-bold mb-4">📚 Book Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.slice(0, 12).map((book, index) => {
          const coverId = book.cover_i;
          const imageUrl = coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
            : 'https://via.placeholder.com/150x200?text=No+Cover';

          return (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={imageUrl} alt={book.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                <p className="text-gray-600 text-sm">
                  {book.author_name?.[0] || 'Unknown Author'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FetchBooks;
