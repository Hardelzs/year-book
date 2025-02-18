import { useState } from "react";
import { auth, googleProvider } from "../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/Login.jpg";
import SignImg from "../assets/Sign.jpg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignup) {
        // Signup
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        // Login
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      }
      navigate("/YearBook"); // Navigate after login/signup
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/YearBook");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center font-mono">
      <div className={`flex gap-20 max-w-5xl w-full p-4  ${isSignup ? "flex-row-reverse" : ""}`}>
        
        {/* Image Section */}
        <div className={`flex-shrink-0 ${isSignup ? "w-1/2" : "w-1/2"}`}>
          <img
            src={isSignup ? SignImg : LoginImg}
            alt="Auth Page"
            className="max-h-[80vh] rounded-md object-cover w-full"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center w-full">
          <div className="text-center space-y-2">
            <h1 className="text-4xl">{isSignup ? "Signup Here!" : "Welcome Back!"}</h1>
            <p className="text-sm">Continue with Google or enter your details.</p>

            {/* Google Sign-In Button */}
            <button
              className="border border-black px-20 py-2 rounded-md mx-auto"
              onClick={handleGoogleSignIn}
              type="button"
            >
              {isSignup ? "Signup with Google" : "Login with Google"}
            </button>
          </div>

          {/* Form Fields */}
          <form className="flex flex-col space-y-2 mt-6" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="border border-black rounded-md bg-transparent p-2 w-full text-sm focus:outline-none font-mono"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="border border-black rounded-md bg-transparent p-2 w-full text-sm focus:outline-none font-mono"
              required
            />

            <p className="text-right text-sm cursor-pointer">Forgot Password?</p>

            {/* Submit Button */}
            <button type="submit" className="border border-black w-full py-2 rounded-md mt-6 mx-auto">
              {isSignup ? "Signup" : "Login"}
            </button>
          </form>

          {/* Toggle Between Login/Signup */}
          <p className="mt-4 text-center">
            {isSignup ? "Have an account? " : "Don't have an account? "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Login" : "Sign Up for free"}
            </span>
          </p>

          {/* Display Error Message */}
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
