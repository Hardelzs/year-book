import { useState } from "react";
import { auth, googleProvider, db } from "../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/Login.jpg";
import SignImg from "../assets/Sign.jpg";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert("Password reset email sent! Check your inbox.");
      setShowResetModal(false);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to send reset email. Please try again");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          username: formData.username,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        });
      } else {
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
      }
      navigate("/YearBook"); // Navigate after login/signup
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          setError("Invalid email or password. Please try again.");
          break;
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password. Try again.");
          break;
        case "auth/email-already-in-use":
          setError("This email is already registered. Try logging in.");
          break;
        case "auth/too-many-requests":
          setError("Too many attempts. Please try again later.");
          break;
        default:
          setError("Something went wrong. Please try again.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          username: user.displayName || "",
          name: user.displayName || "",
          phone: "",
          email: user.email,
        });
      }
      navigate("/YearBook");
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center font-mono">
      <div
        className={`flex-col md:flex md:flex-row gap-20 max-w-5xl w-full ${
          isSignup ? "md:flex-row-reverse " : ""
        }`}
      >
        {/* Image Section */}
        <div
          className={`flex-shrink-0  ${
            isSignup
              ? "md:w-1/2"
              : "md:w-1/2"
          }`}
        >
          <img
            src={isSignup ? SignImg : LoginImg}
            alt="Auth Page"
            className="max-h-[80vh] md:rounded-md rounded-none  object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center w-full p-4">
          <div className="text-center space-y-2">
            <h1 className="text-4xl">
              {isSignup ? "Signup Here!" : "Welcome Back!"}
            </h1>
            <p className="text-sm">
              Continue with Google or enter your details.
            </p>

            {/* Google Sign-In Button */}
            <button
              className={`px-20 py-2 rounded-md mx-auto flex justify-center items-center gap-2 ${
                isSignup ? "bg-[#d7c2b4]" : "border border-black"
              }`}
              onClick={handleGoogleSignIn}
              type="button"
            >
              <FaGoogle className="text-2xl" />{" "}
              {isSignup ? "Signup with Google" : "Login with Google"}
            </button>

            {/* Display Error Message */}
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          </div>

          {/* Form Fields */}
          <form
            className="flex flex-col space-y-2 mt-6"
            onSubmit={handleSubmit}
          >
            {isSignup && (
              <>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Your Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border border-black rounded-md bg-transparent p-2 w-full text-sm focus:outline-none font-mono"
                  required
                />

                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-black rounded-md bg-transparent p-2 w-full text-sm focus:outline-none font-mono"
                  required
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-black rounded-md bg-transparent p-2 w-full text-sm focus:outline-none font-mono"
                  required
                />
              </>
            )}

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

            <p
              className="text-right text-sm cursor-pointer text-blue-600"
              onClick={() => setShowResetModal(true)}
            >
              {isSignup ? "" : "Forget Password"}
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className={` w-full py-2 rounded-md mt-6 mx-auto ${
                isSignup ? "bg-[#e6b191]" : "border border-black"
              }`}
            >
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
        </div>
      </div>

      {/* Password Reset Modal */}
      {showResetModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h2 className="text-xl font-bold mb-2">Reset Password</h2>
            <p className="text-sm mb-4">
              Enter your email to receive a reset link.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
              required
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
                onClick={() => setShowResetModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handlePasswordReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
