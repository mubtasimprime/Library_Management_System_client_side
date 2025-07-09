import { useLoaderData } from "react-router";
import BookCategory from "../components/BookCategory";
import Hero from "../components/Hero";
import { useState } from "react";

const Home = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState(data?.data || []);

  return (
    <>
      <Hero></Hero>
      <BookCategory books={books} setBooks={setBooks}></BookCategory>
    </>
  );
};

export default Home;
