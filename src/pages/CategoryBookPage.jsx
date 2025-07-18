import { useLoaderData, useParams } from "react-router";
import AllBooksCard from "../components/AllBooksCard";

const CategoryBookPage = () => {
  const books = useLoaderData();
  const { category } = useParams();

  return (
    <article className="bg-blue-50">
      <section className="py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-1 md:mb-2 lg:mb-2">
            {category} Books
          </h1>
          <p className="mb-8 max-w-5xl mx-auto">
            Explore our curated collection of books, featuring gripping
            thrillers, insightful historical works, and powerful dramatic
            classics. Each book is listed with key details to help you find your
            perfect read. Discover stories that will captivate and inspire you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7/12 mx-auto ">
            {books.map((book) => (
              <AllBooksCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default CategoryBookPage;
