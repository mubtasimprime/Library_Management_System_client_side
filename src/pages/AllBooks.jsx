import { useLoaderData } from "react-router";
import AllBooksCard from "../components/AllBooksCard";
import { useState } from "react";

const AllBooks = () => {
  const data = useLoaderData();
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const handleToggle = () => setShowAvailableOnly(!showAvailableOnly);

  const filteredBooks = showAvailableOnly
    ? data.data.filter((book) => book.quantity > 0)
    : data.data;

  return (
    <article className="bg-blue-50">
      <section className="py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-1 md:mb-2 lg:mb-2">ALL BOOKS</h1>
          <p className="mb-6 max-w-5xl mx-auto">
            Explore our curated collection of books, featuring gripping
            thrillers, insightful historical works, and powerful dramatic
            classics. Each book is listed with key details to help you find your
            perfect read.
          </p>

          {/* Filter Button */}
          <button
            onClick={handleToggle}
            className="mb-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {showAvailableOnly ? "Show All Books" : "Show Available Books"}
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7/12 mx-auto">
            {filteredBooks.map((book) => (
              <AllBooksCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default AllBooks;
