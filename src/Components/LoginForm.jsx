/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const LoginForm = ({ onLogin }) => {
  const [profileImage, setProfileImage] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setFormData((prev) => ({ ...prev, image: reader.result })); 
      };
      reader.readAsDataURL(file);
    }
  };

  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
       {/* The login page  */}
      <form
        className="bg-white p-6 rounded shadow-md w-80"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="text-5xl border-2 border-gray-500 hover:bg-gray-500 hover:text-white rounded-md p-2 text-gray-500"
        >
          <div className="flex flex-col items-center">
            <MdOutlineFileUpload />
            <p className="text-sm">Choose your image</p>
          </div>
        </button>
        {profileImage && (
          <img
            src={profileImage}
            alt="Profile Preview"
            className="w-20 h-20 rounded-full mt-4"
          />
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
