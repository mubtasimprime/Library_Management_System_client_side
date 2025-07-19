import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import StarRatings from "react-star-ratings";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";

const BookDetails = () => {
  const book = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [returnDate, setReturnDate] = useState("");

  const handleBorrow = () => {
    if (!returnDate) {
      toast.error("Please select a return date");
      return;
    }

    const borrowInfo = {
      bookId: book._id,
      userName: user.displayName,
      userEmail: user.email,
      category: book.category,
      returnDate,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/borrow`, borrowInfo)
      .then((response) => {
        if (response.data.success) {
          toast.success("Book borrowed successfully!");
          document.getElementById("borrow_modal").close();
          book.quantity = Math.max(book.quantity - 1, 0);
          navigate("/");
        } else {
          toast.error("Failed to borrow the book.");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.error(error);
      });
  };

  return (
    <section className="py-10 bg-gradient-to-r from-white to-blue-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">BOOK DETAILS</h1>
        <p className="mb-8 max-w-5xl mx-auto">
          Explore our curated collection of books, featuring gripping thrillers,
          insightful historical works, and powerful dramatic classics.
        </p>
      </div>

      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900">{book.name}</h1>
            <p className="text-lg text-gray-600 mt-1">by {book.author}</p>

            <div className="flex items-center gap-4 mt-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                {book.category}
              </span>
              <span className="text-gray-700">
                {book.quantity > 0 ? (
                  <span className="text-white rounded-full bg-green-600 px-3 py-1">
                    {book.quantity} available
                  </span>
                ) : (
                  <span className="text-red-600">Out of stock</span>
                )}
              </span>
            </div>

            <div className="flex items-center mt-4">
              <StarRatings
                rating={book.rating}
                starRatedColor="#f59e0b"
                starEmptyColor="#d1d5db"
                starDimension="20px"
                starSpacing="2px"
                numberOfStars={5}
                name="rating"
              />
              <span className="ml-1 text-sm text-gray-600">
                ({book.rating})
              </span>
            </div>

            <p className="mt-4 text-gray-700 italic">{book.description}</p>

            <div className="mt-6 flex gap-3">
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded-md transition"
                onClick={() =>
                  document.getElementById("borrow_modal").showModal()
                }
                disabled={book.quantity === 0}
              >
                Borrow Book
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Synopsis</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {book.content}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="borrow_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Borrow Book</h3>
          <form method="dialog">
            <div className="mt-4">
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={user?.displayName || ""}
                readOnly
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                value={user?.email || ""}
                readOnly
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">Return Date</label>
              <input
                type="date"
                className="input input-bordered w-full"
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>

            <div className="modal-action">
              <button
                type="button"
                className="btn bg-blue-600 text-white"
                onClick={handleBorrow}
              >
                Submit
              </button>
              <button type="submit" className="btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default BookDetails;
