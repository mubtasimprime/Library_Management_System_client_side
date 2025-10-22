import { useLoaderData } from "react-router";
import AllBooksCard from "../components/AllBooksCard";
import AllBooksTable from "../components/AllBooksTable";
import { useEffect, useState } from "react";

const AllBooks = () => {
  const data = useLoaderData();
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState("card");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  const handleToggleAvailable = () => {
    setShowAvailableOnly(!showAvailableOnly);
    setCurrentPage(1);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleViewChange = (mode) => setViewMode(mode);

  // Filter available books
  const filteredBooks = showAvailableOnly
    ? data.data.filter((book) => book.quantity > 0)
    : data.data;

  // Pagination
  const totalBooks = filteredBooks.length;
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + booksPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <article className="bg-blue-50 min-h-screen">
      <section className="py-10 px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-1">ALL BOOKS</h1>
          <p className="text-sm md:text-base mb-6 max-w-5xl mx-auto">
            Explore our curated collection of books, featuring gripping
            thrillers, insightful historical works, and powerful dramatic
            classics.
          </p>

          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <button
              onClick={handleToggleAvailable}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
            >
              {showAvailableOnly ? "Show All Books" : "Show Available Books"}
            </button>

            <div className="dropdown">
              <label tabIndex={0} className="btn bg-blue-600 text-white m-1">
                View Mode
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[1]"
              >
                <li>
                  <button onClick={() => handleViewChange("card")}>
                    Card View
                  </button>
                </li>
                <li>
                  <button onClick={() => handleViewChange("table")}>
                    Table View
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* --- Book Display --- */}
          {viewMode === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8/12 mx-auto">
              {currentBooks.map((book) => (
                <AllBooksCard key={book._id} book={book} />
              ))}
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <AllBooksTable books={currentBooks} />
            </div>
          )}

          {/* --- Pagination --- */}
          <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageClick(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100 hover:bg-blue-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AllBooks;
