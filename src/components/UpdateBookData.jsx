import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";

const UpdateBookData = () => {
  const data = useLoaderData().data;
  const navigate = useNavigate();

  // Destructure existing book data
  const { _id, image, name, author, category, rating } = data;

  const [ratings, setRating] = useState(rating);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    formData.rating = ratings;

    fetch(`${import.meta.env.VITE_API_URL}/update-book-data/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Book updated successfully!");
          navigate("/"); // or navigate to book list/details
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update book.");
      });
  };

  return (
    <section className="bg-blue-50 py-10">
      <div className="max-w-9/12 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-1 md:mb-2 lg:mb-2">
            UPDATE BOOKS
          </h1>
          <p className="mb-8">
            Update books by entering the title, author, category, and details.
            Keep your library updated and well-organized effortlessly.
          </p>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4">
              <label className="text-black font-bold">Image</label>
              <input
                required
                defaultValue={image}
                name="image"
                type="text"
                className="input w-full font-semibold text-gray-700 border-gray-300 focus:outline-none"
                placeholder="Upload cover photo"
              />
            </fieldset>
            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4">
              <label className="text-black font-bold">Book Name</label>
              <input
                required
                defaultValue={name}
                name="book_name"
                type="text"
                className="input w-full font-semibold focus:outline-none text-gray-700 border-gray-300"
                placeholder="Title of the book"
              />
            </fieldset>
            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4">
              <label className="text-black font-bold">Author Name</label>
              <input
                required
                defaultValue={author}
                name="author"
                type="text"
                className="input w-full font-semibold focus:outline-none text-gray-700 border-gray-300"
                placeholder="Author Name"
              />
            </fieldset>

            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4">
              <label className="text-black font-bold">Category</label>
              <select
                name="category"
                className="select w-full focus:outline-none text-gray-700 border-gray-300 font-bold"
                defaultValue={category}
              >
                <option value="" disabled>
                  Select category
                </option>
                <option className="font-semibold" value="Novel">
                  Novel
                </option>
                <option className="font-semibold" value="Thriller">
                  Thriller
                </option>
                <option className="font-semibold" value="History">
                  History
                </option>
                <option className="font-semibold" value="Drama">
                  Drama
                </option>
              </select>
            </fieldset>

            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4">
              <label className="tex-black font-bold">Rating</label>
              <div className="border border-gray-300 rounded-md p-2 inline-block">
                <StarRatings
                  rating={rating}
                  starRatedColor="#2563eb" // blue-600
                  starHoverColor="#60a5fa" // blue-400
                  changeRating={(newRating) => setRating(newRating)}
                  numberOfStars={5}
                  starDimension="28px"
                  starSpacing="4px"
                />
              </div>
            </fieldset>
          </div>
          <input
            type="submit"
            className="btn w-full mt-5 bg-white"
            value="Update"
          />
        </form>
      </div>
    </section>
  );
};

export default UpdateBookData;
