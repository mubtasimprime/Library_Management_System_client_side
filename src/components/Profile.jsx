import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaUpload } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext/AuthContext";

const Profile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || user?.name || "");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [previewImage, setPreviewImage] = useState(user?.photoURL || null);
  const [isEditing, setIsEditing] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Handle image preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreviewImage(URL.createObjectURL(file));
    setPhotoFile(file);
  };

  // Save updates
  const handleSave = async () => {
    setLoadingUpdate(true);
    try {
      let uploadedURL = photoURL;

      // Upload to ImgBB if file selected
      if (photoFile) {
        setUploading(true);
        const formData = new FormData();
        formData.append("image", photoFile);
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_image_upload_key
          }`,
          formData
        );
        uploadedURL = res.data.data.url;
        setUploading(false);
      }

      // Update Firebase auth
      await updateUser({ displayName: name, photoURL: uploadedURL });

      // Update locally in context
      setUser((prev) => ({
        ...prev,
        displayName: name,
        photoURL: uploadedURL,
      }));

      setPhotoURL(uploadedURL);
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
      setUploading(false);
    } finally {
      setLoadingUpdate(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl text-gray-500">
          Please log in to view profile
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 border border-blue-200">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={previewImage || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-3 object-cover"
          />
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label className="font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
            className="mt-1 w-full border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-gray-100"
          />
        </div>

        {/* Upload Image */}
        <div className="mb-4">
          <label className="font-medium">Profile Image:</label>
          <div className="flex items-center gap-3 mt-2">
            <label className="flex-1 cursor-pointer">
              <div className="border border-blue-300 px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                {uploading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Uploading...
                  </>
                ) : (
                  <>
                    <FaUpload />
                    <span>Choose Image</span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={!isEditing}
                />
              </div>
            </label>
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="w-16 h-16 rounded-full border border-blue-300 object-cover"
              />
            )}
          </div>
        </div>

        {/* Email (read-only) */}
        <div className="mb-4 p-3 bg-blue-100 rounded-md text-sm">
          <span className="font-medium">Email:</span> {user.email}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 cursor-pointer text-white px-5 py-2 rounded-md hover:bg-blue-700 duration-300"
            >
              Edit
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                disabled={loadingUpdate || uploading}
                className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 disabled:opacity-70"
              >
                {loadingUpdate ? "Saving..." : "Save"}
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white px-5 py-2 rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
