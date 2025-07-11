import StarRatings from "react-star-ratings";
import { use, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";

const AddBooks = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [rating, setRating] = useState(0);
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const bookData = Object.fromEntries(formData.entries());
    bookData.rating = rating;
    console.log(bookData);

    axios
      .post(`${import.meta.env.VITE_API_URL}/add-books`, bookData)
      .then((res) => {
        // console.log(res.data.insertedId);
        if (res.data.insertedId) {
          toast.success("New Book Added!", {
            autoClose: 1500,
          });
          console.log(res.data);
        }
        setRating(0);
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });

    // fetch(`${import.meta.env.VITE_API_URL}/add-books`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(bookData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       toast.success("New Book Added!", {
    //         autoClose: 1500,
    //       });
    //       console.log(data);
    //     }
    //     setRating(0);
    //     form.reset();
    //   });
  };
  return (
    <section className="bg-blue-50 py-10">
      <div className="max-w-9/12 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-1 md:mb-2 lg:mb-2">Add Books</h1>
          <p className="mb-8">
            Add new books by entering the title, author, category, and details.
            Keep your library updated and well-organized effortlessly.
          </p>
        </div>
        <form onSubmit={handleFormData}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4">
              <label className="text-black font-bold">Image</label>
              <input
                required
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
                name="book_name"
                type="text"
                className="input w-full font-semibold focus:outline-none text-gray-700 border-gray-300"
                placeholder="Title of the book"
              />
            </fieldset>
            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4">
              <label className="text-black font-bold">Quantity</label>
              <input
                required
                name="quantity"
                type="text"
                className="input w-full font-semibold focus:outline-none text-gray-700 border-gray-300"
                placeholder="Book quantity"
              />
            </fieldset>

            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4">
              <label className="text-black font-bold">Author Name</label>
              <input
                required
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
                className="select w-full focus:outline-none text-gray-700 border-gray-300"
                defaultValue=""
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
              <label className="text-black font-bold">Short Description</label>
              <input
                required
                name="description"
                type="text"
                className="input w-full font-semibold focus:outline-none text-gray-700 border-gray-300"
                placeholder="Short Description"
              />
            </fieldset>
            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4">
              <label className="text-black font-bold">Content</label>
              <input
                required
                name="description"
                type="text"
                className="input w-full font-semibold focus:outline-none text-gray-700 border-gray-300"
                placeholder="Content"
              />
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

            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4 flex items-center gap-0 h-12">
              <label className="label text-black font-bold text-[15px]">
                Email :{" "}
              </label>
              <input
                name="email"
                type="text"
                className="input w-full font-semibold text-base cursor-not-allowed focus:outline-none border-none bg-white"
                value={user?.email || ""}
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset bg-white border-base-300 rounded-box border p-4 flex items-center gap-0 h-12">
              <label className="label text-black font-bold text-[15px]">
                Name :{" "}
              </label>
              <input
                name="name"
                type="text"
                className="input w-full font-semibold text-base cursor-not-allowed focus:outline-none border-none bg-white"
                value={user?.displayName || ""}
                readOnly
              />
            </fieldset>
          </div>
          <input
            type="submit"
            className="btn w-full mt-5 bg-white"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default AddBooks;
