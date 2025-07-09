import { Link } from "react-router";

const BookCategory = ({ books, setBooks }) => {
  const categories = [
    {
      id: 1,
      image: "https://i.ibb.co/359TXTbz/drama.jpg",
      category_name: "Drama",
    },
    {
      id: 2,
      image: "https://i.ibb.co/KjXBNs0f/history.jpg",
      category_name: "History",
    },
    {
      id: 3,
      image: "https://i.ibb.co/rGdrw1jz/novel.jpg",
      category_name: "Novel",
    },
    {
      id: 4,
      image: "https://i.ibb.co/ynz5907r/thriller.jpg",
      category_name: "Thriller",
    },
  ];
  return (
    <section className="max-w-9/12 mx-auto py-10">
      <h1 className="text-4xl font-bold mb-1 md:mb-2 lg:mb-2">
        Featured <span className="text-blue-600">Categories</span>
      </h1>
      <p className="mb-8">
        Embark book on futuristic journeys. Novel, Thriller, History and Drama
        wonders await in these mind-bending sagas.
      </p>
      {/* Feature Categories */}
      <div className="max-w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            className="bg-blue-100 p-4 rounded-lg shadow-md hover:scale-105 transition duration-400"
          >
            <img
              src={cat.image}
              alt={cat.category_name}
              className="w-full h-90 object-cover rounded-sm"
            />
            <h3 className="text-xl font-semibold mt-2 text-center">
              {cat.category_name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BookCategory;
