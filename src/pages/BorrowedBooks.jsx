import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowed, setBorrowed] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleReturn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to return this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (!result.isConfirmed) return;

      fetch(`${import.meta.env.VITE_API_URL}/return-book/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success("Book returned successfully!");
            setBorrowed((prev) => prev.filter((b) => b._id !== id));
          } else {
            toast.error(data.message || "Failed to return the book.");
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    });
  };
  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      if (!user?.email) return;

      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/borrowed-books?email=${user.email}`
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Failed to fetch borrowed books");
        }

        setBorrowed(data.data);
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBorrowedBooks();
  }, [user]);

  return (
    <section className="py-5 md:py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-8 md:px-4 lg:px-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-6 text-center">
          My Borrowed Books
        </h1>
        <p className="text-sm md:text-base mb-8">
          Welcome to your Borrowed Books section. Here, you can view all the
          books you've currently borrowed from our library.
        </p>

        {borrowed.length === 0 ? (
          <p className="text-gray-600">You haven't borrowed any books yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {borrowed.map((book) => (
              <div
                key={book._id}
                className="max-w-[250px] w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    src={book.image}
                    alt={`${book.bookName} cover`}
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h1 className="text-xl font-bold text-gray-800 truncate">
                    {book.bookName}
                  </h1>
                  <div className="flex">
                    <h1 className="text-md rounded-full bg-blue-100 px-3 py-1 font-medium">
                      {book.category}
                    </h1>
                  </div>
                  <p className="text-gray-600">
                    Borrowed on:
                    {new Date(book.borrowedAt).toLocaleDateString()}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Due: {new Date(book.returnDate).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => handleReturn(book._id)}
                      className="w-full bg-blue-600 text-white text-center font-semibold py-2 rounded hover:bg-blue-800 transition duration-300"
                    >
                      Return Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BorrowedBooks;
