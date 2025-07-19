import { useLoaderData } from "react-router";
import AllBooksCard from "../components/AllBooksCard";
import AllBooksTable from "../components/AllBooksTable";
import { useState } from "react";

const AllBooks = () => {
  const data = useLoaderData();
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState("card");

  const handleToggleAvailable = () => setShowAvailableOnly(!showAvailableOnly);
  const handleViewChange = (mode) => setViewMode(mode);

  const filteredBooks = showAvailableOnly
    ? data.data.filter((book) => book.quantity > 0)
    : data.data;

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

          {viewMode === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8/12 mx-auto">
              {filteredBooks.map((book) => (
                <AllBooksCard key={book._id} book={book} />
              ))}
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <AllBooksTable books={filteredBooks} />
            </div>
          )}
        </div>
      </section>
    </article>
  );
};

export default AllBooks;
