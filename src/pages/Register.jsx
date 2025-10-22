import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import { BiSolidImage } from "react-icons/bi";

const Register = () => {
  const { signUpWithEmail, setUser, updateUser, signInWithGoogle } =
    useContext(AuthContext);

  const [nameError, setNameError] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const navigate = useNavigate();

  // Google Sign In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log("Google Sign-in error:", error);
      });
  };

  //  Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value;
    const password = form.password.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    signUpWithEmail(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({
          displayName: name,
          photoURL: avatarUrl || "https://i.ibb.co/4pDNDk1/avatar.png",
        })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: avatarUrl || "https://i.ibb.co/4pDNDk1/avatar.png",
            });
            toast.success("Register successful!", { autoClose: 1500 });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        console.log("Register Error:", error.message);
        toast.error(error.message);
      });
  };

  //  Handle Image Upload to ImgBB
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    setPreviewImage(URL.createObjectURL(image));
    setUploading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const imageUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_upload_key
      }`;
      const res = await axios.post(imageUrl, formData);
      const hostedUrl = res.data.data.url;
      setAvatarUrl(hostedUrl);
      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error(error);
      toast.error("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="flex justify-center min-h-[calc(100vh-91px)] items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 border-2 border-zinc-300">
        <h2 className="font-bold text-[26px] text-center text-[#2f2f2f] mt-4">
          Register your account
        </h2>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset font-semibold text-[14px]">
            {/* Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              aria-label="Login with Google"
              type="button"
              className="flex p-3 border rounded-md cursor-pointer text-white bg-[#2f2f2f] hover:bg-black gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current text-white"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>

            <h1 className="text-center mt-2 font-bold text-[16px]">OR</h1>

            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input font-semibold"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Image Upload */}
            <div className="mt-2">
              <label className="block text-sm font-sm text-3 mb-1">
                Profile Picture
              </label>
              <div className="flex items-center gap-4">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-16 h-16 rounded-full object-cover border border-black"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                    <span className="text-white">
                      <BiSolidImage size={26} />
                    </span>
                  </div>
                )}
                <label className="flex-1">
                  <div className="btn border border-[#b2d8d8] w-full flex items-center justify-center gap-2 font-medium bg-white">
                    {uploading ? (
                      <>
                        <span className="loading loading-spinner text-primary"></span>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <FaUpload />
                        <span className="text-gray-500">Upload Image</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* Email */}
            <label className="label mt-2">Email</label>
            <input
              name="email"
              type="email"
              className="input font-semibold"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label mt-2">Password</label>
            <input
              name="password"
              type="password"
              className="input font-semibold"
              placeholder="Password"
              required
            />

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-neutral mt-3 bg-[#2f2f2f] hover:bg-black duration-300"
            >
              Register
            </button>

            {/* Login Link */}
            <p className="font-semibold text-center pt-4">
              Already Have An Account?
              <Link
                className="ml-1 hover:underline text-green-900"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Register;
