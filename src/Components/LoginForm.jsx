import {  useState } from "react";
import { auth, googleProvider } from "../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {  useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate(null)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isNewUser, setIsNewUser] = useState(false); // Toggle between login & signup
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isNewUser) {
        // Signup
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        // Login
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      }
      // onLogin();
      navigate('/YearBook') // Call parent function after login/signup
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // onLogin(); // Call parent function after login
      navigate('/YearBook')
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">{isNewUser ? "Sign Up" : "Login"}</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 text-sm font-mono border rounded"
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

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          {isNewUser ? "Sign Up" : "Login"}
        </button>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-2"
        >
          Sign in with Google
        </button>

        <p className="text-center mt-4 cursor-pointer text-blue-500" onClick={() => setIsNewUser(!isNewUser)}>
          {isNewUser ? "Already have an account? Login" : "New user? Sign up"}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
