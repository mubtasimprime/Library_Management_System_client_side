import { useLoaderData } from "react-router";
import AllBooksCard from "../components/AllBooksCard";
import AllBooksTable from "../components/AllBooksTable";
import { useState, useEffect } from "react";

const AllBooks = () => {
  const data = useLoaderData();
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState("card");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  //  Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  //  Toggle show available books
  const handleToggleAvailable = () => setShowAvailableOnly(!showAvailableOnly);
  const handleViewChange = (mode) => setViewMode(mode);

  //  Toggle ascending/descending sort order
  const handleSortToggle = () =>
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));

  //  Filter and sort books
  const filteredBooks = showAvailableOnly
    ? data.data.filter((book) => book.quantity > 0)
    : data.data;

  const sortedBooks = [...filteredBooks].sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  //  Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);

  //  Page change handlers
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

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

            {/*  Sort Button */}
            <button
              onClick={handleSortToggle}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer"
            >
              Sort by Quantity (
              {sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>

            {/*  View Mode Dropdown */}
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

          {/*  Pagination */}
          <div className="flex justify-center mt-8 items-center gap-2 flex-wrap">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded border ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-blue-600 hover:bg-blue-100"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white border text-blue-600 hover:bg-blue-100"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded border ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-blue-600 hover:bg-blue-100"
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
