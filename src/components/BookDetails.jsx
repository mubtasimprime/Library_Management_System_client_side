import StarRatings from "react-star-ratings";

const BookDetails = () => {
  const book = {
    image: "https://i.ibb.co/svXHSZRQ/novel-1.jpg",
    name: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    category: "Novel",
    quantity: 15,
    rating: 4,
    description:
      "A haunting literary mystery set in post-war Barcelona's secret library…",
    content:
      "Young Daniel discovers a novel by Julián Carax that sends him on a dec…",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Book Cover + Basic Info (Top Section) */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Cover Image */}
        <div className="w-full md:w-1/3">
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
          />
        </div>

        {/* Book Metadata */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-900">{book.name}</h1>
          <p className="text-lg text-gray-600 mt-1">by {book.author}</p>

          {/* Category + Quantity */}
          <div className="flex items-center gap-4 mt-3">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
              {book.category}
            </span>
            <span className="text-gray-700">
              {book.quantity > 0 ? (
                <span className="text-green-600">
                  {book.quantity} available
                </span>
              ) : (
                <span className="text-red-600">Out of stock</span>
              )}
            </span>
          </div>

          {/* Star Rating */}
          <div className="flex items-center mt-4">
            <StarRatings
              rating={book.rating}
              starRatedColor="#f59e0b" // amber-500
              starEmptyColor="#d1d5db" // gray-300
              starDimension="20px"
              starSpacing="2px"
              numberOfStars={5}
              name="rating"
            />
            <span className="ml-1 text-sm text-gray-600">({book.rating})</span>
          </div>

          {/* Short Description */}
          <p className="mt-4 text-gray-700 italic">{book.description}</p>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition">
              Add to Cart
            </button>
            <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-md transition">
              Save for Later
            </button>
          </div>
        </div>
      </div>

      {/* Full Content (Bottom Section) */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Synopsis</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">{book.content}</p>
      </div>
    </div>
  );
};

export default BookDetails;
