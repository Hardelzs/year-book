import { useState} from "react";
import LoginImg from "../assets/Login.jpg";
import SignImg from "../assets/Sign.jpg";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../FirebaseConfig";

const LoginPage = ({ onLogin}) => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate(null)
  const [formData, setFormData] =useState({
    email: "",
    password: "",
  });
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value}))
  }

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
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center font-mono">
      <div className={`flex gap-20 max-w-5xl w-full p-4 ${isSignup ? "flex-row-reverse" :"" }`}>
        
        {/* Image Section - Moves based on state */}
        <div className="flex-shrink-0">
          <img
            src={isSignup ? SignImg : LoginImg}
            alt="Auth Page"
            className="max-h-[80vh] rounded-md object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center w-full">
          <div className="text-center space-y-2">
            <h1 className="text-4xl">{isSignup ? "Signup Here!" : "Welcome Back!"}</h1>
            <p className="text-sm">
              Continue with Google or enter your details.
            </p>
            <button 
            className="border border-black px-20 py-2 rounded-md mx-auto"
            onChange={handleGoogleSignIn}
            type="button"
            >
              {isSignup ? "Signup with Google" : "Login with Google"}
            </button>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col space-y-2 mt-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
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
              placeholder="********"
              value={formData.password}
              className="border border-black rounded-md bg-transparent p-2 w-full text-sm focus:outline-none font-mono"
            />

            <p className="text-right text-sm cursor-pointer">Forgot Password?</p>
          </div>

          {/* Submit Button */}
          <button className="border border-black w-full py-2 rounded-md mt-6 mx-auto">
            {isSignup ? "Signup" : "Login"}
          </button>

          {/* Toggle Between Login/Signup */}
          <p className="mt-4 text-center">
            {isSignup ? "Have an account? " : "Doesn't have an account? "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Login" : "Sign Up for free"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
