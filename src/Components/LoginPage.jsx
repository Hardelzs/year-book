import { useState } from "react";
import LoginImg from "../assets/Login.jpg";
import SignImg from "../assets/Sign.jpg";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin}) => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate(null)
  const [FromData, setFormData] =useState({
    email: "",
    password: "",
  });
  const [isNewUser, setIsNewUser] = useState(false);

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
            <button className="border border-black px-20 py-2 rounded-md mx-auto">
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
              className="border border-black rounded-md bg-transparent p-2 w-full text-sm focus:outline-none font-mono"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="********"
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
