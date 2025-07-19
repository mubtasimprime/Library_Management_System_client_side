import StarRatings from "react-star-ratings";

const AllBooksTable = ({ books }) => {
  return (
    <section className="overflow-x-auto px-4 py-6 bg-white rounded-lg shadow">
      <table className="table w-full">
        <thead className="bg-blue-100 text-blue-800">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Author</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Rating</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id} className="hover:bg-blue-50">
              <td>
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-16 h-20 object-cover rounded"
                />
              </td>
              <td className="font-medium text-gray-800">{book.name}</td>
              <td className="text-gray-600 italic">{book.author}</td>
              <td>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {book.category}
                </span>
              </td>
              <td className="text-center font-bold text-gray-700">
                {book.quantity}
              </td>
              <td>
                <div className="flex items-center">
                  <StarRatings
                    rating={parseFloat(book.rating) || 0}
                    starRatedColor="#f59e0b"
                    starEmptyColor="#d1d5db"
                    starDimension="18px"
                    starSpacing="1px"
                    numberOfStars={5}
                    name="rating"
                  />
                  <span className="ml-1 text-sm text-gray-600">
                    ({book.rating})
                  </span>
                </div>
              </td>
              <td>
                <a
                  href={`/update-book-data/${book._id}`}
                  className="text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition"
                >
                  Update
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AllBooksTable;
