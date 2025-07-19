import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowed, setBorrowed] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `${import.meta.env.VITE_API_URL}/borrowed-books?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setBorrowed(data.data);
          } else {
            toast.error("Failed to fetch borrowed books");
          }
        });
    }
  }, [user]);

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Borrowed Books</h1>
        {borrowed.length === 0 ? (
          <p>You haven’t borrowed any books yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {borrowed.map((book) => (
              <div key={book._id} className="p-4 bg-white shadow rounded">
                <h2 className="text-xl font-semibold">{book.bookName}</h2>
                <p className="text-sm text-gray-600">
                  Return by: {new Date(book.returnDate).toDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  Borrowed on: {new Date(book.borrowDate).toDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BorrowedBooks;
