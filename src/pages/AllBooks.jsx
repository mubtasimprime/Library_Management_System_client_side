import { useLoaderData } from "react-router";
import AllBooksCard from "../components/AllBooksCard";
import AllBooksTable from "../components/AllBooksTable";
import { useState, useEffect } from "react";

const AllBooks = () => {
  const loadedData = useLoaderData();
  const books = loadedData.data || loadedData || [];

  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState("card");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  //  Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  //  Toggle functions
  const handleToggleAvailable = () => setShowAvailableOnly((prev) => !prev);
  const handleViewChange = (mode) => setViewMode(mode);
  const handleSortToggle = () =>
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  //  Filter + Search + Sort
  const filteredBooks = books
    .filter((book) => (showAvailableOnly ? book.quantity > 0 : true))
    .filter((book) => {
      const term = searchTerm.toLowerCase();
      return (
        book.name?.toLowerCase().includes(term) ||
        book.author?.toLowerCase().includes(term) ||
        book.category?.toLowerCase().includes(term)
      );
    });

  const sortedBooks = [...filteredBooks].sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  //  Pagination logic
  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);

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

          {/*  Search Bar */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by title, author, or category..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/*  Filter & Sort Buttons */}
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <button
              onClick={handleToggleAvailable}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
            >
              {showAvailableOnly ? "Show All Books" : "Show Available Books"}
            </button>

            <button
              onClick={handleSortToggle}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer"
            >
              Sort by Quantity (
              {sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>

            {/*  View Mode Switch */}
            <div className="flex gap-2">
              <button
                onClick={() => handleViewChange("card")}
                className={`px-6 py-2 rounded ${
                  viewMode === "card"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Card View
              </button>
              <button
                onClick={() => handleViewChange("table")}
                className={`px-6 py-2 rounded ${
                  viewMode === "table"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Table View
              </button>
            </div>
          </div>

          {/*  Book Display */}
          {viewMode === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8/12 mx-auto">
              {currentBooks.length > 0 ? (
                currentBooks.map((book) => (
                  <AllBooksCard key={book._id} book={book} />
                ))
              ) : (
                <p className="text-gray-500">No books found.</p>
              )}
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              {currentBooks.length > 0 ? (
                <AllBooksTable books={currentBooks} />
              ) : (
                <p className="text-gray-500">No books found.</p>
              )}
            </div>
          )}

          {/*  Pagination */}
          {totalPages > 1 && (
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
          )}
        </div>
      </section>
    </article>
  );
};

export default AllBooks;
