import React from "react";
import { Link } from "react-router";

const AllBooksCard = ({ book }) => {
  const { name, image, author, category, quantity, rating } = book;

  return (
    <div className="max-w-[250px] w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="h-64 overflow-hidden">
        <img
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          src={image}
          alt={`${name} cover`}
        />
      </div>
      <div className="p-4 space-y-2">
        <h1 className="text-xl font-bold text-gray-800 truncate">{name}</h1>
        <p className="text-gray-600 italic">{author}</p>

        <span className="text-sm bg-blue-100 text-blue-800 px-5 py-1 rounded-full">
          Category: {category}
        </span>
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm bg-blue-100 text-blue-800 px-4 py-1 rounded-full">
            Rating: {rating}.0
          </span>
          <span className="text-sm bg-blue-100 text-blue-800 px-4 py-1 rounded-full">
            Qty: {quantity}
          </span>
        </div>
      </div>

      <Link
        to={`/update-book/${book._id}`}
        className="block w-full bg-blue-600 text-white text-center font-semibold py-2 hover:bg-blue-800 transition duration-300"
      >
        Update
      </Link>
    </div>
  );
};

export default AllBooksCard;
